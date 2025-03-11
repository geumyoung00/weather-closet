'use client';

import { useEffect, useState } from 'react';
import { useGeolocation } from './useGeolocation';

import styled from 'styled-components';
import { ListItem, ListWrapper, RowWrapper, WeeklyItem, Wrapper } from '@components/wrapper';
import { Degree, Text, Title } from '@components/text';
import { Icon, IconMin, IconOutfit, IconWeather } from '@components/icons';
import useModal from '@components/modal/useModal';
import { Button } from '@components/button';
import Modal from '@components/modal/modal';

const CharacterWrapper = styled(Wrapper)`
  height: 25vh;
  background: rgba(125, 25, 255, 0.2);
`;

/** 구현기능
 * 1. GPS 활용 동의 모달창을 통해서 사용자 위치 조회
 * 2. GPS 활용 동의시 사용자 위치 따른 날씨 정보 노출
 * 3. gps 활용 비동의시 기본설정위치에 따른 날씨 정보 노출
 */

export default function Location() {
  const { isOpen, openModal, closeModal } = useModal();
  // const { location, error } = useGeolocation();
  // console.log('location__?', location);

  // useEffect(() => {
  //   if (error) alert(error);
  // }, [error]);

  useEffect(() => {
    openModal('test');
  }, [openModal]);

  return (
    <>
      {/* 선택된 위치의 날씨 정보 */}
      <Wrapper as='section' $gap='8px'>
        <Title>
          <p>
            <IconMin></IconMin>
            GPS 수집 중
          </p>
          Now GPS location
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

      {isOpen('test') && <Modal closeModal={() => closeModal('test')} />}
    </>
  );
}
