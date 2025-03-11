'use client';

import { Button } from '@components/button';
import useModal from './useModal';

export default function Modal({ children, closeModal }: { children: React.ReactNode; closeModal: () => void }) {
  return (
    <div>
      {children}
      <Button onClick={() => closeModal()}>닫기</Button>
    </div>
  );
}
