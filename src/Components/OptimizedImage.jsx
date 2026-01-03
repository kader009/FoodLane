import PropTypes from 'prop-types';

const OptimizedImage = ({
  src,
  alt,
  width = 650,
  height = 400,
  className = '',
  loading = 'lazy',
  priority = false,
}) => {
  // Pexels URL optimization helper
  const optimizeUrl = (url, w, h, quality = 80) => {
    if (!url) return '';

    // Check if it's a Pexels URL
    if (url.includes('pexels.com')) {
      // Remove existing query params
      const baseUrl = url.split('?')[0];
      return `${baseUrl}?auto=compress&cs=tinysrgb&w=${w}&h=${h}&q=${quality}&fm=webp&fit=crop`;
    }

    // For other URLs, return as is
    return url;
  };

  const srcMain = optimizeUrl(src, width, height, 80);

  // Generate srcSet for responsive images
  const srcSet = `
    ${optimizeUrl(
      src,
      Math.floor(width * 0.5),
      Math.floor(height * 0.5),
      80
    )} ${Math.floor(width * 0.5)}w,
    ${optimizeUrl(src, width, height, 80)} ${width}w,
    ${optimizeUrl(src, width * 2, height * 2, 75)} ${width * 2}w
  `.trim();

  const sizes = `(max-width: 640px) ${Math.floor(
    width * 0.5
  )}px, (max-width: 1024px) ${width}px, ${width * 2}px`;

  return (
    <img
      src={srcMain}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : loading}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  priority: PropTypes.bool,
};

export default OptimizedImage;
