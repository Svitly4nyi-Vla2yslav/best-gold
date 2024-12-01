import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input, Button } from '@mui/material';
import { Message, FormContainer, Title, Label } from './ContactForm.styled';

const PartnerForm: React.FC = () => {
  const [state, handleSubmit] = useForm('xzzbklnv'); // ID форми

  if (state.succeeded) {
    return (
      <Message success={state.succeeded ? "true" : "false"}>
        Дякуємо за реєстрацію! Ми зв'яжемося з вами найближчим часом.
      </Message>
    );
  }

  return (
    <FormContainer>
      <Title>Форма реєстрації партнера</Title>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Прізвище:</Label>
        <Input type="text" id="name" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Label htmlFor="phone">Телефон:</Label>
        <Input type="tel" id="phone" name="phone" required />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />

        <Button type="submit" disabled={state.submitting}>
          Відправити
        </Button>
      </form>

      {/* {state.errors && Object.keys(state.errors).length > 0 && (
  <Message success={state.succeeded ? "true" : "false"}>
    Дякуємо за реєстрацію! Ми зв'яжемося з вами найближчим часом.
  </Message>
)}  */}
    </FormContainer>
  );
};
export default PartnerForm;
