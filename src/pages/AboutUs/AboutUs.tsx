import React, { useEffect } from 'react';
import InteractiveMap from '../../components/InteractiveMap/InteractiveMap';
import Feedback from '../../components/ContactForm/Feedback';
import BannerAbout from '../../components/Banner/BannerAbout';
import { AboutUsContainer, Section, Title, Paragraph, SectionTitle, WhyUsList, WhyUsItem, StrongText, CertificateGallery, CertificateImage } from './AboutUs.styled';
import certificate1 from "../../assets/image/завантаження (1).jpg"
import certificate2 from "../../assets/image/завантаження.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs: React.FC = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <AboutUsContainer>
      <BannerAbout/>
      <Section className="intro"  data-aos="fade-right">
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

      <Section className="mission"  data-aos="fade-left">
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

      <Section className="why-us"  data-aos="fade-up-right">
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

      <Section className="partners"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
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

      <Section className="certificates" >
        <SectionTitle>Documents et certificats</SectionTitle>
        <Paragraph>
          Découvrez les certificats de nos partenaires qui confirment leur
          compétence et leur expérience dans le domaine de l'évaluation et de la
          réception de l'or.
        </Paragraph>
        <CertificateGallery>
          <CertificateImage  data-aos="flip-left"
            src={certificate1}
            alt="Certificat des partenaires"
          />
          <CertificateImage  data-aos="flip-right"
            src={certificate2}
            alt="Document d'un partenaire vérifié"
          />
        </CertificateGallery>
      </Section>

      <Section className="feedback"  data-aos="flip-up">
        <SectionTitle>Laissez un avis</SectionTitle>
        <Paragraph>
          Nous serions ravis de connaître votre avis ! Si vous avez déjà utilisé
          nos recommandations, partagez votre expérience. Votre retour aidera
          d'autres utilisateurs à trouver les meilleurs endroits pour l'échange
          d'or.
        </Paragraph>
        <Feedback />
      </Section>
    </AboutUsContainer>
  );
};

export default AboutUs;
