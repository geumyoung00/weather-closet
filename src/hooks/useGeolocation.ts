// 위치 정보 가져오기

import { useEffect, useState } from 'react';
import { Latlng } from '../types/location';
import { stat } from 'fs';

export const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState<Latlng | null>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsloading] = useState<boolean>(false);

  const successHandler = (res: {
    coords: {
      latitude: number;
      longitude: number;
    };
  }) => {
    const { latitude, longitude } = res.coords;
    setCurrentLocation({ latitude, longitude });
    setIsloading(false);
  };

  const errorHandler = (error: GeolocationPositionError) => {
    switch (error.code) {
      case 1:
        setError('위치 정보 수집 동의 여부를 확인해주세요.');
        setIsloading(false);
        break;

      case 2:
        setError('잠시 후 다시 시도해주세요. 지속적으로 해결되지 않을 경우 관리자에게 문의해주세요.');
        setIsloading(false);

        break;

      case 3:
        setError('인터넷 환경을 확인해주세요.');
        setIsloading(false);
        break;

      default:
        setError('알 수 없는 오류가 발생했습니다. 관리자에게 문의하세요.');
        setIsloading(false);
        break;
    }
  };

  const requestCurrentLocation = async () => {
    setIsloading(true);
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 10000,
    });
  };

  return { currentLocation, error, requestCurrentLocation, isLoading };
};
