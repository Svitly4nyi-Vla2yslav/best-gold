import React, { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ClientForm';
import PartnerForm from '../../components/ContactForm/PartnerForm';
import { Container } from '../../components/HeroComponent/HeroComponent.styled';
import BannerContact from '../../components/Banner/BannerContact';
import InteractiveMap from '../../components/InteractiveMap/InteractiveMap';
import FAQ from '../../components/FAQ/FAQ';
import { Section, Title } from '../AboutUs/AboutUs.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <main>
        <BannerContact />
        <Section  data-aos="fade-right">
          <FAQ/>
        </Section>
        <Section data-aos="zoom-in-down">
          <Container>
            <ContactForm />
            <PartnerForm />
          </Container>
        </Section>
        <Section  data-aos="flip-up"> 
          <Title>Localisation de nos sites et de nos partenaires  </Title>
          <InteractiveMap />
        </Section>
      </main>
    </>
  );
};

export default Contact;
