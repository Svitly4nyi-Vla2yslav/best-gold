import styled from 'styled-components';

export const BannerContainer = styled.div`
text-align: center;
 background: linear-gradient(115deg, #ffcc00, #684209);
  color: #fff;
  margin: 0 auto;
  display: flex;
    flex-direction: column-reverse;

@media(max-width: 670px){
display: flex;
  text-align: center;
 background: linear-gradient(115deg, #ffcc00, #684209);
  color: #fff;
  margin: 0 auto;
  }
`;

export const BannerText = styled.h1`
    display: flex;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    padding: 2rem;
    margin: 0 auto;
    font-family: monaco;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const ImageBanner = styled.img`
@media(max-width: 670px){
object-fit: cover;
 margin: 0 auto;
 width: 100%;
}
`;