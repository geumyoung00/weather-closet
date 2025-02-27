import { Icon, IconOutfit } from '@components/icons';
import { Text } from '@components/text';
import { ListItem, RowWrapper, Wrapper } from '@components/wrapper';

export default function OutfitWrapper() {
  return (
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
  );
}
