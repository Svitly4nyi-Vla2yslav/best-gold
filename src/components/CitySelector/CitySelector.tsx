import React from 'react';

interface CitySelectorProps {
  onCityChange: (city: string) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({ onCityChange }) => {
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCityChange(event.target.value);
  };
  return <select onChange={handleCityChange}>
  <option value="" id="">Sélectionnez une ville</option>
  <option value="paris" id="paris">Paris</option>
  <option value="marseille" id="marseille">Marseille</option>
  <option value="lyon" id="lyon">Lyon</option>
  <option value="toulouse" id="toulouse">Toulouse</option>
  <option value="nice" id="nice">Nice</option>
  <option value="nantes" id="nantes">Nantes</option>
  <option value="strasbourg" id="strasbourg">Strasbourg</option>
  <option value="montpellier" id="montpellier">Montpellier</option>
  <option value="bordeaux" id="bordeaux">Bordeaux</option>
  <option value="lille" id="lille">Lille</option>
</select>
};

export default CitySelector;
