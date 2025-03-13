'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@components/button';
import { ModalProps } from '../../types/modal';
import { RowWrapper } from '@components/wrapper';
import { Text } from '@components/text';
import { useGeolocation } from '@hooks/useGeolocation';

const GpsModal = React.memo(({ closeModal }: ModalProps) => {
  const handleConfirm = () => {};
  const handleCancel = () => closeModal();

  return (
    <ModalWrapper>
      <Container>
        <Text>위치 정보 활용 동의가 필요합니다.</Text>
        <Text>만약 원치 않으신다면 위치를 직접 선택해주세요.</Text>
        <RowWrapper $gap='16px' $mt='16px'>
          <Button size='two' type='cancel' onClick={handleCancel}>
            직접 선택하기
          </Button>
          <Button size='two' onClick={handleConfirm}>
            위치 설정 열기
          </Button>
        </RowWrapper>
      </Container>
    </ModalWrapper>
  );
});

export default GpsModal;

const ModalWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  position: fixed;
  z-index: 100;
`;

const Container = styled.div`
  width: calc(100% - (var(--space-lg) * 4));
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
function closeModal() {
  throw new Error('Function not implemented.');
}
