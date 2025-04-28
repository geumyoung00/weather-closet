'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { ListItem, ListWrapper, RowWrapper, WeeklyItem, Wrapper } from '@components/wrapper';
import { Degree, Text, Title } from '@components/text';
import { Icon, IconMin, IconOutfit, IconWeather } from '@components/icons';
import { Latlng } from '../../types/location';
import { useGeolocation } from '@hooks/useGeolocation';
import { useGrid } from '@hooks/useGrid';

const CharacterWrapper = styled(Wrapper)`
  height: 25vh;
  background: rgba(125, 25, 255, 0.2);
`;

export default function Location({ selectedLocation }: { selectedLocation?: Latlng }) {
  const [location, setLocation] = useState<Latlng>();
  const [locationName, setLocationName] = useState<string>();
  const { requestCurrentLocation, currentLocation, error, isLoading } = useGeolocation();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      alert(error);
      //기본 지역으로 설정
      setLocation({ latitude: 37.413294, longitude: 127.0495556 });
      setLocationName('서울특별시');
      return;
    }

    const nowLocation = selectedLocation ?? currentLocation;
    // null 병합 연산자 : 좌측 피연산자가 null, undefined일 경우(nullish) 우측 피연사자를 반환.

    if (!nowLocation) {
      requestCurrentLocation();
    } else {
      setLocation(nowLocation);
    }
  }, [error, currentLocation, selectedLocation]);

  return (
    <>
      {/* 선택된 위치의 날씨 정보 */}
      {isLoading && <p>Please wait Loading...</p>}
      <Wrapper as='section' $gap='8px'>
        <Title>
          {currentLocation && (
            <p>
              <IconMin></IconMin>
              GPS 수집 중
            </p>
          )}
          {locationName}
        </Title>
        <Degree>
          20<i>º</i>
        </Degree>
        <Wrapper $gap='4px'>
          <Text>오늘 날씨 요약 문구</Text>
          <Text fontSize='small'>
            <span>최저: 16º</span>
            <span>최고: 24º</span>
          </Text>
        </Wrapper>
      </Wrapper>

      {/* 날씨에 맞는 캐릭터 이미지 노출 */}
      <CharacterWrapper as='section' />

      {/* 오늘 추천 옷차림 */}
      <Wrapper as='section' $gap='16px'>
        {/**주요 예보 소개 : 주요예보가 있을 경우만 보이게 */}
        <RowWrapper $gap='4px'>
          <Icon></Icon>
          <Text fontSize='small' $weight={700}>
            주요 예보가 있을 경우 보여주는 문구
          </Text>
        </RowWrapper>
        {/* 옷차림 목록 */}
        <RowWrapper $gap='8px' as='ul'>
          <ListItem>
            <IconOutfit>
              <img src='/' />
            </IconOutfit>
            <Text>의류명</Text>
          </ListItem>
          <ListItem>
            <IconOutfit>
              <img src='/' />
            </IconOutfit>
            <Text>의류명</Text>
          </ListItem>
          <ListItem>
            <IconOutfit>
              <img src='/' />
            </IconOutfit>
            <Text>의류명</Text>
          </ListItem>
          <ListItem>
            <IconOutfit>
              <img src='/' />
            </IconOutfit>
            <Text>의류명</Text>
          </ListItem>
        </RowWrapper>
      </Wrapper>

      <Wrapper $gap='8px' as='section'>
        {/* 시간별 날씨 예보 리스트 */}
        <ListWrapper $gap='8px'>
          <Text as='h3' $weight={700} fontSize='small'>
            시간별 예보
          </Text>
          <RowWrapper as='ul' $rowAlign='flex-start'>
            <ListItem $gap='4px'>
              <Text fontSize='min' $weight={700}>
                시간
              </Text>
              <IconWeather></IconWeather>
              <Text fontSize='min' $weight={700}>
                기온º
              </Text>
            </ListItem>
          </RowWrapper>
        </ListWrapper>

        {/* 10일간 예보 */}
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
          </Wrapper>
        </ListWrapper>
      </Wrapper>
    </>
  );
}
