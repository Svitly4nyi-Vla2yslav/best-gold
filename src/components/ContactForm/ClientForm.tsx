import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Button,
  ButtonContainer,
  FormContainer,
  Input,
  Label,
  Message,
  Select,
  TextArea,
  Title,
} from './ContactForm.styled';

const ClientForm: React.FC = () => {
  const [fileUrl, setFileUrl] = useState<string>('');
  const [state, handleSubmit] = useForm('myzylqab'); // ID форми

  // Завантаження файлу
  const handleFileUpload = () => {
    const uploadWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dhfraxutp', // Ваш cloud name
        uploadPreset: 'foto_gold', // Ваш preset
        sources: ['local', 'url', 'camera'],
        multiple: false,
        maxFileSize: 10000000, // Максимальний розмір файлу (10MB)
      },
      (error: any, result: any) => {
        if (!error && result && result.event === 'success') {
          setFileUrl(result.info.secure_url); // Отримуємо URL файлу
        }
      }
    );

    uploadWidget.open();
  };

  if (state.succeeded) {
    return (
      <Message success={state.succeeded ? 'true' : 'false'}>
        Merci pour votre inscription ! Nous vous contacterons dans les plus
        brefs délais.
      </Message>
    );
  }

  return (
    <FormContainer id="formClient">
      <Title>Formulaire d'évaluation des bijoux</Title>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="metal">Type d'article :</Label>
        <Select id="metal" name="metal" required>
          <option value="Gold">Or (Gold)</option>
          <option value="Silver">Argent (Silver)</option>
          <option value="Platinum">Platine (Platinum)</option>
          <option value="Palladium">Palladium (Palladium)</option>
          <option value="Miscellaneous">Divers (Miscellaneous)</option>
          <option value="Other">Autre (Other)</option>
        </Select>

        <Label htmlFor="weight">Poids (en grammes) :</Label>
        <Input type="number" id="weight" name="weight" required />

        <Label htmlFor="name">Nom de famille :</Label>
        <Input type="text" id="name" name="name" required />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Label htmlFor="phone">Téléphone :</Label>
        <Input type="tel" id="phone" name="phone" required />

        <Label htmlFor="notes">Remarques :</Label>
        <TextArea id="notes" name="notes" />
        <Label htmlFor="file">Téléchargez une photo de l'article :</Label>
        <ButtonContainer>
          <div>
            <Button type="button" onClick={handleFileUpload}>
            Télécharger une photo
            </Button>
          </div>

          <Input type="hidden" name="file_url" value={fileUrl} />

          <Button type="submit" disabled={state.submitting}>
          Envoyer
          </Button>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default ClientForm;
