'use client';

import styled from 'styled-components';

const Icon = styled.i`
  display: block;
  width: 26px;
  height: 26px;
  background-color: gray;
`;

const IconMin = styled(Icon)`
  width: 16px;
  height: 16px;
  background-color: blueviolet;
`;

const IconOutfit = styled(Icon)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
`;

const IconWeather = styled(Icon)`
  width: 44px;
  height: 44px;
`;

export { Icon, IconMin, IconOutfit, IconWeather };
