'use client';

import styled from 'styled-components';

interface TextProp {
  fontSize?: string;
  $weight?: number;
}

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
  }
`;

const Degree = styled.p`
  font-size: 60px;
  font-weight: 700;

  i {
    display: inline-block;
    font-style: normal;
    font-size: 56px;
  }
`;

const Text = styled.p<TextProp>`
  font-size: ${(prop) =>
    prop.fontSize === 'min'
      ? '12px'
      : prop.fontSize === 'small'
      ? '14px'
      : prop.fontSize === 'large'
      ? '20px'
      : '16px'};
  font-weight: ${(prop) => prop.$weight || 500};
  word-break: keep-all;

  span {
    display: inline-block;
  }

  span + span {
    margin-left: var(--space-sm);
  }
`;

export { Title, Degree, Text };
