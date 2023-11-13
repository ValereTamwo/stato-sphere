import Issea from '@/public/images/ecoles/issea.png'
import Eamau from '@/public/images/ecoles/eamau.png'
import Eamac from '@/public/images/ecoles/eamac.jpeg'
import Ifford from '@/public/images/ecoles/ifford.png'
import Ista from '@/public/images/ecoles/ista.png'
import Essal from '@/public/images/ecoles/essal.png'
import Cerdi from '@/public/images/ecoles/cerdi.png'
import Ief from '@/public/images/ecoles/ief.png'
import Iia from '@/public/images/ecoles/iia.png'


export const Images =[{
  id: 1,
  src: Issea,
  alt: 'string'
},
  {
  id: 2,
  src: Iia,
  alt: 'string'
  }
  ,
  {
  id: 3,
  src: Eamac,
  alt: 'string'
  },
  {
  id: 4,
  src: Ifford,
  alt: 'string'
  },
  {
  id: 5,
  src: Ief,
  alt: 'string'
  },
  {
  id: 6,
  src: Ista,
  alt: 'string'
  },
  {
  id: 7,
  src: Cerdi,
  alt: 'string'
}
]

import Image from 'next/image'
import Link from 'next/link'
export default function Features() {
  return (
    <section id='more'>
      {/* Section header */}
      <div className="w-full text-white">
        <div className='w-xl align-middle pt-[5%] border border-black mx-auto text-center pb-12 md:pb-20'>
            <h2 className="h2 mb-4">Obtenir une place dans l'une de ces fabuleuses écoles </h2>
          <p className="text-xl text-gray-400">Le groupe Stato-Sphère vous offre tout l'accompagnement dont vous avez besoin.</p>
          </div>
          </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="text-white max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Link href={'https://www.issea-cemac.org/issea/fr'} className='flex flex-col' >   <Image src={'/images/ecoles/issea.png'} width={200} height={200} alt='issea' /></Link> 
              <h4 className="h4 mb-2">ISSEA</h4>
              <p className="text-lg text-gray-400 text-center">Institut Sous Regional De la Statistiques et De L'economie Applique</p>
               
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <Link href={'https://www.eamau.org/'} className='flex flex-col'>   <Image src={'/images/ecoles/eamau.png'} width={80} height={80} alt='issea' /> 
 </Link>             <h4 className="h4 mb-2">EAMAU</h4>
              <p className="text-lg text-gray-400 text-center">Ecole Africaine des Métiers de l'Architecture et de l'Urbanisme</p>
             
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <Link href={'http://www.eamac.ne/'} className='flex flex-col'>  <Image src={'/images/ecoles/eamac.jpeg'} width={80} height={80} alt='issea' /> 
</Link>              <h4 className="h4 mb-2">EAMAC</h4>
              <p className="text-lg text-gray-400 text-center">Ecole Africaine de la Météorologie et de l'Aviation Civile</p>
              
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <Link href={'http://www.iford-cm.org/'} className='flex flex-col'>   <Image src={'/images/ecoles/ifford.png'} width={200} height={100} alt='issea' /> 
  </Link>            <h4 className="h4 mb-2">IFORD</h4>
                <p className="text-lg text-gray-400 text-center">institut de formation et de recherche demographique </p>
                 
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <Link href={'https://www.ista-cemac.org/'} className='flex flex-col'>   <Image src={'/images/ecoles/ista.png'} width={100} height={100} alt='issea' />
</Link>              <h4 className="h4 mb-2">ISTA</h4>
                <p className="text-lg text-gray-400 text-center">'Institut sous-régional multisectoriel de technologie appliquée</p>
            
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <Link href={'https://www.essal.tg/'} className='flex flex-col'>    <Image src={'/images/ecoles/essal.png'} width={100} height={100} alt='issea' /> 
  </Link>            <h4 className="h4 mb-2">ESSAL</h4>
                <p className="text-lg text-gray-400 text-center">L'école du service de santé des armées de Lomé</p>
                 
            </div>
             {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <Link href={'https://cerdi.uca.fr/'} className='flex flex-col'>  <Image src={'/images/ecoles/cerdi.png'} width={90} height={90} alt='issea' /> 
    </Link>          <h4 className="h4 mb-2">CERDI</h4>
                <p className="text-lg text-gray-400 text-center">'Institut sous-régional multisectoriel de technologie appliquée</p>
                 
            </div>
 
            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <Link href={'https://www.institutformation.org/'} className='flex flex-col'>  <Image src={'/images/ecoles/ief.png'} width={90} height={90} alt='issea' /> 
      </Link>        <h4 className="h4 mb-2">IEF</h4>
                <p className="text-lg text-gray-400 text-center">Institut Européen de Formation</p>
                 
            </div>

             <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <Link href={'http://www.iiayaounde.com/'} className='flex flex-col'>    <Image src={'/images/ecoles/iia.png' } width={90} height={90} alt='issea' /> 
     </Link>         <h4 className="h4 mb-2">IIA</h4>
                <p className="text-lg text-gray-400 text-center">Institut International des Assurances</p>
                 
            </div>
     
          </div>

        </div>
      </div>
    </section>
  )
}
