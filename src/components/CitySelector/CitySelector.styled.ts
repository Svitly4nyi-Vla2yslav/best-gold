import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin: 2rem auto;
  text-align: center;
`;

export const InputField = styled.input`
  padding: 0.5rem 1rem;
  width: 80%;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const CityList = styled.ul`
  margin: 1rem 0;
  list-style: none;
  padding: 0;
`;

export const CityItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
   list-style: none;

  &:hover {
    background-color: #eaeaea;
  }
`;