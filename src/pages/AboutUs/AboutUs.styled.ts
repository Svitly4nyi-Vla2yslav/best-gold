import styled from "styled-components";


export const AboutUsContainer = styled.div`
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
   
`;

export const Title = styled.h2`
font-family: "Formular", sans-serif;
font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
`;

export const Section = styled.section`
 box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 18px;
`;

export const SectionTitle = styled.h2`
font-family: "Formular", sans-serif;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
`;

export const Paragraph = styled.p`
font-family: "Formular", sans-serif;

  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
   font-size: 1.2rem;
  line-height: 1.5;
`;

export const WhyUsList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const WhyUsItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const StrongText = styled.strong`
  color: #e67e22;
`;

export const CertificateGallery = styled.div`
  display: flex;
  gap: 15px;
flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
`;

export const CertificateImage = styled.img`
max-width: 200px;
`;
