export const metadata = {
  title: 'Statosphere - Prepas',
  description: 'Page description',
}

import FormList from '@/components/formsList'
import HeroForms from '@/components/formHero'

export default function Home() {
  return (
    <>
      <HeroForms/>
      <FormList/>
    </>
  )
}
