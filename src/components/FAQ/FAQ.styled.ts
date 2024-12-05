import styled from 'styled-components';

export const FAQSection = styled.section`
  background: linear-gradient(135deg, #f9f3e3, #ffecb3);
  border: 2px solid #ffd700; /* золото */
  border-radius: 18px;
  padding: 20px;
  width: 100%;
  margin: 80px auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FAQTitle = styled.h2`
  text-align: center;
  color: #ffd700;
  font-family: 'Georgia', serif;
  margin-bottom: 15px;
`;

export const QuestionItem = styled.div`
  border-bottom: 1px solid #ffd700;
  padding: 10px 0;
`;

export const QuestionButton = styled.button`
  background: none;
  border: none;
  text-align: left;
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  color: #444;
  cursor: pointer;
  text-transform: uppercase;
  padding: 10px;
transition: color 1.8s ease-in-out, background-color 0.8s ease-in-out  0.2s;
  padding-right: 35px;
  position: relative;
  
  &:focus {
    outline: none;
  }
  
&:hover {
  color: #ffd700;
  background-color: rgba(255, 215, 0, 0.1);
}
`;

export const AnswerText = styled.p`
  padding: 10px 20px;
  background-color: #fff5cc;
  border-radius: 5px;
  margin-top: 5px;
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
`;