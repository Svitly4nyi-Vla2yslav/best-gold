import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Message,
  FormContainer,
  TextArea,
  Input,
  Button,
} from './ContactForm.styled';

const Feedback: React.FC = () => {
  const [state, handleSubmit] = useForm('meoqvyrl');
  if (state.succeeded) {
    return (
      <Message success={state.succeeded ? 'true' : 'false'}>
        Merci pour votre retour.
      </Message>
    );
  }
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Votre nom" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <TextArea name="message" rows={4} placeholder="Votre avis..." />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting}>
          Envoyer l'avis
        </Button>
      </form>
    </FormContainer>
  );
};

export default Feedback;
