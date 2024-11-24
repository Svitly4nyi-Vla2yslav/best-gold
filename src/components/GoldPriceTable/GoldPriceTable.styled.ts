import styled from 'styled-components';

export const Table = styled.table`

  width: 60%;
  margin: 1rem auto;
  border-collapse: collapse;
  // height: 70%;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
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
