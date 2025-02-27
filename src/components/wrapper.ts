'use client';

import { JSX } from 'react';
import styled from 'styled-components';

interface WrapProp {
  $gap?: string;
  $mt?: string;
  $rowAlign?: string;
  $direction?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Wrapper = styled.div<WrapProp>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  gap: ${(props) => props.$gap || '0'};
  margin-top: ${(props) => props.$mt || '0'};
  width: ${(props) => (props.as === 'section' ? '100%' : 'auto')};
`;

const RowWrapper = styled(Wrapper)`
  flex-direction: row;
  justify-content: ${(props) => props.$rowAlign || 'center'};
`;

const AllWrapper = styled(Wrapper)`
  justify-content: flex-start;
  margin: 0 auto;
  height: auto;
  background: var(--background-color);
  padding-bottom: 96px;

  h1 {
    display: block;
    text-indent: -9999px;
    height: 0;
    line-height: 0;
  }
`;

const ListWrapper = styled(Wrapper)`
  align-items: flex-start;
  width: calc(100% - var(--space-lg));
  background: rgba(0, 0, 0, 0.1);
  border-radius: var(--space-min);
  padding: var(--space-sm);
  & > * {
    width: 100%;
  }
`;

const ListItem = styled.li<WrapProp>`
  display: flex;
  flex-direction: ${(props) => props.$direction || 'column'};
  align-items: center;
  gap: ${(props) => props.$gap || '8px'};
`;

const HourlyItem = styled(ListItem)``;

const WeeklyItem = styled(ListItem)`
  width: 100%;
  padding: var(--space-sm) var(--space-lg);
  background: rgba(0, 0, 0, 0.2);
  border-radius: var(--space-min);
  justify-content: space-between;

  & + li {
    margin-top: var(--space-min);
  }

  & > p {
    width: 30px;
    text-align: center;
  }

  p > span {
    margin-left: var(--space-rg);
  }
  p + p {
    margin-top: var(--space-min);
  }

  div {
    width: 55%;
  }
`;

export { Wrapper, RowWrapper, AllWrapper, ListWrapper, ListItem, HourlyItem, WeeklyItem };
