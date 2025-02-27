import { ListWrapper, Wrapper } from '@components/wrapper';
import Character from './home/CharacterWrapper';
import CurrentWrapper from './home/CurrentWrapper';
import OutfitWrapper from './home/OutfitWrapper';
import HourlyWrapper from './home/Hourly';
import WeeklyWrapper from './home/Weekly';

export default function Home() {
  return (
    <>
      <CurrentWrapper />
      <Character />
      <OutfitWrapper />
      <Wrapper $gap='8px' as='section'>
        <HourlyWrapper />
        <WeeklyWrapper />
      </Wrapper>
    </>
  );
}
