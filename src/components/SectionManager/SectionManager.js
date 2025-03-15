import { useState, useEffect } from 'react';

const SectionManager = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [headerClassName, setHeaderClassName] = useState('active');
  const [projectsClassName, setProjectsClassName] = useState('down');
  const [contactsClassName, setContactsClassName] = useState('down');

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      const deltaY = event.deltaY;

      if (deltaY > 0 && currentSection < 2) {
        switch (currentSection) {
          case 0:
            setHeaderClassName('up');
            setProjectsClassName('active');
            setContactsClassName('down');
            break;
          case 1:
            setHeaderClassName('up');
            setProjectsClassName('up');
            setContactsClassName('active');
            break;
          default:
            break;
        }
        setCurrentSection((prev) => prev + 1);
      }

      if (deltaY < 0 && currentSection > 0) {
        switch (currentSection) {
          case 2:
            setHeaderClassName('up');
            setProjectsClassName('active');
            setContactsClassName('down');
            break;
          case 1:
            setHeaderClassName('active');
            setProjectsClassName('down');
            setContactsClassName('down');
            break;
          default:
            break;
        }
        setCurrentSection((prev) => prev - 1);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection]);

  return {
    headerClassName,
    projectsClassName,
    contactsClassName,
  };
};

export default SectionManager;
