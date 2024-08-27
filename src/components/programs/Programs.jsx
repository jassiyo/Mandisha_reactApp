import React from 'react';
import './programs.css';
import program_1 from '../../assets/program1.jpg';
import program_2 from '../../assets/program2.jpg';
import program_3 from '../../assets/program3.jpg';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MedicationIcon from '@mui/icons-material/Medication';
import FoodBankIcon from '@mui/icons-material/FoodBank';

const Programs = () => {
  return (
    <section className='programs-container'>
      <div className='programs-overview'>
        <p>Our work focuses on providing essential services and resources to communities in need. From healthcare and food distribution to volunteer outreach, our programs aim to create lasting impact and positive change.</p>
      </div>
      
      <div className='programs'>
        <div className='program'>
          <img src={program_1} alt='Medicine Aid' />
          <div className='caption'>
            <MedicationIcon className='icon'/>
            <p>Medicine AID</p>
          </div>
        </div>
        <div className='program'>
          <img src={program_2} alt='Food Aid' />
          <div className='caption'>
            <FoodBankIcon className='icon'/>
            <p>Food AID</p>
          </div>
        </div>
        <div className='program'>
          <img src={program_3} alt='Volunteer Aid' />
          <div className='caption'>
            <VolunteerActivismIcon className='icon'/>
            <p>Volunteer AID</p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className='programs-impact'>
        <img src={program_3} alt="Impact" className="impact-img" /> {/* Added impact image */}
        <h4>Our Impact</h4>
        <p>Over 10,000 children educated, 200 wells built, and countless lives improved through our ongoing initiatives.</p>
      </div>
    </section>
  );
};

export default Programs;
