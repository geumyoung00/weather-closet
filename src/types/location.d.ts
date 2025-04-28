interface Latlng {
  latitude?: number;
  longitude?: number;
}

interface UseGridParams {
  code: 'toXY' | 'toLL';
  v1: string; // string 형태로 위도
  v2: string; // string 형태로 경도
}

interface GridResult {
  lat?: string;
  lng?: string;
  x?: number;
  y?: number;
}

export { Latlng, UseGridParams, GridResult };
