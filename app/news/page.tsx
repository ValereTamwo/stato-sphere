export const metadata = {
  title: 'Statosphere - Prepas',
  description: 'Page description',
}


import Hero from '@/components/hero'
import HeroNews from '@/components/hero-news'
import Latest from '@/components/latestnew'
import News from '@/components/news'
export default function Home() {
  return (
    <>
      <HeroNews />
      <News/>
    </>
  )
}
