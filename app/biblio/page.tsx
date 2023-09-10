
import HeroStat from '@/components/herostat'
import HeroBi from '@/components/hero-bi'
import StatGrid from '@/components/resultstat'
import GalleryImage from '@/components/galleryim'
import { Books } from '@/components/books'
export default function Home() {
  return (
    <>
      <HeroBi/>
    <GalleryImage images={Books} />
    </>
  )
}