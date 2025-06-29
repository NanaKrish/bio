import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Home = () => {
    return (_jsxs("div", { style: { minHeight: '100vh', backgroundColor: '#f8fafc' }, children: [_jsx("div", { style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '520px', // Covers nav area + photo area
                    backgroundImage: 'url(/bio/bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 1
                }, children: _jsx("div", { style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.65) 100%)',
                        zIndex: 2
                    } }) }), _jsx("div", { className: "relative z-10", style: { paddingTop: '80px' }, children: _jsx("div", { className: "max-w-6xl mx-auto px-6 py-12", children: _jsxs("div", { className: "space-y-12", children: [_jsxs("div", { className: "fade-in flex flex-col sm:flex-row items-start gap-8", children: [_jsx("div", { className: "flex-shrink-0", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "w-56 h-72 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl overflow-hidden shadow-2xl", children: _jsx("img", { src: "/bio/NK.png", alt: "Krishna Narayanan", className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700" }) }), _jsx("div", { className: "absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" })] }) }), _jsx("div", { className: "flex-1 space-y-4 pt-4", children: _jsx("h1", { className: "home-name", style: {
                                                fontSize: '3rem',
                                                fontWeight: '200',
                                                color: 'white',
                                                letterSpacing: '-0.025em',
                                                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                                                lineHeight: '1.1'
                                            }, children: "Krishna Narayanan" }) })] }), _jsxs("div", { className: "fade-in space-y-8 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50", style: { marginTop: '60px' }, children: [_jsxs("div", { className: "prose-enhanced space-y-6", style: { fontSize: '15px', fontWeight: '400' }, children: [_jsx("p", { children: "Welcome to my academic portfolio. I am currently pursuing a Master's degree in Mathematics at Simon Fraser University, Burnaby, BC, Canada under the supervision of Prof. Tamon Stephen, with a focus on Discrete Optimization. My current work explores algorithmic questions in polytope theory." }), _jsx("p", { children: "Previously, I graduated with an Integrated Master's degree in Theoretical Computer Science from PSG College of Technology, Coimbatore, India (degree awarded by Anna University, Chennai), where I worked under the supervision of Prof. Lekshmi R S in the Department of Applied Mathematics and Computational Sciences." }), _jsx("p", { children: "I am interested in exploring anything in or at the intersection of Combinatorial Optimization, Graph Theory, Polyhedral Combinatorics, and Computational Complexity Theory, in no particular order." })] }), _jsxs("div", { className: "pt-6 border-t border-neutral-200 space-y-4", children: [_jsxs("p", { className: "text-neutral-700", style: { fontSize: '15px', fontWeight: '400' }, children: ["I believe in keeping an open mind for good discussion and debate, as that's how I learn best. I have a variety of interests outside of academics; feel free to read more about them", ' ', _jsx(Link, { to: "/miscellaneous", className: "text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200", children: "here" }), "."] }), _jsxs("p", { className: "text-neutral-700", style: { fontSize: '15px', fontWeight: '400' }, children: ["Find a copy of my CV", ' ', _jsx("a", { href: "/bio/NK_CV_full-2.pdf", target: "_blank", rel: "noopener noreferrer", className: "text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200", children: "here" }), "."] }), _jsx("p", { className: "text-sm text-neutral-500 pt-2", children: "Last Updated: July 2025" })] })] })] }) }) })] }));
};
export default Home;
