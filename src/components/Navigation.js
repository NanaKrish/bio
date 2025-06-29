import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navigation = () => {
    const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // Determine the base classes for the navigation bar
    const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200/50'
        : 'bg-transparent'}`;
    // Determine the text color classes for links inside the navigation bar
    const linkTextColorClasses = isScrolled
        ? 'text-neutral-700 hover:text-primary-600'
        : 'text-white hover:text-white/90 drop-shadow-md';
    return (_jsx("nav", { className: navClasses, children: _jsx("div", { className: "max-w-6xl mx-auto px-6", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsx(Link, { to: "/bio", className: `text-2xl transition-all duration-300 hover:scale-105 ${linkTextColorClasses}`, style: { fontWeight: '200' }, children: "KN" }), _jsxs("div", { className: "flex items-center space-x-8", children: [_jsxs("div", { className: "relative", children: [_jsxs("button", { onClick: () => setIsAcademicsOpen(!isAcademicsOpen), className: `nav-link flex items-center space-x-1 transition-all duration-300 ${isActive('/education') || isActive('/research') ? 'active' : ''} ${linkTextColorClasses}`, children: [_jsx("span", { children: "Academics" }), _jsx("svg", { className: `w-4 h-4 transition-transform duration-300 ${isAcademicsOpen ? 'rotate-180' : ''}`, fill: "currentColor" // Use currentColor to inherit text color
                                                , viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), isAcademicsOpen && (_jsxs("div", { className: "absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-neutral-200/50 py-2 animate-in slide-in-from-top-2 duration-200", children: [_jsx(Link, { to: "/education", className: "dropdown-item text-neutral-700 hover:text-primary-600 block px-4 py-2 text-sm" // Explicitly set dropdown item text color
                                                , onClick: () => setIsAcademicsOpen(false), children: "Education/TAship" }), _jsx(Link, { to: "/research", className: "dropdown-item text-neutral-700 hover:text-primary-600 block px-4 py-2 text-sm" // Explicitly set dropdown item text color
                                                , onClick: () => setIsAcademicsOpen(false), children: "Research" })] }))] }), _jsx(Link, { to: "/experience", className: `nav-link transition-all duration-300 ${isActive('/experience') ? 'active' : ''} ${linkTextColorClasses}`, children: "Experience" }), _jsx(Link, { to: "/miscellaneous", className: `nav-link transition-all duration-300 ${isActive('/miscellaneous') ? 'active' : ''} ${linkTextColorClasses}`, children: "Interests" })] })] }) }) }));
};
export default Navigation;
