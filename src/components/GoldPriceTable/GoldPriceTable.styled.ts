import styled, { keyframes } from 'styled-components';

// Ключова анімація для плавного руху вгору
const scrollAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%); /* Повний підйом таблиці */
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  
  position: relative;

  & > div {
    animation: ${scrollAnimation} 50s linear infinite; /* Плавна анімація */
  }
`;



export const TableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 рівні колонки */
  width: 100%;
  border-collapse: collapse;

  & > div {
    border: 1px solid #ddd;
    padding: 10px;
    position: static;
  }
`;

export const TableRow = styled.div`
  display: contents;
// animation: ${scrollAnimation} 10s linear infinite;
  & > div {
    transition: transform 0.5s ease, background-color 0.5s ease;
  }

  &:hover > div {
    background-color: #53fa00f0;
    transform: scale(1.05); /* Масштабування комірок */
  }
`;
export const TableHeaderRow = styled.div`
  display: contents;

  & > div {
    position: sticky; /* Закріплення заголовка */
    top: 0;           /* Завжди закріплюється у верхній частині контейнера */
    background-color: #01283c; /* Колір фону */
    color: #fff;     /* Колір тексту */
    font-weight: bold;
    z-index: 10;     /* Поверх інших елементів */
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
`;
export const TableCell = styled.div`
  flex: 1;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 13px;
`;

export const AnimatedCell = styled.div`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 13px;
  flex: 1; /* Однакова ширина для всіх клітинок */

`;
 

