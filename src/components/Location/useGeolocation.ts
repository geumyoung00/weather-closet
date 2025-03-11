import { useEffect, useState } from 'react';
import { Latlng } from '../../types/location';

export const useGeolocation = () => {
  const [location, setLocation] = useState<Latlng | { isLoading: boolean }>({ isLoading: true });
  const [error, setError] = useState<string | null>(null);

  const successHandler = (res: {
    coords: {
      latitude: number;
      longitude: number;
    };
  }) => {
    const { latitude, longitude } = res.coords;
    setLocation({ latitude, longitude, isLoading: false });
  };

  const errorHandler = (error: GeolocationPositionError) => {
    switch (error.code) {
      case 1:
        setError('위치 정보 수집 동의 여부를 확인해주세요. 동의하지 않으실 경우 기본 설정으로 제공됩니다.');
        setLocation({ isLoading: false });
        break;

      case 2:
        setError('잠시 후 다시 시도해주세요. 지속적으로 해결되지 않을 경우 관리자에게 문의해주세요.');
        break;

      case 3:
        setError('인터넷 환경을 확인해주세요.');
        break;
    }
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 10000,
  };

  useEffect(() => {
    const { geolocation } = navigator;
    geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  return { location, error };
};
