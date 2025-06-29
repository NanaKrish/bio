import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Background Image Section - From very top to just below photo */}
      <div style={{
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
      }}>
        {/* Even stronger overlay to make background much less visible */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.65) 100%)',
          zIndex: 2
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10" style={{ paddingTop: '80px' }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="space-y-12">
            {/* Photo and Name Section */}
            <div className="fade-in flex flex-col sm:flex-row items-start gap-8">
              {/* Photo - Left Side - No floating bubbles */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-56 h-72 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src="/bio/NK.png"
                      alt="Krishna Narayanan"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10"></div>
                </div>
              </div>

              {/* Name and Title - Right of Photo - Keep ultra-light styling */}
              <div className="flex-1 space-y-4 pt-4">
                <h1 className="home-name" style={{ 
                  fontSize: '3rem', 
                  fontWeight: '200', 
                  color: 'white', 
                  letterSpacing: '-0.025em',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  lineHeight: '1.1'
                }}>
                  Krishna Narayanan
                </h1>
              </div>
            </div>

            {/* Main Content Section - Below Photo with white background */}
            <div className="fade-in space-y-8 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50" style={{ marginTop: '60px' }}>
              {/* Academic Introduction */}
              <div className="prose-enhanced space-y-6" style={{ fontSize: '15px', fontWeight: '400' }}>
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
              <div className="pt-6 border-t border-neutral-200 space-y-4">
                <p className="text-neutral-700" style={{ fontSize: '15px', fontWeight: '400' }}>
                  I believe in keeping an open mind for good discussion and debate, as that's how I learn best. 
                  I have a variety of interests outside of academics; feel free to read more about them{' '}
                  <Link 
                    to="/miscellaneous" 
                    className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                  >
                    here
                  </Link>.
                </p>
                
                <p className="text-neutral-700" style={{ fontSize: '15px', fontWeight: '400' }}>
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
                
                <p className="text-sm text-neutral-500 pt-2">
                  Last Updated: July 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home