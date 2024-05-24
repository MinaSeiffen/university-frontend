import React from 'react'
import localImage1 from "../../assets/Kabardino.jfif"
import localImage2 from '../../assets/Ufa.jfif'
import localImage3 from '../../assets/Ulyanovsk.jfif'
import localImage4 from '../../assets/Saratov.jfif'
import localImage5 from '../../assets/Astraxan.jfif'
import UniversityCard from '../../components/UniversityComponent/UniversityCard'


const Universities = () => {
  const universities = [
    {
      image: localImage1,
      name: 'Kabardino Balkaria State Medical University',
      address: 'Ulitsa Chernyshevskogo, 173, Nalchik, Kabardino-Balkarian Republic, Russia, 360004',
    },
    {
      image: localImage2,
      name: 'Ufa state medical university',
      address: 'Ulitsa Lenina, 3, Ufa, Republic of Bashkortostan, Russia, 450008',
    },
    {
      image: localImage3,
      name: 'Ulyanovsk state medical university',
      address: 'Medical College, Ulitsa Ablukova, 31, Ulyanovsk, Ulyanovsk Oblast, Russia, 432005',
    },
    {
      image: localImage4,
      name: 'Saratov state medical university',
      address: 'Medical College, Ulitsa Ablukova, 31, Ulyanovsk, Ulyanovsk Oblast, Russia, 432005',
    },
    {
      image: localImage5,
      name: 'Astraxan state medical university',
      address: 'Ulitsa Bakinskaya, 121, Astrakhan, Astrakhan Oblast, Russia, 414000',
    },
  ];
  return (
    <section className="w-full mt-32">
      {universities.map((university, index) => (
        <UniversityCard
          key={index}
          image={university.image}
          name={university.name}
          address={university.address}
        />
      ))}
    </section>
  );
}

export default Universities;

