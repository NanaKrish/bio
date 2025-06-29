import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Experience = () => {
    // IMPORTANT: Replace these with your actual logo paths and captions!
    // Example: { src: '/images/logos/sfu_logo.png', alt: 'Simon Fraser University Logo', caption: 'Graduate Research & Teaching Assistant at SFU' },
    const companyLogos = [
        { src: '/bio/SFU.png', alt: 'SFU Logo', caption: 'Graduate Research & Teaching Assistant, Simon Fraser University <br /> September 2023- Now' },
        { src: '/bio/IMSC.png', alt: 'IMSC Logo', caption: 'Research Intern - The Institute of Mathematical Sciences, Chennai <br /> January 2023 - June 2023' },
        { src: '/bio/MUN.png', alt: 'MUN Logo', caption: 'MITACS Globalink Research Intern - Memorial University of Newfoundland, NL, Canada<br /> June 2022 - August 2022' },
        { src: '/bio/LIMOS.png', alt: 'LIMOS Logo', caption: 'Research Intern - LIMOS, Universite Clermont-Auvergne <br /> April 2021 - November 2021' },
        { src: '/bio/mango.png', alt: 'mango Logo', caption: 'Curriculum Tech Intern - Mango Education <br /> May 2020 - October 2020' },
        { src: '/bio/CDOt.png', alt: 'CDOt Logo', caption: 'Student Intern - Centre for Development of Telematics, Bangalore <br /> May 2019' },
    ];
    return (_jsx("div", { className: "page-container", children: _jsxs("div", { className: "content-wrapper", children: [_jsx("h1", { className: "section-title", children: "Experience" }), _jsx("div", { className: "space-y-12", children: _jsxs("section", { className: "fade-in", children: [_jsx("h2", { className: "text-3xl font-semibold text-neutral-800 mb-8 text-center", children: "Organizations I've Worked With" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-center", children: companyLogos.map((logo, index) => (_jsxs("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs h-full", children: [_jsx("img", { src: logo.src, alt: logo.alt, className: "max-h-24 object-contain mb-4" // Adjust max-h as needed
                                         }), _jsx("p", { className: "text-neutral-700 font-medium text-sm flex-grow flex items-center justify-center", children: logo.caption })] }, index))) })] }) })] }) }));
};
export default Experience;
