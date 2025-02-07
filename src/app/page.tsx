import Container from '@components/container/Container';

export default function Home() {
  return (
    <>
      <Container isMain>
        <div className='location'>
          <i className='gps-icon'></i>
          <p>현재 위치</p>
          <h2>선택된 위치명</h2>
          <p className='now-degree'>
            20<i>º</i>
          </p>
          <p></p>
        </div>
      </Container>
      <Container>Hourly List</Container>
      <Container>Weekly List</Container>
    </>
  );
}
