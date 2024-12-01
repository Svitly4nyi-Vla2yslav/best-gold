import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

`;

// Загальні стилі для форми
export const FormContainer = styled.div`
  background: linear-gradient(135deg, #f9f3e3, #ffecb3);
  border: 2px solid #ffd700; /* золото */
  border-radius: 10px;
  padding: 20px;
//   max-width: 500px;
  margin: 20px auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  color: #ffd700; /* золото */
  font-family: 'Georgia', serif;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 10px 0 5px;
  color: #444;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    border-color: #ffd700;
    outline: none;
    box-shadow: 0px 0px 5px #ffd700;
  }
`;

export const Select = styled.select`
  ${Input}
`;

export const TextArea = styled.textarea`
  ${Input}
  resize: vertical;
  width: 100%;
`;

export const Button1 = styled.button`
  background-color: #ffd700;
  color: white;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6c300;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  text-decoration: none;
  background-color: #ffd700;
  color: white;
  display: inline-block;
  position: relative;
  margin: 10px 0px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 2px;
  border-radius: 10px;
  transition: 1.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  font-weight: bold;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    z-index: -1;
    background: linear-gradient(90deg, #00ffe7, #007bff);
    transition: width 1.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover,
  &:focus {
    color: #007bff;
    background: rgba(255, 255, 255, 0);

    &:before {
      width: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: #00ffe7;
    transition: width 1.8s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Message = styled.div<{ success: string }>`
  text-align: center;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  font-weight: bold;
  color: ${({ success }) => (success ? '#155724' : '#721c24')};
  background-color: ${({ success }) => (success ? '#d4edda' : '#f8d7da')};
  border: 1px solid ${({ success }) => (success ? '#c3e6cb' : '#f5c6cb')};
`;