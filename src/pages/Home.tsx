import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50"> {/* Use Tailwind class for background */}
      {/* Background Image Section - From very top to just below photo */}
      <div
        className="absolute top-0 left-0 right-0 h-[450px] sm:h-[520px] bg-cover bg-center bg-no-repeat" // Increased mobile height to 450px for more text space
        style={{ backgroundImage: 'url(/bio/bg.jpg)' }}
      >
        {/* Even stronger overlay to make background much less visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/70 to-black/65" />
      </div>
      
      {/* Content Container (relative to allow z-index, handles overall padding) */}
      {/* Increased mobile top padding to push content down more from top edge */}
      <div className="relative z-10 pt-16 sm:pt-20"> 
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12"> {/* Responsive horizontal padding */}
          <div className="space-y-8 sm:space-y-12">
            {/* Photo and Name Section */}
            {/* On mobile (default), stack vertically and center items */}
            {/* On small screens (sm:), switch to horizontal layout, align items to start */}
            <div className="fade-in flex flex-col items-center sm:flex-row sm:items-start gap-8">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Responsive photo size: smaller on mobile, larger on sm: */}
                  <div className="w-40 h-52 sm:w-56 sm:h-72 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src="/bio/NK.png"
                      alt="Krishna Narayanan"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10"></div>
                </div>
              </div>

              {/* Name and Title - Right of Photo */}
              {/* On mobile, text-align center, on sm: text-align left */}
              {/* Reverted font for name/title/location using original inline styles + responsive text sizes */}
              <div className="flex-1 space-y-2 pt-4 text-center sm:text-left"> {/* Adjusted space-y for tighter mobile */}
                <h1 className="home-name text-white tracking-tight leading-tight" style={{ 
                    fontSize: '2.5rem', // Smaller on mobile
                    fontWeight: '200', 
                    letterSpacing: '-0.025em',
                    textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    lineHeight: '1.1'
                }}>
                  Krishna Narayanan
                </h1>
                <p className="home-title text-white/95" style={{ 
                    fontSize: '1.25rem', // Smaller on mobile
                    fontWeight: '200', 
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  Master's Student in Mathematics
                </p>
                <p className="home-location text-white/90" style={{ 
                    fontSize: '1rem', // Smaller on mobile
                    fontWeight: '200', 
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  Simon Fraser University, Burnaby, BC, Canada
                </p>
              </div>
            </div>

            {/* Main Content Section - Below Photo with white background */}
            {/* Adjusted negative margin for better overlap on mobile. Reduced padding for mobile. */}
            <div className="fade-in space-y-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-8 shadow-xl border border-white/50 -mt-24 sm:mt-0"> {/* Adjusted negative margin */}
              {/* Academic Introduction */}
              <div className="prose-enhanced space-y-4 text-sm sm:text-base font-normal text-neutral-700">
                <p>
                  Welcome to my academic portfolio. I am currently pursuing a Master's degree in Mathematics 
                  at Simon Fraser University, Burnaby, BC, Canada under the supervision of 
                  Prof. Tamon Stephen, with a focus on Discrete Optimization. 
                  My current work explores algorithmic questions in polytope theory.
                </p>
                
                <p>
                  Previously, I graduated with an Integrated Master's degree in Theoretical Computer Science 
                  from PSG College of Technology, Coimbatore, India (degree awarded by Anna University, Chennai), 
                  where I worked under the supervision of Prof. Lekshmi R S in the Department of 
                  Applied Mathematics and Computational Sciences.
                </p>

                <p>
                  I am interested in exploring anything in or at the intersection of Combinatorial Optimization, 
                  Graph Theory, Polyhedral Combinatorics, and Computational Complexity Theory, 
                  in no particular order.
                </p>
              </div>

              {/* Personal Philosophy & Interests */}
              <div className="pt-4 sm:pt-6 border-t border-neutral-200 space-y-3">
                <p className="text-neutral-700 text-sm sm:text-base font-normal">
                  I believe in keeping an open mind for good discussion and debate, as that's how I learn best. 
                  I have a variety of interests outside of academics; feel free to read more about them{' '}
                  <Link 
                    to="/miscellaneous" 
                    className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                  >
                    here
                  </Link>.
                </p>
                
                <p className="text-neutral-700 text-sm sm:text-base font-normal">
                  Find a copy of my CV{' '}
                  <a 
                    href="/bio/NK_CV_full-2.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                  >
                    here
                  </a>.
                </p>
                
                <p className="text-xs text-neutral-500 pt-1">
                  Last Updated: June 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;