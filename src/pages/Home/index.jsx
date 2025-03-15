import React from 'react';
import { SectionManagerProvider, useSection } from '../../components/SectionManager/SectionManagerProvider';
import Header from '../../components/Header';
import Projects from '../Projects';
import Contacts from '../Contacts';
import './style.css';

const Home = () => {
  const { headerClassName, projectsClassName, contactsClassName } = useSection();

  return (
    <div className='container'>
      <div className={`header ${headerClassName}`}>
        <Header />
      </div>
      <div className={`projects-page ${projectsClassName}`}>
        <Projects />
      </div>
      <div className={`contacts ${contactsClassName}`}>
        <Contacts />
      </div>
    </div>
  );
};

const HomeWithProvider = () => (
  <SectionManagerProvider>
    <Home />
  </SectionManagerProvider>
);

export default HomeWithProvider;