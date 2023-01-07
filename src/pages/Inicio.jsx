import React from 'react'
import VideoSlide from '../components/VideoSlide'
import IconBar from '../components/IconBar'
import BannerSection from '../components/BannerSection'
import CalendarioActividades from '../components/CalendarioActividades'
import ProductosInicio from '../components/ProductosInicio'

export default function Inicio() {
  return (
    <div>
      <VideoSlide />
      <IconBar />
      <BannerSection />
      <CalendarioActividades />
      <ProductosInicio />
    </div>
  )
}
