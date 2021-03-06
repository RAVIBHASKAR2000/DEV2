/** @jsx jsx */
import { Children } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { gql } from '@apollo/client';

export const Avatar = ({
  alt,
  margin = 'none',
  size = 'medium',
  shape = 'circle',
  image,
  src,
  ...props
}) => {
  const pixelSize = sizeMap[size];
  const offset = marginMap[margin];
  const styles = {
    backgroundColor: '#F2F2F2',
    borderRadius: shapeMap[shape],
    display: 'block',
    height: pixelSize,
    width: pixelSize,
    ...offset,
  };
  if (src) {
    return <img css={styles} src={src} alt={alt} {...props} />;
  }
  if (image && image[size]) {
    return <img css={styles} src={image[size]} alt={alt} {...props} />;
  }

  const fallbackStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#B3B3B3',
    border: '2px solid white',
    fontWeight: 600,
    fontSize: fontSizeMap[size],
  };

  return (
    <span css={[styles, fallbackStyles]} {...props}>
      {alt
        .split(' ')
        .map(w => w.charAt(0))
        .join('')
        .toUpperCase()}
    </span>
  );
};

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.shape({ xsmall: PropTypes.string }),
    PropTypes.shape({ small: PropTypes.string }),
    PropTypes.shape({ medium: PropTypes.string }),
    PropTypes.shape({ large: PropTypes.string }),
    PropTypes.shape({ xlarge: PropTypes.string }),
    PropTypes.shape({ xxlarge: PropTypes.string }),
  ]),
  margin: PropTypes.oneOf(['none', 'both', 'bottom', 'top']),
  shape: PropTypes.oneOf(['circle', 'rounded', 'square']).isRequired,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']).isRequired,
  src: PropTypes.string,
};

const textGutter = '1em';
const marginMap = {
  none: { margin: 0 },
  both: { marginBottom: textGutter, marginTop: textGutter },
  bottom: { marginBottom: textGutter, marginTop: 0 },
  top: { marginBottom: 0, marginTop: textGutter },
};
const sizeMap = {
  xsmall: 24,
  small: 30,
  medium: 45,
  large: 60,
  xlarge: 90,
  xxlarge: 180,
};
const shapeMap = {
  circle: '50%',
  rounded: 4,
  square: null,
};

const fontSizeMap = {
  xsmall: '0.75rem',
  small: '0.88rem',
  medium: '1.2rem',
  large: '1.6rem',
  xlarge: '2.4rem',
  xxlarge: '3.2rem',
};

// ==============================
// Normalize a common pattern
// ==============================

export const AvatarLayout = ({
  as: Tag = 'div',
  children,
  margin = 'none',
  spacing = '1em',
  ...props
}) => {
  const [avatar, ...content] = Children.toArray(children);
  const offset = marginMap[margin];

  return (
    <Tag css={{ display: 'flex', alignItems: 'center', ...offset }} {...props}>
      <div css={{ marginRight: spacing }}>{avatar}</div>
      <div css={{ flex: 1, lineHeight: 1.2 }}>{content}</div>
    </Tag>
  );
};

AvatarLayout.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  margin: PropTypes.oneOf(['none', 'both', 'bottom', 'top']),
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 30, '1.2em'
};
