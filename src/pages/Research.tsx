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
                My current research focuses on the theoretical aspects of discrete and 
                combinatorial optimization. I am particularly interested in exploring the computational complexity of geometric parameters in polytopes, which have implications in linear optimization. 
                In the past, I have also worked on graph-theoretic problems and they remain of interest to me. Algorithms and computational complexity theory are natural extensions of my research interests.  
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-3">Primary Areas:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Combinatorial Optimization
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Linear Programming
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Graph Theory                      
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-3">Areas of interest</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Algorithm Design & Analysis
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
                <a 
                      href="https://researchseminars.org/talk/SFUOR/49/" 
                      className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                    >
                      Coping with intractability: Topics at the intersection of Parameterized Algorithms and Linear Optimization
                    </a>
              </p>
            </div>
            <div className="card group">
              <p className="text-neutral-600 italic">
                Monitoring edge-geodetic sets in graphs
                <a 
                      href="https://faculty.sarkara.wwu.edu/2024(2)/ccf_Oct_2024.html" 
                      className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                    >
                    Cascadia Combinatorial Feast - October 2024
                    </a>
                Held at the University of Victoria, Victoria, BC, Canada.
              </p>
            </div>
            <div className="card group">
              <p className="text-neutral-600 italic">
                Monitoring edge-geodetic sets in graphs
                <a 
                      href="https://caldam2023.daiict.ac.in/acceptedpapers.php" 
                      className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                    >
                    9th Annual International Conference on Algorithms and Discrete Applied Mathematics - February 2023
                    </a>
                Held at the Dhirubhai Ambani Institute of Information and Communication Technology, Gandhinagar, India.
              </p>
            </div>
            <div className="card group">
              <p className="text-neutral-600 italic">
                Graph theoretical analysis of Buckminsterfullerene - Young Researchers' Forum 
                6th Annual International Conference on Algorithms and Discrete Applied Mathematics - February 2020, Indian Institute of Technology, Hyderabad, India.
              </p>
            </div>
            
          </section>
        </div>
      </div>
    </div>
  )
}

export default Research