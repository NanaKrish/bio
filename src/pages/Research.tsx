import React from 'react'

const Research: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="section-title">Research</h1>
        
        <div className="space-y-8">
          {/* Research Interests */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Research Interests</h2>
            <div className="card group">
              <p className="text-neutral-700 mb-4">
                My research focuses on the theoretical and computational aspects of discrete and 
                combinatorial optimization. I am particularly interested in developing efficient 
                algorithms for complex optimization problems and exploring their mathematical foundations.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-3">Primary Areas:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Combinatorial Optimization Theory
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Graph Theory Applications
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Integer Programming
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-3">Methods & Tools:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Algorithm Design & Analysis
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Mathematical Modeling
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Computational Complexity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Current Projects */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Current Projects</h2>
            <div className="space-y-6">
              <div className="card group">
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Master's Thesis Research</h3>
                <p className="text-neutral-600 mb-3">In Progress</p>
                <p className="text-neutral-700 mb-4">
                  Investigating novel approaches to solving specific classes of combinatorial optimization 
                  problems, with focus on developing theoretical insights and practical algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">Optimization</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">Algorithm Design</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">Theoretical Analysis</span>
                </div>
              </div>

              <div className="card group">
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Independent Study</h3>
                <p className="text-neutral-600 mb-3">Ongoing</p>
                <p className="text-neutral-700 mb-4">
                  Exploring connections between discrete mathematics and optimization theory through 
                  literature review and problem-solving exercises.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">Literature Review</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">Problem Analysis</span>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Presentations */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Presentations & Conferences</h2>
            <div className="card group">
              <p className="text-neutral-600 italic">
                Presentations and conference participation details will be updated as research progresses.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Research