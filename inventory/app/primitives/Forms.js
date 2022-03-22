/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { Children } from 'react';
import NextLink from 'next/link';


import { colors, gridSize, borderRadius } from '../theme';

export const Label = props => (
    <label css={{ color: colors.greyDark }} {...props} />
);

export const Field = props => (
  <div 
  css={{ color: colors.greyDark, marginBottom: '1rem' }} 
  {...props} 
  />
);

export const Input = props => (
  <input
    css={{
      background: 0,
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: borderRadius,
      boxSizing: 'border-box',
      color: colors.greyDark,
      fontSize: 'inherit',
      margin: `${gridSize / 2}px 0`,
      outline: 0,
      padding: `${gridSize * 1.5}px ${gridSize * 2}px`,
      width: '100%',

      ':focus': {
        backgroundColor: 'white',
        borderColor: 'rgba(0, 0, 0, 0.33)',
      },
    }}
    {...props}
  />
);

export const Checkbox = props => (
  <input
  css = {css`
    position: relative;
    margin-right: 1rem;
    width: 1.5em;
    height: 1.5em;
    color: black;
    border: 1px solid gray;
    border-radius: 3px;
    appearance: none;
    outline: 0;
    cursor: pointer;
    transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
    &::before {
      position: absolute;
      content: '';
      display: block;
      top: 1px;
      left: 7px;
      width: 7px;
      height: 14px;
      border-style: solid;
      border-color: white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
    }
    &:checked {
      color: white;
      border-color: ${colors.theme};
      background: ${colors.theme};
      &::before {
        opacity: 1;
      }
    }
  `}
  {...props}
  />
)

export const Button = props => (
  <button
    css={{
      backgroundColor: colors.greyDark,
      border: 0,
      borderRadius: borderRadius,
      color: 'white',
      cursor: 'pointer',
      fontSize: 'inherit',
      margin: `${gridSize / 2}px 0`,
      padding: `${gridSize * 1.5}px ${gridSize * 2}px`,
    }}
    {...props}
  />
);

export const Group = ({ children, ...props }) => {
  const gutter = 4;
  return (
    <div
      css={{
        alignItems: 'center',
        display: 'flex',
        marginLeft: -gutter,
        marginRight: -gutter,
      }}
      {...props}
    >
      {Children.map(children, (kid, idx) => (
        <div
          key={idx}
          css={{
            marginLeft: gutter,
            marginRight: gutter,
          }}
        >
          {kid}
        </div>
      ))}
    </div>
  );
};
export const Link = ({ href, as, ...props }) => (
  <NextLink href={href} as={as} passHref>
    <a
      css={{
        color: 'inherit',
        cursor: 'pointer',
        display: 'inline-block',
        padding: `${gridSize * 1.5}px ${gridSize * 2}px`,
        textDecoration: 'none',

        ':hover': {
          textDecoration: 'underline',
        },
      }}
      {...props}
    />
  </NextLink>
);

export const TextArea = ({height = '150px', ...props }) => (
    <textarea
      css={{
        boxSizing: 'border-box',
        border: "1px solid rgba(0, 0, 0, 0.1)",
        width: "100%",
        height: height,
        outline: "none",
        resize: "none",
        borderRadius: "4px",
        padding: '1rem'
      }}
      {...props}
    />
);
