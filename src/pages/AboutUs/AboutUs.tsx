import React from 'react';
import styled from 'styled-components';
import InteractiveMap from '../../components/InteractiveMap/InteractiveMap';
import { useForm } from '@formspree/react';
import { Message } from '../../components/ContactForm/ContactForm.styled';
// import { MapComponent } from './MapComponent';
// import { ContactForm } from './ContactForm';

const AboutUsContainer = styled.div`
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const WhyUsList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const WhyUsItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;

const StrongText = styled.strong`
  color: #e67e22;
`;

const CertificateGallery = styled.div`
  display: flex;
  gap: 15px;
`;

const CertificateImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #e67e22;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d35400;
  }
`;

const AboutUs: React.FC = () => {
  const [state, handleSubmit] = useForm('meoqvyrl');
  if (state.succeeded) {
    return (
      <Message success={state.succeeded ? 'true' : 'false'}>
        Merci pour votre retour.
      </Message>
    );
  }
  return (
    <AboutUsContainer>
      <Section className="intro">
        <Title>À propos de nous</Title>
        <Paragraph>
          Notre site est un endroit où vous pouvez trouver des organisations
          partenaires fiables pour la vente d'or en <strong>France</strong>.
          Nous ne travaillons qu'avec des experts vérifiés et fournissons des
          informations utiles pour vous aider à prendre la bonne décision lors
          de la vente de votre or. Nous n'effectuons pas d'achats ou de ventes —
          notre objectif est de faciliter votre recherche de partenaires
          responsables pour l'échange d'or.
        </Paragraph>
      </Section>

      <Section className="mission">
        <SectionTitle>Notre mission</SectionTitle>
        <Paragraph>
          Dans un monde où il existe une multitude d'offres sur le marché de la
          vente d'or, nous souhaitons vous aider à trouver des endroits fiables
          et vérifiés pour échanger votre or. Notre mission est d'assurer la
          transparence et la confiance sur le marché en établissant des
          relations de partenariat avec des organisations ayant une bonne
          réputation et spécialisées dans l'évaluation et la réception de l'or.
          Vous pouvez être assuré de la sécurité de vos transactions ainsi que
          de l'obtention de conditions équitables pour l'échange.
        </Paragraph>
      </Section>

      <Section className="why-us">
        <SectionTitle>Pourquoi nous choisir ?</SectionTitle>
        <WhyUsList>
          <WhyUsItem>
            <StrongText>Expertise :</StrongText> Nous avons une connaissance
            approfondie de l'évaluation de l'or et collaborons avec les
            meilleurs experts dans ce domaine.
          </WhyUsItem>
          <WhyUsItem>
            <StrongText>Fiabilité :</StrongText> Notre site collabore avec des
            partenaires vérifiés, que nous sélectionnons avec soin pour garantir
            la qualité des services.
          </WhyUsItem>
          <WhyUsItem>
            <StrongText>Transparence :</StrongText> Nous fournissons uniquement
            des informations vérifiées et vous aidons à comprendre tous les
            aspects du processus d'échange d'or.
          </WhyUsItem>
          <WhyUsItem>
            <StrongText>Sécurité :</StrongText> Nous veillons à la sécurité de
            nos utilisateurs et garantissons les plus hauts standards de
            protection des données.
          </WhyUsItem>
        </WhyUsList>
      </Section>

      <Section className="partners">
        <SectionTitle>Nos partenaires</SectionTitle>
        <Paragraph>
          Découvrez la carte de nos partenaires les plus proches pour la vente
          d'or. Nos partenaires offrent une évaluation de qualité et des
          conditions sûres pour l'échange. Chaque partenaire sur notre
          plateforme a été soigneusement vérifié et a obtenu les certificats
          appropriés.
        </Paragraph>
        <InteractiveMap />
      </Section>

      <Section className="certificates">
        <SectionTitle>Documents et certificats</SectionTitle>
        <Paragraph>
          Découvrez les certificats de nos partenaires qui confirment leur
          compétence et leur expérience dans le domaine de l'évaluation et de la
          réception de l'or.
        </Paragraph>
        <CertificateGallery>
          <CertificateImage
            src="certificate1.jpg"
            alt="Certificat des partenaires"
          />
          <CertificateImage
            src="certificate2.jpg"
            alt="Document d'un partenaire vérifié"
          />
        </CertificateGallery>
      </Section>

      <Section className="feedback">
        <SectionTitle>Laissez un avis</SectionTitle>
        <Paragraph>
          Nous serions ravis de connaître votre avis ! Si vous avez déjà utilisé
          nos recommandations, partagez votre expérience. Votre retour aidera
          d'autres utilisateurs à trouver les meilleurs endroits pour l'échange
          d'or.
        </Paragraph>
        <FeedbackForm onSubmit={handleSubmit}>
          <Input type="text" placeholder="Votre nom" />
          <Textarea rows={4} placeholder="Votre avis..." />
          <SubmitButton type="submit" disabled={state.submitting}>
            Envoyer l'avis
          </SubmitButton>
        </FeedbackForm>
      </Section>
    </AboutUsContainer>
  );
};

export default AboutUs;
