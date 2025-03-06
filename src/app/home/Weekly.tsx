import { IconWeather } from '@components/icons';
import { Text } from '@components/text';
import { WeeklyItem, ListWrapper, Wrapper, RowWrapper } from '@components/wrapper';

export default function WeeklyWrapper() {
  return (
    <ListWrapper $gap='8px'>
      <Text as='h3' $weight={700} fontSize='small'>
        주간 예보
      </Text>
      <Wrapper as='ul' $rowAlign='flex-start'>
        <WeeklyItem>
          <Text $weight={700}>오늘</Text>
          <IconWeather></IconWeather>
          <Wrapper>
            <Text fontSize='small'>
              최고 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
            <Text fontSize='small'>
              최저 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
          </Wrapper>
        </WeeklyItem>
        <WeeklyItem>
          <Text $weight={700}>금</Text>
          <IconWeather></IconWeather>
          <Wrapper>
            <Text fontSize='small'>
              최고 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
            <Text fontSize='small'>
              최저 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
          </Wrapper>
        </WeeklyItem>
        <WeeklyItem>
          <Text $weight={700}>금</Text>
          <IconWeather></IconWeather>
          <Wrapper>
            <Text fontSize='small'>
              최고 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
            <Text fontSize='small'>
              최저 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
          </Wrapper>
        </WeeklyItem>
        <WeeklyItem>
          <Text $weight={700}>금</Text>
          <IconWeather></IconWeather>
          <Wrapper>
            <Text fontSize='small'>
              최고 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
            <Text fontSize='small'>
              최저 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
          </Wrapper>
        </WeeklyItem>
        <WeeklyItem>
          <Text $weight={700}>금</Text>
          <IconWeather></IconWeather>
          <Wrapper>
            <Text fontSize='small'>
              최고 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
            <Text fontSize='small'>
              최저 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
          </Wrapper>
        </WeeklyItem>
        <WeeklyItem>
          <Text $weight={700}>금</Text>
          <IconWeather></IconWeather>
          <Wrapper>
            <Text fontSize='small'>
              최고 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
            <Text fontSize='small'>
              최저 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
          </Wrapper>
        </WeeklyItem>
        <WeeklyItem>
          <Text $weight={700}>금</Text>
          <IconWeather></IconWeather>
          <Wrapper>
            <Text fontSize='small'>
              최고 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
            <Text fontSize='small'>
              최저 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
          </Wrapper>
        </WeeklyItem>
        <WeeklyItem>
          <Text $weight={700}>금</Text>
          <IconWeather></IconWeather>
          <Wrapper>
            <Text fontSize='small'>
              최고 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
            <Text fontSize='small'>
              최저 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
          </Wrapper>
        </WeeklyItem>
        <WeeklyItem>
          <Text $weight={700}>금</Text>
          <IconWeather></IconWeather>
          <Wrapper>
            <Text fontSize='small'>
              최고 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
            <Text fontSize='small'>
              최저 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
          </Wrapper>
        </WeeklyItem>
        <WeeklyItem>
          <Text $weight={700}>금</Text>
          <IconWeather></IconWeather>
          <Wrapper>
            <Text fontSize='small'>
              최고 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
            <Text fontSize='small'>
              최저 : 기온º{' '}
              <Text fontSize='small' as='span'>
                추천 옷차림
              </Text>
            </Text>
          </Wrapper>
        </WeeklyItem>
      </Wrapper>
    </ListWrapper>
  );
}
