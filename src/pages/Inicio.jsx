import React from 'react'
import VideoSlide from '../components/VideoSlide'
import IconBar from '../components/IconBar'
import BannerSection from '../components/BannerSection'
import CalendarioActividades from '../components/CalendarioActividades'

export default function Inicio() {
  return (
    <div>
      <VideoSlide />
      <IconBar />
      <BannerSection />
      <CalendarioActividades />
    </div>
  )
}
