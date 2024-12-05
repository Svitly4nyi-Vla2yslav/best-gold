import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import { AboutContainerBanner, BannerTitel, ImageBanner } from './Banner.styled'
import Contact from "../../assets/image/contact.jpeg"

const BannerContact: React.FC = () => {
  return (
    <Zoom direction="up" duration={1000}>
    <AboutContainerBanner>
      <BannerTitel>Contacts </BannerTitel>
      <ImageBanner src={Contact}  />
    </AboutContainerBanner>
  </Zoom>
  )
}

export default BannerContact