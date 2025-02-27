'use client';

import { Wrapper } from '@components/wrapper';
import styled from 'styled-components';

const CharacterWrapper = styled(Wrapper)`
  height: 25vh;
  background: rgba(125, 25, 255, 0.2);
`;

export default function Character() {
  return <CharacterWrapper as='section'></CharacterWrapper>;
}
