import React, { useState } from 'react';
import {
  AnswerText,
  FAQSection,
  FAQTitle,
  QuestionButton,
  QuestionItem,
} from './FAQ.styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Question {
  question: string;
  answer: string;
  icon: any;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questions: Question[] = [
    {
        question: 'Comment commander un service?',
        answer: 'Pour commander un service, contactez-nous via le formulaire sur le site ou par téléphone.',
        icon: <ExpandMoreIcon />,
      },
      {
        question: 'Quels modes de paiement acceptez-vous?',
        answer: 'Nous acceptons les paiements par virement bancaire, cartes Visa/MasterCard et PayPal.',
        icon: <ExpandMoreIcon />,
      },
      {
        question: 'Puis-je annuler une commande?',
        answer: 'Oui, vous pouvez annuler une commande dans les 24 heures suivant la confirmation.',
        icon: <ExpandMoreIcon />,
      },
      {
        question: 'Comment obtenir une consultation?',
        answer: 'Vous pouvez réserver une consultation via le formulaire sur le site ou en nous contactant par téléphone.',
        icon: <ExpandMoreIcon />,
      },
      {
        question: 'Offrez-vous une garantie sur le service?',
        answer: 'Oui, nous offrons une garantie sur nos services pour une durée de 12 mois après l’exécution du travail.',
        icon: <ExpandMoreIcon />,
      },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <FAQTitle>Questions Fréquemment Posées</FAQTitle>
      <div>
        {questions.map((q, index) => (
          <QuestionItem key={index}>
            <QuestionButton onClick={() => toggleAnswer(index)}>
              {q.question}{q.icon}
            </QuestionButton>
            {activeIndex === index && <AnswerText>{q.answer}</AnswerText>}
          </QuestionItem>
        ))}
      </div>
    </FAQSection>
  );
};

export default FAQ;
