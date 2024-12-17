import styled from 'styled-components';


export const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;

`;
export const MainWrapper = styled.div`
display: block;
@media (min-width: 1024px){
display: flex;
  }
`;

export const TableContainer = styled.div`

@media (min-width: 1024px){
display: flex;
    width: 45%;
    flex-direction: column;
    align-items: baseline;
    align-content: flex-start;
    flex-wrap: wrap;
    display: none
    }
`;

export const MapWrapper = styled.div`
width: 100%;
margin-top: 50px;
`;