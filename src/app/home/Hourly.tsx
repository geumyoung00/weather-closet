import { IconWeather } from '@components/icons';
import { Text } from '@components/text';
import { RowWrapper, ListWrapper, HourlyItem } from '@components/wrapper';

export default function HourlyWrapper() {
  return (
    <ListWrapper $gap='8px'>
      <Text as='h3' $weight={700} fontSize='small'>
        시간별 예보
      </Text>
      <RowWrapper as='ul' $rowAlign='flex-start'>
        <HourlyItem $gap='4px'>
          <Text fontSize='min' $weight={700}>
            시간
          </Text>
          <IconWeather></IconWeather>
          <Text fontSize='min' $weight={700}>
            기온º
          </Text>
        </HourlyItem>
      </RowWrapper>
    </ListWrapper>
  );
}
