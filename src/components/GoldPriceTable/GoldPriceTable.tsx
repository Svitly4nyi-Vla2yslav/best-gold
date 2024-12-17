import React, { useEffect, useRef } from 'react';
import { TableContainer, TableGrid, TableRow, AnimatedCell, TableHeaderRow } from './GoldPriceTable.styled';
import { metalPrices } from './goldPrices';

const PriceTable: React.FC = () => {

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const clone = scrollRef.current.cloneNode(true);
      scrollRef.current.appendChild(clone);
    }
  }, []);
  return (
    <TableContainer>
      <TableGrid>
        <TableHeaderRow>
          <AnimatedCell>Métal</AnimatedCell>
          <AnimatedCell>Carat</AnimatedCell>
          <AnimatedCell>Type</AnimatedCell>
          <AnimatedCell>Prix</AnimatedCell>
        </TableHeaderRow>
        {metalPrices.map((item, index) => (
          // <div className="scroll-content" ref={scrollRef}>
          <TableRow key={index}>
            <AnimatedCell>{item.metal}</AnimatedCell>
            <AnimatedCell>{item.carat}</AnimatedCell>
            <AnimatedCell>{item.type}</AnimatedCell>
            <AnimatedCell>{item.prix}</AnimatedCell>
          </TableRow>
          //  </div>
        ))}
      </TableGrid>
    </TableContainer>
  );
};

export default PriceTable;
