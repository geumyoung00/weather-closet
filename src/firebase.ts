import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDuv7U4oxGDTf5ZE8sxjcscNCs-KGcCliE',
  authDomain: 'weather-closet-70598.firebaseapp.com',
  projectId: 'weather-closet-70598',
  storageBucket: 'weather-closet-70598.firebasestorage.app',
  messagingSenderId: '62335860686',
  appId: '1:62335860686:web:8a9fafda70ca4a97f9f59f',
  measurementId: 'G-DP8FGG5H4S',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);
