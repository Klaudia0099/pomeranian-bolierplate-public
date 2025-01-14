import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { useState } from 'react';
import './styles.css';
import PersonalCardIcon from '../Images/tiles/personalcard.svg';
import EditIcon from '../Images/tiles/edit.svg';
import FaqIcon from '../Components/Icons/FaqIcon.svg';
import CodeIcon from '../Images/tiles/code.svg';
import BlogIcon from '../Components/Icons/BlogIcon.svg';
import { CalendarIcon } from './../Components/Icons/CalendarIcon';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'My CV',
      icon: <img src={PersonalCardIcon} alt="business card resume" />,
      description: 'curriculum vitae',
      link: '/cv',
    },
    {
      sectionTitle: 'Exercises',
      icon: <img src={EditIcon} alt="business card resume" />,
      description: 'exercises',
      link: '/excercises',
    },
    {
      sectionTitle: 'Calendar',
      icon: <CalendarIcon alt="business card resume" />,
      description: 'calendar',
      link: '/calendar',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={BlogIcon} alt="business card resume" />,
      description: 'blog about front-end technology',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={CodeIcon} alt="business card resume" />,
      description: 'technological stack implemented during the course',
      link: '/techstack',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={FaqIcon} alt="business card resume" />,
      description: 'questions and answers',
      link: '/faq',
    },
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-hello">
        <h2 className="dashboard-title">Hey, it's Klaudia!</h2>
      </div>
      <p className="dashboard-description">
        Here you will find information about my knowledge and skills
      </p>
      <br/>
      <div className="dashboard-content">
        {availableCards.map((card) => {
          return (
            <DashboardCard
              className="card-shadow"
              sectionTitle={card.sectionTitle}
              description={card.description}
              link={card.link}
              icon={card.icon}
            />
          );
        })}
      </div>
    </div>
  );
};