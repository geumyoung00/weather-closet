'use client';

import { useState } from 'react';
import { Modals } from '../../types/modal';

const useModal = () => {
  const [modals, setModals] = useState<Modals>({});

  const openModal = (key: string) => {
    setModals((prev) => ({ ...prev, [key]: true }));
  };

  const closeModal = (key: string) => {
    setModals((prev) => ({ ...prev, [key]: false }));
  };

  const isOpen = (key: string) => !!modals[key as keyof Modals];

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
