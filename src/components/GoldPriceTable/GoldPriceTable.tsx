import React from 'react';
import {
  Table,
  TableRow,
  TableHeader,
  TableCell,
} from './GoldPriceTable.styled';
import { metalPrices } from './goldPrices';

const PriceTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Metal</TableHeader>
          <TableHeader>Karat</TableHeader>
          <TableHeader>Type</TableHeader>

          <TableHeader>Price</TableHeader>
          {/* <TableHeader>Price</TableHeader> */}
        </TableRow>
      </thead>
      <tbody>
        {metalPrices.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.metal}</TableCell>

            <TableCell>{item.karat}</TableCell>
            <TableCell>{item.type}</TableCell>

            <TableCell>{item.price}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default PriceTable;
