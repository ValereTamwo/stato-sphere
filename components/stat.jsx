import Issea from '@/public/images/ecoles/issea.png'
import Eamau from '@/public/images/ecoles/eamau.png'
import Eamac from '@/public/images/ecoles/eamac.jpeg'
import Ifford from '@/public/images/ecoles/ifford.png'
import Ista from '@/public/images/ecoles/ista.png'
import Essal from '@/public/images/ecoles/essal.png'
import Cerdi from '@/public/images/ecoles/cerdi.png'
import Ief from '@/public/images/ecoles/ief.png'
import Iia from '@/public/images/ecoles/iia.png'



import Image from 'next/image'
export default function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 mt-6 sm:px-6  text-white border-t">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Statistiques</h2>
            <p className="text-xl text-gray-400">Statos-Sphere en Chiffre</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
           
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">55% - 47% - 24% </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Laureats Camerounais 2023 <br/> : ISSEA ISE-LONG - AS -LICENCE</p>
               
            </div>
        </div>
            
            
            
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
       
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-white">54%</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Taux d'integration 2023</p>
                
            </div>
        </div>




           <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
           
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-white">2</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">centre de preparation existants</p>
                <p>Yaounde . Dschang</p>
            </div>
        </div>

            

          </div>

        </div>
      </div>
    </section>
  )
}
