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
    <Table  data-aos="flip-right">
      <thead>
        <TableRow>
          <TableHeader>Métal</TableHeader>
          <TableHeader>Carat</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Prix</TableHeader>
          {/* <TableHeader>Price</TableHeader> */}
        </TableRow>
      </thead>
      <tbody>
        {metalPrices.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.metal}</TableCell>

            <TableCell>{item.carat}</TableCell>
            <TableCell>{item.type}</TableCell>

            <TableCell>{item.prix}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default PriceTable;
