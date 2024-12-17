import React, { useEffect } from 'react';
import PartnerForm from '../../components/ContactForm/PartnerForm';
import { partners } from '../../База_Даных/dataPartners';
import {
  PageContainer,
  CardContainer,
  PartnerCard,
  PartnerImage,
  Overlay,
  PartnerDetails,
  PartnerName,
  PartnerDescription,
  PartnerContact,
  Highlight,
  SubTitle,
} from './Partners.styled';
import BannerPartners from '../../components/Banner/BannerPartners';
import { Paragraph, Section, Title } from '../AboutUs/AboutUs.styled';
import {
  Item,
  ListItem,
} from '../../components/HeroComponent/HeroComponent.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partners: React.FC = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <PageContainer>
      <BannerPartners />
      <Title>Modèle de partenariat</Title>

      <Section  data-aos="fade-right">
        <SubTitle>À propos de notre modèle de partenariat</SubTitle>
        <Paragraph>
          Notre plateforme est conçue pour favoriser un partenariat efficace et
          sécurisé entre les experts en évaluation des métaux précieux et les
          utilisateurs. Nous fournissons des{' '}
          <Highlight>outils uniques</Highlight> pour garantir la transparence du
          processus de collaboration.
        </Paragraph>
        <Paragraph>
          Vous avez accès à des clients fiables à la recherche de services
          professionnels d'évaluation et de vente de métaux précieux. Notre
          objectif est de créer une
          <Highlight>écosystème de confiance</Highlight> qui offrira des
          conditions avantageuses pour tous les participants.
        </Paragraph>
      </Section>

      <Section data-aos="fade-left">
        <SubTitle>Avantages pour les partenaires</SubTitle>
        <ListItem>
          <Item>✅ Accès à un public activement à la recherche d'experts.</Item>
          <Item>✅ Possibilité d'élargir votre base de clients.</Item>
          <Item>✅ Modèle de collaboration transparent.</Item>
          <Item>✅ Outils pour gérer les demandes et les avis des clients.</Item>
        </ListItem>
      </Section>

      <Section>
        <SubTitle>Nos partenaires</SubTitle>
        <CardContainer>
          {partners.map(partner => (
            <PartnerCard key={partner.id}  data-aos="zoom-in-down">
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

      <Section  data-aos="flip-up">
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
