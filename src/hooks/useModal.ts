'use client';

import { useCallback, useState } from 'react';
import { useModalProps } from '../types/modal';

const useModal = (initialModals: useModalProps = {}) => {
  const [modals, setModals] = useState<useModalProps>(initialModals);

  const openModal = useCallback((key: string) => {
    setModals((prev) => ({ ...prev, [key]: true }));
  }, []);

  const closeModal = useCallback((key: string) => {
    setModals((prev) => ({ ...prev, [key]: false }));
  }, []);

  const isOpen = useCallback((key: string) => Boolean(modals[key as keyof useModalProps]), [modals]);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
