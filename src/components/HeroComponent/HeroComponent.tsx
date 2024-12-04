import React from 'react';
import { Fade } from 'react-awesome-reveal'; // для анімацій

import Gold from '../../assets/image/gold-rope-chain-cost.jpg';
import coins from "../../assets/image/gold-header-300x160.jpg"

import { Button } from '../ContactForm/ContactForm.styled';
import { Link } from 'react-scroll';
import {
  ButtonContainer,
  Description,
  HighlightText,
  MainSection,
  Title,
  Image,
  ListItem,
  Item,
  Container,
} from './HeroComponent.styled';



const HeroComponent: React.FC = () => {


  return (
    <MainSection>
      <>
        <Title>
          Votre partenaire fiable dans l'évaluation des métaux précieux
        </Title>
      </>
      <Fade direction="up" delay={500} duration={1000}>
        <Description>
          Aujourd'hui, de nombreuses personnes en France recherchent des
          services professionnels pour l'évaluation des métaux précieux tels que{' '}
          <HighlightText>
            l'or, l'argent, le platine et le palladium
          </HighlightText>
          . Notre site est spécialement conçu pour vous fournir des informations
          précises et vous connecter aux meilleurs experts dans ce domaine.
        </Description>
      </Fade>
      <Fade direction="up" delay={700} duration={1000}>
        <Description>
          Nous vous aidons à déterminer la valeur de vos objets, quel que soit
          leur type. Cela peut inclure :
        </Description> <Container> <Image src={coins} />
        <ListItem>
          <Item>- Des bijoux avec différentes valeurs en carats ;</Item>
          <Item>- Des pièces en or et en argent ;</Item>
          <Item>- Des lingots de métaux précieux ;</Item>
          <Item>- D'autres objets composés de matériaux mixtes.</Item>
        </ListItem></Container>
       
      </Fade>
      <Fade direction="up" delay={900} duration={1000}>
        <Description>
          Nous collaborons avec des organisations reconnues et des experts
          certifiés qui garantissent honnêteté et transparence dans le processus
          d'évaluation. Cela signifie que vous obtiendrez non seulement une
          estimation objective de vos objets, mais également un accès à des
          acheteurs fiables ou à des organisations spécialisées dans la
          réception de métaux précieux.
        </Description>
      </Fade>
      <Fade direction="up" delay={1100} duration={1000}>
        <Description>
          Notre objectif est de créer un espace où chaque client peut trouver
          les informations nécessaires et se sentir en confiance dans le
          processus d'évaluation de ses objets. Nous travaillons également à
          l'élargissement de la liste de nos partenaires pour vous offrir encore
          plus d'options pour la vente ou la remise de vos métaux.
        </Description>
      </Fade>
      <Fade direction="up" delay={1000} duration={1000}>
        <Image src={Gold} alt="Évaluation d'or" />
      </Fade>
      <ButtonContainer>
        <Link to="formClient">
          <Button style={{ width: '100%' }}>Obtenez une évaluation</Button>
        </Link>
      </ButtonContainer>
    </MainSection>
  );
};

export default HeroComponent;
