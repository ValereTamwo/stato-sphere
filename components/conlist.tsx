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
import React from 'react';

interface ResultCardProps {
  competitionName: string;
  bannerImage: typeof Issea;
  subjects: string[];
  courseList: string[];
}

const ResultCard: React.FC<ResultCardProps> = ({
  competitionName,
  bannerImage,
  subjects,
  courseList,
}) => {
  return (
    <div className="bg-white text-center items-center justify-center border border-4 border-orange-400 rounded-lg shadow-md p-6 md:p-8 lg:p-10"  data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
      <h2 className="text-2xl font-bold mb-2 text-red-500">{competitionName}</h2>

      <Image  src={bannerImage} alt={competitionName} className="w-[30%] h-[30%] justify-center flex items-center mb-4 md:mb-6 lg:mb-8 rounded-lg" />
      
      <p className="mb-2 ">Subjects: {subjects.join(', ')}</p>
      <p className="mb-2">Courses: {courseList.join(', ')}</p>
      <p className="mb-2 text-gray-400">Date De lancement: Voir Brochure</p>

    </div>
  );
};

export const Card2 =  ResultCard;




export default function ConGrid() {
  return (
    <section className='w-full bg-white'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-w  ">
        <div className="py-12 md:py-20">

          {/*Section header*/}
          <div className="max-w-3xl border-t mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Espaces Concours - Vue d'ensemble</h2>
            <p className="text-xl text-gray-400">faites un tour d'horizon de ces differents Concours</p>
            <p className='text-white bg-red-300 rounded'>Ces informations sont extremement detaillees dans notre brochure Telechargeable</p>
          </div> 

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-3  md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-center md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <Card2  competitionName ={'CONCOURS DE L\'ISSEA'}
            bannerImage={Issea}
            subjects={['Mathematiques','Ordre Generale']}   
            courseList ={['Analyse','Probabilite','Algebre','...']} />
            
             <Card2  competitionName ={'CONCOURS DE L\'EAMAC'}
            bannerImage={Eamac}
            subjects={['Mathematiques','Physiques','Francais','Anglais']}   
            courseList ={['Analyse','Probabilite','Algebre' ,"..."]} />

             <Card2  competitionName ={'CONCOURS DE L\'EAMAU'}
            bannerImage={Eamau}
            subjects={['Mathematiques','Culture Generale','Dessin','Physique']}   
              courseList={['Analyse', 'Probabilite et Statistiues', 'Algebre','...']} />
             <Card2  competitionName ={'CONCOURS DE L\'IFORD'}
            bannerImage={Ifford}
            subjects={['Mathematiques','Culture Generale']}   
            courseList ={['Analyse','Probabilite','Algebre']} />
            
             <Card2  competitionName ={'CONCOURS DE L\'ISTA'}
            bannerImage={Ista}
            subjects={['Mathematiques Financiere et Statistiques','Macro-Economie/Micro-Economie']}   
            courseList ={['Analyse','Probabilite','Algebre']} />

             <Card2  competitionName ={'CONCOURS DE L\'ESSAL'}
            bannerImage={Essal}
            subjects={['Mathematiques','Francais','Biologie','Physique-Chimie']}   
              courseList={['Analyse', 'Probabilite', 'Algebre','...']} />
            
             <Card2  competitionName ={'CONCOURS Du CERDI'}
            bannerImage={Cerdi}
            subjects={['MacroEconomie','Mathematiques']}   
            courseList ={['Analyse','Probabilite','Algebre','...']} />
            
             <Card2  competitionName ={'CONCOURS DE L\'IIA'}
            bannerImage={Iia}
            subjects={['Mathematiques','Culture Generale','Anglais']}   
            courseList ={['Analyse','Probabilite','Algebre']} />

             <Card2  competitionName ={'CONCOURS DE L\'IEF'}
            bannerImage={Ief}
            subjects={['Mathematiques','Culture Generale']}   
            courseList ={['Analyse','Probabilite','Algebre']} />
          </div>

        </div>  
      </div>
    </section>
  )
}
