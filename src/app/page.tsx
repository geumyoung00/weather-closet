import Location from '@components/location/Location';

/** 메인페이지 확인 사항
 * 1. 회원 / 비회원
 * 2. gps 활용 동의 여부
 *  1) 최초 로딩시 위치 접근 여부 확인
 *  2) 위치정보 바로 가져오기
 */

export default function Home() {
  return (
    <>
      <Location />
    </>
  );
}
