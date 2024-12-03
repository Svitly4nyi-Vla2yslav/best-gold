import styled from 'styled-components';

export const AboutContainerBanner = styled.div`
margin : 10px auto 70px auto ;
text-align: center;
background: black;
color: #fff;
display: flex;
flex-direction: column;
height : 300px;
justify-content: space-between;

@media(min-width: 660px){
margin-bottom: 150px;
}

@media(min-width: 550px){
display: flex;
  text-align: center;
 background: black;
  color: #fff;
  margin: 40px auto 80px auto;
               flex-direction: row;
     flex-wrap: nowrap;
        justify-content: space-evenly;
        width: 100%;
        height: 50vh;

    img{
    width: 50%;
    }    
  }

  img{
  object-fit: cover;
  }
`;


export const BannerContainer = styled.div`
margin : 50px auto ;
text-align: center;
background: linear-gradient(115deg, #ffcc00, #684209);
color: #fff;
display: flex;
flex-direction: column;
height : 300px;
justify-content: space-between;

@media(min-width: 660px){
margin-bottom: 150px;
}

@media(min-width: 1070px){
display: flex;
  text-align: center;
 background: linear-gradient(115deg, #ffcc00, #684209);
  color: #fff;
  margin: 40px auto 80px auto;
               flex-direction: row;
     flex-wrap: nowrap;
        justify-content: space-evenly;
        width: 100%;
        height: 50vh;

    img{
    width: 70%;
    }    
  }

  img{
  object-fit: cover;
  }
`;

export const BannerText = styled.h1`
 font-family: "Formular", sans-serif;
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

        width: 100%;
    color : white;
    font-size: 2rem;
    @media(min-width: 1240px){
     font-size: 3rem;
    }

`;

export const BannerTitel = styled.h2`
font-family: "Formular", sans-serif;
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
background: black;
        width: 100%;
    color : white;
    font-size: 2rem;
    @media(min-width: 1240px){
     font-size: 3rem;
    }
`;

export const ImageBanner = styled.img`
width: 100%;
@media(max-width: 670px){
object-fit: cover;
 margin: 0 auto;
}
`;