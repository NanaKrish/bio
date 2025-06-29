import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation: React.FC = () => {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if we're on the home page to make nav transparent
  const isHomePage = location.pathname === '/'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isHomePage 
        ? (isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent')
        : (isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200/50' 
            : 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-neutral-200')
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            to="/bio" 
            className={`text-2xl transition-all duration-300 hover:scale-105 ${
              isHomePage && !isScrolled 
                ? 'text-white hover:text-white/90 drop-shadow-lg' 
                : 'text-primary-600 hover:text-primary-700'
            }`}
            style={{ fontWeight: '200' }}
          >
            KN
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* Academics Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                className={`nav-link flex items-center space-x-1 transition-all duration-300 ${
                  isActive('/education') || isActive('/research') ? 'active' : ''
                } ${
                  isHomePage && !isScrolled 
                    ? 'text-white hover:text-white/90 drop-shadow-md' 
                    : 'text-neutral-700 hover:text-primary-600'
                }`}
              >
                <span>Academics</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isAcademicsOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isAcademicsOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-neutral-200/50 py-2 animate-in slide-in-from-top-2 duration-200">
                  <Link
                    to="/education"
                    className="dropdown-item"
                    onClick={() => setIsAcademicsOpen(false)}
                  >
                    Education/TAship
                  </Link>
                  <Link
                    to="/research"
                    className="dropdown-item"
                    onClick={() => setIsAcademicsOpen(false)}
                  >
                    Research
                  </Link>
                </div>
              )}
            </div>

            {/* Experience */}
            <Link 
              to="/experience" 
              className={`nav-link transition-all duration-300 ${
                isActive('/experience') ? 'active' : ''
              } ${
                isHomePage && !isScrolled 
                  ? 'text-white hover:text-white/90 drop-shadow-md' 
                  : 'text-neutral-700 hover:text-primary-600'
              }`}
            >
              Experience
            </Link>

            {/* Interests (formerly Miscellaneous) */}
            <Link 
              to="/miscellaneous" 
              className={`nav-link transition-all duration-300 ${
                isActive('/miscellaneous') ? 'active' : ''
              } ${
                isHomePage && !isScrolled 
                  ? 'text-white hover:text-white/90 drop-shadow-md' 
                  : 'text-neutral-700 hover:text-primary-600'
              }`}
            >
              Interests
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation