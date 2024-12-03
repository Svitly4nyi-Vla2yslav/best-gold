import React, { useState } from 'react';
import {
  SearchContainer,
  InputField,
  CityList,
  CityItem,
} from './CitySelector.styled';

const CitySearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<{
    city: string;
    goldPrice: number;
    silverPrice: number;
  } | null>(null);

  const cities = [
    { city: 'Paris', goldPrice: 45.5, silverPrice: 1.25 },
    { city: 'Lyon', goldPrice: 46.0, silverPrice: 1.3 },
    { city: 'Marseille', goldPrice: 44.5, silverPrice: 1.2 },
    { city: 'Nice', goldPrice: 47.0, silverPrice: 1.35 },
    { city: 'Toulouse', goldPrice: 45.0, silverPrice: 1.28 },
    { city: 'Nantes', goldPrice: 46.2, silverPrice: 1.27 },
    { city: 'Strasbourg', goldPrice: 44.8, silverPrice: 1.22 },
    { city: 'Montpellier', goldPrice: 46.5, silverPrice: 1.32 },
    { city: 'Bordeaux', goldPrice: 45.1, silverPrice: 1.26 },
    { city: 'Lille', goldPrice: 45.8, silverPrice: 1.3 },
    { city: 'Rennes', goldPrice: 45.4, silverPrice: 1.25 },
    { city: 'Reims', goldPrice: 46.0, silverPrice: 1.33 },
    { city: 'Le Havre', goldPrice: 44.9, silverPrice: 1.21 },
    { city: 'Saint-Étienne', goldPrice: 45.3, silverPrice: 1.22 },
    { city: 'Toulon', goldPrice: 44.6, silverPrice: 1.24 },
    { city: 'Grenoble', goldPrice: 45.7, silverPrice: 1.29 },
    { city: 'Dijon', goldPrice: 45.2, silverPrice: 1.23 },
    { city: 'Angers', goldPrice: 45.4, silverPrice: 1.26 },
    { city: 'Nîmes', goldPrice: 44.5, silverPrice: 1.19 },
    { city: 'Villeurbanne', goldPrice: 45.9, silverPrice: 1.28 },
  ];
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
