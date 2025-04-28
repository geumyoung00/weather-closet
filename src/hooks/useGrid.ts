// 위경도 변환으로 기상청 격자 정보 x, y 값 가져오기
// LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
import { UseGridParams, GridResult } from '../types/location';

var RE = 6371.00877; // 지구 반경(km)
var GRID = 5.0; // 격자 간격(km)
var SLAT1 = 30.0; // 투영 위도1(degree)
var SLAT2 = 60.0; // 투영 위도2(degree)
var OLON = 126.0; // 기준점 경도(degree)
var OLAT = 38.0; // 기준점 위도(degree)
var XO = 43; // 기준점 X좌표(GRID)
var YO = 136; // 기1준점 Y좌표(GRID)

export const useGrid = ({ code, v1, v2 }: UseGridParams): { rs: GridResult } => {
  const DEGRAD = Math.PI / 180.0;
  const RADDEG = 180.0 / Math.PI;

  const re = RE / GRID;
  const slat1 = SLAT1 * DEGRAD;
  const slat2 = SLAT2 * DEGRAD;
  const olon = OLON * DEGRAD;
  const olat = OLAT * DEGRAD;
  let sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);

  let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;

  let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);

  const rs: GridResult = {};

  if (code === 'toXY') {
    rs.lat = v1;
    rs.lng = v2;

    const lat = parseFloat(v1);
    const lng = parseFloat(v2);

    let ra = Math.tan(Math.PI * 0.25 + lat * DEGRAD * 0.5);
    ra = (re * sf) / Math.pow(ra, sn);
    let theta = lng * DEGRAD - olon;

    if (theta > Math.PI) theta -= 2.0 * Math.PI;
    if (theta < -Math.PI) theta += 2.0 * Math.PI;

    theta *= sn;

    rs.x = Math.floor(ra * Math.sin(theta) + XO + 0.5);
    rs.y = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
  } else {
    const x = parseFloat(v1);
    const y = parseFloat(v2);

    const xn = x - XO;
    const yn = ro - y + YO;

    let ra = Math.sqrt(xn * xn + yn * yn);
    if (sn < 0.0) ra = -ra;

    let alat = Math.pow((re * sf) / ra, 1.0 / sn);
    alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

    let theta: number;
    if (Math.abs(xn) <= 1e-7) {
      theta = 0.0;
    } else if (Math.abs(yn) <= 1e-7) {
      theta = Math.PI * 0.5;
      if (xn < 0.0) theta = -theta;
    } else {
      theta = Math.atan2(xn, yn);
    }

    const alon = theta / sn + olon;

    rs.lat = (alat * RADDEG).toString();
    rs.lng = (alon * RADDEG).toString();
  }

  return { rs };
};
