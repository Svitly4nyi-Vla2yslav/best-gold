import styled from "styled-components";

export const PageContainer = styled.main`
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const SubTitle = styled.h2`
font-family: "Formular", sans-serif;
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 45px;
   text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

export const Highlight = styled.span`
  color: #e67e22;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
      flex-direction: row;
    justify-content: center;
`;

export const PartnerCard = styled.div`
font-family: "Formular", sans-serif;

  position: relative;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  text-align: center;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const PartnerImage = styled.div<{ bg: string }>`
  width: 100%;
  height: 150px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s;
  }

  ${PartnerCard}:hover &::after {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
font-family: "Formular", sans-serif;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;

  ${PartnerCard}:hover & {
    opacity: 1;
  }
`;

export const PartnerDetails = styled.div`
font-family: "Formular", sans-serif;

  padding: 15px;
`;

export const PartnerName = styled.h3`
font-family: "Formular", sans-serif;

  font-size: 20px;
  color: #2c3e50;
  margin: 10px 0;
`;

export const PartnerDescription = styled.p`
font-family: "Formular", sans-serif;

  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

export const PartnerContact = styled.div`
font-family: "Formular", sans-serif;

  font-size: 14px;
  color: #777;

  & > p {
    margin: 5px 0;
  }

  & a {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;