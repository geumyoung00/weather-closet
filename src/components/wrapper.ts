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
  width: 100%;
  height: auto;
  gap: ${(props) => props.$gap || '0'};
  margin-top: ${(props) => props.$mt || '0'};

  ${(props) =>
    props.as === 'section' &&
    `
    padding: 0 var(--space-rg);
  `}
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
  position: relative;

  h1 {
    display: block;
    text-indent: -9999px;
    height: 0;
    line-height: 0;
  }
`;

const ListWrapper = styled(Wrapper)`
  align-items: flex-start;
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

const WeeklyItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 50%;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding: var(--space-sm);
  background: rgba(0, 0, 0, 0.2);
  border-radius: var(--space-min);

  & + li {
    margin-top: var(--space-min);
  }

  & > p {
    text-align: center;
    width: 30px;
  }

  p > span {
    margin-left: var(--space-rg);
  }

  p + p {
    margin-top: var(--space-min);
  }
`;

export { Wrapper, RowWrapper, AllWrapper, ListWrapper, ListItem, WeeklyItem };
