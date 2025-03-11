'use client';

import { JSX } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProp {
  as?: keyof JSX.IntrinsicElements;
  size?: 'small' | 'regular' | 'medium';
  type?: 'confirm' | 'cancel' | 'delete' | 'disabled';
}

const sizeStyles = {
  small: css`
    width: auto;
    height: auto;
    padding: 6px 12px;
    font-size: var(--font-sm);
  `,
  regular: css`
    width: 80px;
    height: auto;
    padding: 8px 0;
  `,
  medium: css`
    width: 160px;
    height: auto;
    padding: 12px 0;
  `,
};

const typeStyles = {
  confirm: css`
    background: var(--primary-color);
    color: var(--body-color);
  `,
  cancel: css`
    background-color: #e0e0e0;
  `,
  delete: css``,
  disabled: css``,
};

const Button = styled.button<ButtonProp>`
  border-radius: var(--space-min);
  ${({ size = 'regular' }) => sizeStyles[size]};
  ${({ type = 'confirm' }) => typeStyles[type]}
`;

export { Button };
