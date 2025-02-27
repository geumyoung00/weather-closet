import { Wrapper } from '@components/wrapper';
import { Degree, Title, Text } from '@components/text';
import { IconMin } from '@components/icons';

export default function CurrentWrapper() {
  //GPS 사용 동의 유무에 따라 노출위치 바꿔주기
  return (
    <>
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
    </>
  );
}
