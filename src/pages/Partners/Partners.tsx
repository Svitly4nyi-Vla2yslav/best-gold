import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';

const Partners: React.FC = () => {
  return (
    <>
   <Header/>
   <main>
    <ContactForm/>
    <div>Блок з інформацією про партнерську модель.</div>
   </main>
   <Footer/>
    </>
  )
}

export default Partners