'use client';

import { JSX } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProp {
  as?: keyof JSX.IntrinsicElements;
  size?: 'min' | 'small' | 'regular' | 'medium' | 'large';
}

const sizeStyles = {
  min: css``,
  small: css``,
  regular: css`
    width: fit-content;
    height: auto;
    padding: 5px 10px;
    font-size: var(--font-sm);
  `,
  medium: css``,
  large: css``,
};

const Button = styled.button<ButtonProp>`
  // 기본사이즈 regular로 설정
  ${({ size = 'regular' }) => sizeStyles[size]}
`;

export { Button };
