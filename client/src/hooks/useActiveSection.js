import { useEffect, useState } from 'react';

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '#home');

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sectionIds.reduce((acc, id) => {
        const section = document.querySelector(id);
        if (!section) return acc;

        const offset = section.getBoundingClientRect().top;
        return offset <= 120 ? id : acc;
      }, sectionIds[0]);
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
