import React from 'react';
import Image from 'next/image';
import FeatImage01 from '@/public/images/staff/Dounla_Russel.jpg'
import FeatImage02 from '@/public/images/staff/Kemayou_franck.jpg'
import FeatImage03 from '@/public/images/staff/Kengne_Landry.jpg'
import FeatImage04 from '@/public/images/staff/Mbessala_serges.jpg'
import FeatImage05 from '@/public/images/staff/Ndobo_Pierre.jpg'
import FeatImage06 from '@/public/images/staff/Omogo_Williams.jpg'
import FeatImage07 from '@/public/images/ecoles/issea.png'

interface StaffMember {
  name: string;
  role: string;
  image: typeof FeatImage01;
}

const StaffCard: React.FC<StaffMember> = ({ name, role, image }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
    <Image src={image} alt={`${name}`} className="w-16 h-16 md:w-24 md:h-24 object-cover mx-auto mb-4 md:mb-6 rounded-full" />
    <h3 className="text-xl md:text-2xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-500">{role}</p>
  </div>
);

const StaffPage: React.FC = () => {
  const staffMembers: StaffMember[] = [
    { name: 'Marc Aurel', role: 'CEO - Ingenieur d\'application de la Statistique', image: FeatImage07 },
    { name: 'Kengne Landry', role: 'Directeur General', image: FeatImage03 },
      { name: 'Dounla Russel ', role: 'Responsable Concours ISSEA cycle ISE Long / AS', image: FeatImage01 },
    { name: 'Omogo Williams', role: 'Responsable Concours ISSEA cycle ISE Long / AS', image: FeatImage06},
        { name: 'Kemayou Franck', role: 'Responsable Concours ISSEA cycle ISE Math', image: FeatImage02 },
      { name: 'Mbessala Serges ', role: 'Responsable Concours ISSEA cycle ISE Economie', image: FeatImage04 },
    { name: 'Ndobo Pierre', role: 'Responsable Concours ISSEA cycle ISE Economie', image: FeatImage05},
    // Ajoutez plus de membres du personnel...
  ];

  return (
      <div className="bg-gray-100 py-12 px-4 md:px-8">
             {/* Section header */}
          <div className="max-w-3xl border-t mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Rencontre notre equipe de proffessionnel</h2>
            <p className="text-xl text-gray-400">Statos-Sphere Elite</p>
          </div>
      <div className="max-w-5xl   mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {staffMembers.map((member, index) => (
          <StaffCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default StaffPage;
