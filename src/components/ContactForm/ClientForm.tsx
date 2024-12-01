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
  const [state, handleSubmit] = useForm('xyzybqrj'); // ID форми

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
        Дякуємо за реєстрацію! Ми зв'яжемося з вами найближчим часом.
      </Message>
    );
  }

  return (
    <FormContainer id="formClient">
      <Title>Форма оцінки коштовностей </Title>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="metal">Тип виробу:</Label>
        <Select id="metal" name="metal" required>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Platinum">Platinum</option>
          <option value="Palladium">Palladium</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Other">Other</option>
        </Select>

        <Label htmlFor="weight">Вага (в грамах):</Label>
        <Input type="number" id="weight" name="weight" required />

        <Label htmlFor="name">Прізвище:</Label>
        <Input type="text" id="name" name="name" required />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Label htmlFor="phone">Телефон:</Label>
        <Input type="tel" id="phone" name="phone" required />

        <Label htmlFor="notes">Замітки:</Label>
        <TextArea id="notes" name="notes" />
         <Label htmlFor="file">Завантажте фото виробу:</Label><ButtonContainer>
          <div>
           
            <Button type="button" onClick={handleFileUpload}>
              Завантажити фото
            </Button>
          </div>

          <Input type="hidden" name="file_url" value={fileUrl} />

          <Button type="submit" disabled={state.submitting}>
            Відправити
          </Button>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default ClientForm;
