export const metadata = {
  title: 'Statosphere - Prepas',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Latest from '@/components/latestnew'
import Stats from '@/components/stat'
import CarouselBackground from '@/components/carouselBackground'
import StaffPage from '@/components/staffadmin'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Latest />
      <Stats />
      <StaffPage/>
      <Newsletter />
    </>
  )
}
