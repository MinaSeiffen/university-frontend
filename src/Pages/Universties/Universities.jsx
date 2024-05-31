import React from 'react'
import UniversityCard from '../../components/UniversityComponent/UniversityCard'
import { universities } from '../../Constants/index';

const Universities = () => {
  
  return (
    <div className='mt-40'>
    {universities.map((university) => (
      <UniversityCard key={university.id} university={university} />
    ))}
    </div>
  )
};

export default Universities;

