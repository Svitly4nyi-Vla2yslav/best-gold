import styled from "styled-components";

export const MainSection = styled.section`
  padding: 50px 50px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
font-family: "Formular", sans-serif;
  color: #2a2a2a;
  font-size: 2rem;
  // font-family: 'Georgia', serif;
  padding-bottom: 40px;
`;

export const Description = styled.p`
font-family: "Formular", sans-serif;
  color: #444;
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: start;
`;

export const HighlightText = styled.span`
  font-weight: bold;
  color: #ff5900;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const Image = styled.img`
  width: 100%;
  margin-top: 30px;
  border-radius: 8px;
`;

export const ListItem = styled.ul`
  color: #2a2a2a;
  font-size: 2rem;
  font-family: 'Georgia', serif;
   text-align: end;
`;

export const Item = styled.li`
font-family: "Formular", sans-serif;
  color: #444;
  font-size: 1.2rem;
  line-height: 1;
  margin-bottom: 20px;
 text-align: start;
 padding-left: 130px;
`;

export const Container = styled.div`
display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: nowrap;
img {
object-fit: cover;
max-width: 200px;
// padding: 10px;
}
`;

