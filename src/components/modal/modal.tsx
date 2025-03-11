'use client';

import React from 'react';
import { Button } from '@components/button';
import { ModalProps } from '../../types/modal';
import styled from 'styled-components';
import { RowWrapper } from '@components/wrapper';
import { Text } from '@components/text';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
`;

const Container = styled.div`
  width: 48vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-lg);
  background: var(--background-color);
  border-radius: var(--space-rg);
  box-shadow: 0 2px 8px 8px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    margin-bottom: var(--space-sm);
  }
`;

const Modal = React.memo(({ closeModal }: ModalProps) => {
  const handleConfirm = () => {
    console.log('confirm');
    closeModal();
  };
  const handleCancel = () => {
    console.log('cancel');
    closeModal();
  };

  return (
    <ModalWrapper>
      <Container>
        <Text>위치 정보 활용에 동의하시겠습니까?</Text>
        <Text>위치 정보 활용에 동의하지 않으신다면 원하는 위치를 직접 선택해주세요.</Text>
        <RowWrapper $gap='16px' $mt='16px'>
          <Button type='cancel' onClick={handleCancel}>
            비동의
          </Button>
          <Button onClick={handleConfirm}>동의</Button>
        </RowWrapper>
      </Container>
    </ModalWrapper>
  );
});

export default Modal;
