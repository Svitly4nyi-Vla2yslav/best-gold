import React from 'react';
import styled from 'styled-components';
import PartnerForm from '../../components/ContactForm/PartnerForm';

const PageContainer = styled.main`
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Highlight = styled.span`
  color: #e67e22;
  font-weight: bold;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const PartnerCard = styled.div`
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

const PartnerImage = styled.div<{ bg: string }>`
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

const Overlay = styled.div`
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

const PartnerDetails = styled.div`
  padding: 15px;
`;

const PartnerName = styled.h3`
  font-size: 20px;
  color: #2c3e50;
  margin: 10px 0;
`;

const PartnerDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const PartnerContact = styled.div`
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

const Partners: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: 'GoldTrust Experts',
      image: '/images/partner1.jpg',
      description: 'Expertise en métaux précieux.',
      address: '10 Rue Lafayette, Paris',
      email: 'contact@goldtrust.com',
    },
    {
      id: 2,
      name: 'MetalEval Solutions',
      image: '/images/partner2.jpg',
      description: 'Évaluation et traitement des métaux.',
      address: '15 Avenue de la République, Lyon',
      email: 'info@metaleval.com',
    },
    {
      id: 3,
      name: 'JewelryValue Experts',
      image: '/images/partner3.jpg',
      description: 'Spécialistes en bijoux.',
      address: '5 Rue des Bijoutiers, Bordeaux',
      email: 'support@jewelryvalue.com',
    },
    {
      id: 4,
      name: 'PreciousMetals France',
      image: '/images/partner4.jpg',
      description: 'Évaluation de métaux précieux.',
      address: "12 Rue de l'Or, Marseille",
      email: 'info@preciousmetals.fr',
    },
    {
      id: 5,
      name: 'Alliance Or & Métaux',
      image: '/images/partner5.jpg',
      description: 'Partenaire de confiance pour les métaux.',
      address: '18 Rue Saint-Honoré, Lille',
      email: 'contact@allianceor.fr',
    },
    {
      id: 6,
      name: 'Or et Valeur',
      image: '/images/partner6.jpg',
      description: 'Estimation rapide et fiable.',
      address: '22 Boulevard Haussmann, Toulouse',
      email: 'info@oretvaleur.fr',
    },
    {
      id: 7,
      name: 'Évaluation Or et Argent',
      image: '/images/partner7.jpg',
      description: 'Professionnels certifiés.',
      address: '8 Place de la Bourse, Nantes',
      email: 'contact@evalorargent.fr',
    },
    {
      id: 8,
      name: 'Experts Bijoux France',
      image: '/images/partner8.jpg',
      description: 'Expertise de bijoux et métaux précieux.',
      address: '3 Rue des Experts, Strasbourg',
      email: 'experts@bijouxfrance.fr',
    },
    {
      id: 9,
      name: 'Valorisation Métaux',
      image: '/images/partner9.jpg',
      description: 'Votre partenaire en valorisation.',
      address: '9 Allée des Orfèvres, Montpellier',
      email: 'valorisation@metaux.com',
    },
    {
      id: 10,
      name: 'Bijouterie Prestige',
      image: '/images/partner10.jpg',
      description: 'Prestige et confiance.',
      address: '6 Rue Royale, Nice',
      email: 'prestige@bijouterie.fr',
    },
  ];

  return (
    <PageContainer>
      <Title>Партнерська модель</Title>

      <Section>
        <SubTitle>Про нашу партнерську модель</SubTitle>
        <Paragraph>
          Наша платформа створена для сприяння ефективному та безпечному
          партнерству між експертами з оцінки дорогоцінних металів та
          користувачами. Ми надаємо <Highlight>унікальні інструменти</Highlight>{' '}
          для забезпечення прозорості процесу співпраці.
        </Paragraph>
        <Paragraph>
          Ви отримуєте доступ до надійних клієнтів, які шукають професійні
          послуги з оцінки та продажу дорогоцінних металів. Наша мета — створити{' '}
          <Highlight>екосистему довіри</Highlight>, яка забезпечить вигідні
          умови для всіх учасників.
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Переваги для партнерів</SubTitle>
        <ul>
          <li>Доступ до аудиторії, яка активно шукає експертів.</li>
          <li>Можливість розширити свою клієнтську базу.</li>
          <li>Прозора модель співпраці.</li>
          <li>Інструменти для управління заявками та відгуками клієнтів.</li>
        </ul>
      </Section>

      <Section>
        <SubTitle>Nos partenaires</SubTitle>
        <CardContainer>
          {partners.map(partner => (
            <PartnerCard key={partner.id}>
              <PartnerImage bg={partner.image}>
                <Overlay>Voir les détails</Overlay>
              </PartnerImage>
              <PartnerDetails>
                <PartnerName>{partner.name}</PartnerName>
                <PartnerDescription>{partner.description}</PartnerDescription>
                <PartnerContact>
                  <p>Adresse : {partner.address}</p>
                  <p>
                    Email :{' '}
                    <a href={`mailto:${partner.email}`}>{partner.email}</a>
                  </p>
                </PartnerContact>
              </PartnerDetails>
            </PartnerCard>
          ))}
        </CardContainer>
      </Section>

      <Section>
        <SubTitle>Devenir partenaire</SubTitle>
        <Paragraph>
          Remplissez le formulaire ci-dessous pour nous rejoindre.
        </Paragraph>
        <PartnerForm />
      </Section>
    </PageContainer>
  );
};

export default Partners;
