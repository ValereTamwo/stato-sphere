import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testi/testi-1.jpg'
import TestimonialImage02 from '@/public/images/testi/testi-2.jpg'
import TestimonialImage03 from '@/public/images/testi/testi-3.jpg'
import { useState } from 'react'
export default function Testimonials() {




  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center text-white pb-12 md:pb-20">
            <h2 className="h2 mb-4">Temoignages de nos Majors</h2>
            <p className="text-xl text-gray-400">À Statosphère, nous formons des leaders. Notre expertise nous a hissés au titre de référence depuis de nombreuses années. <span className='text-red-500'> Meilleure </span>Centre de Preparation</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-red-500" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Je m'appelle DEMGNE TCHUDJO Skeva lauréate a L'ENSEA d'Abidjan cycle As en partie grâce au groupe Statosphère. En effet, leur brillante pédagogique m'a permise de surpasser mes limites et de m'armer de connaissances et de courage pour affronter les épreuves de l'examen.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Demgne Tchudjo Skeva</cite> - <a className="text-red-500 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Laureate Cycle AS ENSEA d'Abidjan</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-red-500" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">—  Je me nomme Joseph Ebode, lauréat au concours de l'ISSEA session 2023. Je suis très heureux de cette réussite, et je tiens à remercier le groupe STATO-SPHERE pour sa formation de grande qualité, qui m'a permis de réaliser mon rêve pour cette année.

          J'ai découvert le groupe STATO-SPHERE par le bouche-à-oreille, et j'ai été immédiatement séduit par son approche pédagogique : Les cours sont dispensés par des professeurs expérimentés et d'autant plus passionnés, qui ont à cœur de transmettre leur connaissance de manière claire et concise. Son accompagnement personnalisé : les professeurs sont toujours disponibles pour répondre aux questions des étudiants, et ils organisent régulièrement des séances de coaching avant, pendant et après les cours pour donner des astuces sur comment travailler de manière efficace et efficiente à la maison, ce qui m'a aussi énormément aidé. Son contenu riche et varié : les cours couvrent l'ensemble des connaissances nécessaires pour réussir le concours.

          En outre, la formation du groupe STATO-SPHERE est une formation de grande qualité qui permet aux étudiants de se préparer efficacement aux concours de bourse notamment celui de l'ISSEA. Je recommande vivement cette formation à tous les étudiants qui souhaitent intégrer une grande école de bourse afin de réaliser son rêve.u</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Joseph Ebode</cite> - <a className="text-red-500 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Laureat ISSEA 2023</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-red-500" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Ma préparation au groupe Statosphère pour le concours de l'ISSEA a été une expérience extrêmement enrichissante. Les cours dispensés étaient d'une grande qualité, et les travaux dirigés m'ont permis de consolider mes connaissances de manière efficace. Les enseignants étaient toujours disponibles pour fournir des conseils précieux, ce qui a été un élément majeur dans ma préparation. Leur expertise et leur dévouement ont renforcé ma confiance en moi. Je suis reconnaissant d'avoir eu la chance de suivre cette préparation au sein du groupe Statosphère, qui a grandement contribué à ma réussite pour le concours de l'ISSEA.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Mukam Williams</cite> - <a className="text-red-500 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Laureat ISSEA</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
