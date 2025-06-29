import React from 'react';

const Experience: React.FC = () => {
  // IMPORTANT: Replace these with your actual logo paths and captions!
  // Example: { src: '/images/logos/sfu_logo.png', alt: 'Simon Fraser University Logo', caption: 'Graduate Research & Teaching Assistant at SFU' },
  const companyLogos = [
    { src: '/bio/SFU.png', alt: 'SFU Logo', caption: 'Graduate Research & Teaching Assistant, Simon Fraser University             September 2023- Now' },
    { src: '/bio/IMSC.png', alt: 'IMSC Logo', caption: 'Research Intern - The Institute of Mathematical Sciences, Chennai       January 2023 - June 2023' },
    { src: '/bio/MUN.jpg', alt: 'MUN Logo', caption: 'MITACS Globalink Research Intern - Memorial University of Newfoundland, NL, Canada                June 2022 - August 2022' },
    { src: '/bio/LIMOS.png', alt: 'LIMOS Logo', caption: 'Research Intern - LIMOS, Universite Clermont-Auvergne                 April 2021 - November 2021' },
    { src: '/bio/mango.png', alt: 'mango Logo', caption: 'Curriculum Tech Intern - Mango Education  May 2020 - October 2020' },
    { src: '/bio/CDOt.png', alt: 'CDOt Logo', caption: 'Student Intern - Centre for Development of Telematics, Bangalore                May 2019' },
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="section-title">Experience</h1>
        
        <div className="space-y-12">
          {/* Company Logos Section */}
          <section className="fade-in">
            <h2 className="text-3xl font-semibold text-neutral-800 mb-8 text-center">Organizations I've Worked With</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-center">
              {companyLogos.map((logo, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs h-full">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-24 object-contain mb-4" // Adjust max-h as needed
                  />
                  <p className="text-neutral-700 font-medium text-sm flex-grow flex items-center justify-center">
                    {logo.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Experience;