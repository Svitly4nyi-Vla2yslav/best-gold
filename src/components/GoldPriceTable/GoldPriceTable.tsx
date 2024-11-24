import React from 'react';

interface PriceData {
  metal: string;
  karat: string;
  price: number;
}

const GoldPriceTable: React.FC = () => {
  const prices: PriceData[] = [
    { metal: 'Gold', karat: '585', price: 1800 },
    { metal: 'Gold', karat: '750', price: 2200 },
    { metal: 'Silver', karat: '925', price: 25 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Metal</th>
          <th>Karat</th>
          <th>Price (🇪🇺)</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((price, index) => (
          <tr key={index}>
            <td>{price.metal}</td>
            <td>{price.karat}</td>
            <td>{price.price} 🇪🇺</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GoldPriceTable;
