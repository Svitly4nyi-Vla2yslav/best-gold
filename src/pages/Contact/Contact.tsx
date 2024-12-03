import React from 'react'
import ContactForm from '../../components/ContactForm/ClientForm'
import PartnerForm from '../../components/ContactForm/PartnerForm'
import { Container } from '../../components/HeroComponent/HeroComponent.styled'

const Contact: React.FC = () => {
  return (
    <>
    <main>
      <Container>
    <ContactForm/>
    <PartnerForm/></Container>
    </main>
    </>
  )
}

export default Contact