import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Message, FormContainer, Title, Label, Input, Button } from './ContactForm.styled';

const PartnerForm: React.FC = () => {
  const [state, handleSubmit] = useForm('mgverjbb'); // ID форми

  if (state.succeeded) {
    return (
      <Message success={state.succeeded ? "true" : "false"}>
        Merci pour votre inscription ! Nous vous contacterons dans les plus brefs délais.
      </Message>
    );
  }

  return (
    <FormContainer>
      <Title>
      Formulaire d'inscription pour partenaire</Title>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nom de famille :</Label>
        <Input type="text" id="name" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Label htmlFor="phone">Téléphone :</Label>
        <Input type="tel" id="phone" name="phone" required />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />

        <Button type="submit" disabled={state.submitting}>
        Envoyer
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
