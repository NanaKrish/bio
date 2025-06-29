import React from 'react';

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
                combinatorial optimization. I'm particularly interested in exploring the computational complexity of geometric parameters in polytopes, which have implications in linear optimization. 
                In the past, I've also worked on graph-theoretic problems, and they remain of interest to me. Algorithms and computational complexity theory are natural extensions of my research interests.  
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

          {/* Publications Section */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Publications</h2>
            <div className="space-y-6">
              {/* NEW: Placeholder for Peer-Reviewed/Accepted/In Progress */}
              <div>
                <div className="card group">
                  <p className="text-neutral-700">
                    Florent Foucaud, <b>Krishna Narayanan</b> and Lekshmi R S. <a href = "https://link.springer.com/chapter/10.1007/978-3-031-25211-2_19" className="text-primary-600 hover:text-primary-700 decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"><i>Monitoring edge-geodetic sets in graphs.</i></a> Proceedings of the 9th International Conference on Algorithms and Discrete Applied Mathematics (CALDAM 2023), Lecture Notes in Computer Science 13947:245-256, 2023
                  </p>
                </div>
                {/* You can add more placeholder items here if you have multiple distinct works */}
              </div>

              {/* Submitted Sub-section */}
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Submitted</h3>
                <div className="card group">
                  <p className="text-neutral-700">
                    Subhadeep R. Dev, Sanjana Dey, Florent Foucaud, <b>Krishna Narayanan</b> and Lekshmi R S. <a href = "https://arxiv.org/abs/2210.03774" className="text-primary-600 hover:text-primary-700 decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"><i>Monitoring edge-geodetic sets in graphs.</i></a>. Manuscript, 2023.
                  </p>
                </div>
                {/* Add more submitted papers as needed */}
              </div>

            </div>
          </section>
          
          {/* Academic Presentations */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Presentations & Conferences</h2>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                SFU Operations Research Seminar - December 2024 <br />
                <a 
                  href="https://researchseminars.org/talk/SFUOR/49/" 
                  className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                >
                  Coping with intractability: Topics at the intersection of Parameterized Algorithms and Linear Optimization
                </a> <br />
                  <br />
                  
                Graduate Student Presentation for MATH 708. 
              </p>
            </div>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                Cascadia Combinatorial Feast - October 2024 <br />
                <a 
                  href="https://faculty.sarkara.wwu.edu/2024(2)/ccf_Oct_2024.html" 
                  className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                >
                  Monitoring edge-geodetic sets in graphs
                </a><br />
                <br />
                Held at the University of Victoria, Victoria, BC, Canada. 
              </p>
            </div>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                9th Annual International Conference on Algorithms and Discrete Applied Mathematics - February 2023 <br />
                <a 
                  href="https://caldam2023.daiict.ac.in/acceptedpapers.php" 
                  className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                >
                  Monitoring edge-geodetic sets in graphs
                </a><br />
                Held at the Dhirubhai Ambani Institute of Information and Communication Technology, Gandhinagar, India. <br />
                <br />
                <b>Springer Award for Best Student Presentation (One of four recipients)</b>
              </p>
            </div>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                Graph theoretical analysis of Buckminsterfullerene <br />
                <br />
                Young Researchers' Forum - 6th Annual International Conference on Algorithms and Discrete Applied Mathematics - February 2020, Indian Institute of Technology, Hyderabad, India.<br />
              </p>
            </div>
            <br />
            <h3 className="text-2xl font-semibold text-neutral-800 mb-6">Other contributions</h3>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                
                <a 
                  href="https://sites.google.com/view/eccc2022/abstracts" 
                  className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                >
                  Deduction in graph products
                </a><br />
                East Coast Combinatorics Conference (ECCC) - 2022, University of Prince Edward Island, Charlottetown.  <br />
                <br />
                <b>Presentation by Dr. Danny Dyer. I contributed to the findings</b>
              </p>
            </div>
            
          </section>
        </div>
      </div>
    </div>
  )
}

export default Research;