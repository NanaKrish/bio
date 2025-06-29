import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const Experience = () => {
    const companyLogos = [
        {
            src: '/bio/SFU.png',
            alt: 'SFU Logo',
            caption: (_jsxs(_Fragment, { children: ["Graduate Research & Teaching Assistant", _jsx("br", {}), "Simon Fraser University", _jsx("br", {}), "September 2023 - Now"] }))
        },
        {
            src: '/bio/IMSC.png',
            alt: 'IMSC Logo',
            caption: (_jsxs(_Fragment, { children: ["Research Intern", _jsx("br", {}), "The Institute of Mathematical Sciences, Chennai", _jsx("br", {}), "January 2023 - June 2023"] }))
        },
        {
            src: '/bio/MUN.jpg',
            alt: 'MUN Logo',
            caption: (_jsxs(_Fragment, { children: ["MITACS Globalink Research Intern", _jsx("br", {}), "Memorial University of Newfoundland, NL, Canada", _jsx("br", {}), "June 2022 - August 2022"] }))
        },
        {
            src: '/bio/LIMOS.png',
            alt: 'LIMOS Logo',
            caption: (_jsxs(_Fragment, { children: ["Research Intern", _jsx("br", {}), "LIMOS, Universit\u00E9 Clermont-Auvergne", _jsx("br", {}), "April 2021 - November 2021"] }))
        },
        {
            src: '/bio/mango.png',
            alt: 'mango Logo',
            caption: (_jsxs(_Fragment, { children: ["Curriculum Tech Intern", _jsx("br", {}), "Mango Education", _jsx("br", {}), "May 2020 - October 2020"] }))
        },
        {
            src: '/bio/CDOt.png',
            alt: 'CDOt Logo',
            caption: (_jsxs(_Fragment, { children: ["Student Intern", _jsx("br", {}), "Centre for Development of Telematics, Bangalore", _jsx("br", {}), "May 2019"] }))
        },
    ];
    return (_jsx("div", { className: "page-container", children: _jsxs("div", { className: "content-wrapper", children: [_jsx("h1", { className: "section-title", children: "Experience" }), _jsx("div", { className: "space-y-12", children: _jsxs("section", { className: "fade-in", children: [_jsx("h2", { className: "text-3xl font-semibold text-neutral-800 mb-8 text-center", children: "Organizations I've Worked With" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-stretch", children: [" ", companyLogos.map((logo, index) => (_jsxs("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs h-full", children: [_jsx("img", { src: logo.src, alt: logo.alt, className: "max-h-24 object-contain mb-4" // Adjust max-h as needed
                                             }), _jsx("p", { className: "text-neutral-700 font-medium text-sm", children: logo.caption })] }, index)))] })] }) })] }) }));
};
export default Experience;
