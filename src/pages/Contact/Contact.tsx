import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'

const Contact: React.FC = () => {
  return (
    <>
    <Header/>
    <main>
    <h1>Контакти</h1>
    <ContactForm/>
    </main>
    <Footer/>
    </>
  )
}

export default Contact