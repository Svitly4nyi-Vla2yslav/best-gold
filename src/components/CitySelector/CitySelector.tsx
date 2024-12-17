import React, { useState } from 'react';
import {
  SearchContainer,
  InputField,
  CityList,
  CityItem,
} from './CitySelector.styled';
import { cities } from '../../База_Даных/CityBase';

const CitySearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<{
    city: string;
    goldPrice: number;
    silverPrice: number;
  } | null>(null);


  const filteredCities = cities.filter(city =>
    city.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCitySelect = (city: { city: string; goldPrice: number; silverPrice: number }) => {
    setSelectedCity(city); 
    setSearchTerm(city.city); 
  };
  return (
    <SearchContainer>
      <InputField
        type="text"
        placeholder="Enter city..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <CityList>
          {filteredCities.length > 0 ? (
            filteredCities.map(city => (
              <CityItem key={city.city} onClick={() => handleCitySelect(city)}>
                {city.city}
              </CityItem>
            ))
          ) : (
            <CityItem>NOT FOUND 😧</CityItem>
          )}
        </CityList>
      )}
       {selectedCity && (
        <CityItem>
          <h3>{selectedCity.city}</h3>
          <p>Prix de l'or : {selectedCity.goldPrice}€/g</p>
          <p>Prix de l'argent :{selectedCity.silverPrice}€/g</p>
        </CityItem>
      )}
    </SearchContainer>
  );
};

export default CitySearch;
