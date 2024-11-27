import styled from 'styled-components';

export const Table = styled.table`

  width: 60%;
  margin: 1rem auto;
  border-collapse: collapse;
  // height: 70%;
`;

export const TableRow = styled.tr`
  // &:nth-child(even) {
  //   background-color: #f9f9f9;
  // }

  transition: all 0.3s ease-in-out;
  position: relative;
  
  &:hover {
    // color: #00d1ff;
    transform: scale(1.1);
     background-color: #53fa00f0;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: #00d1ff;
    transition: width 0.3s ease-in-out;
  }

  &.active {
    color: #00d1ff;
    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
  }
`;

export const TableCell = styled.td`
  padding: 0.50rem;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 13px;
`;

export const TableHeader = styled.th`
  padding: 0.50rem;
  background-color: #333;
  color: #fff;
  text-align: center;
`;
