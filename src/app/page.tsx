export default function Home() {
  return (
    <>
      <div className='location'>
        <i className='gps-icon'></i>
        <p>현재 위치</p>
        <h2>선택된 위치명</h2>
        <p className='now-degree'>
          20<i>º</i>
        </p>
        <p></p>
      </div>
      <div>Hourly List</div>
      <div>Weekly List</div>
    </>
  );
}
