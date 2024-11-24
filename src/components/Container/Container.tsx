import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

const StyledContainer = styled.main`
  margin: 0 auto;
  padding: 16px;
  width: 100%;
  max-width: 1440px;

  /* Оптимальний респонсивний дизайн */
  @media (min-width: 768px) {
    padding: 24px;
  }

  @media (min-width: 1024px) {
    padding: 32px;
  }

  @media (min-width: 1440px) {
    padding: 48px;
  }

  /* Додаткові покращення */
  box-sizing: border-box; /* Захист від проблем з padding */
  background: linear-gradient(
    180deg,
    #f7f7f7,
    #ffffff
  ); /* Легкий градієнт для фону */
  border-radius: 8px; /* М'які кути */
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1); /* Тінь для об'єму */
`;

interface MainContainerProps {
  children: ReactNode;
}

const Container: React.FC<MainContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
