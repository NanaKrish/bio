import React from 'react'

const Education: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="section-title">Education & Teaching Assistantship</h1>
        
        <div className="space-y-8">
          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Education</h2>
            <div className="space-y-6">
              {/* Current Master's */}
              <div className="card group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-neutral-800">M.Sc (thesis route) in Mathematics</h3>
                  <span className="text-primary-600 font-medium">2023 - 2025</span>
                </div>
                <p className="text-neutral-600 mb-3">Simon Fraser University, Burnaby, BC, Canada</p>
                <div className="mb-4">
                  <p className="text-neutral-700">
                    <span className="font-medium">Supervisor:</span>{' '}
                    <a 
                      href="#" 
                      className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                    >
                      Prof. Tamon Stephen
                    </a>
                  </p>
                </div>
                <p className="text-neutral-700">
                  Focusing on discrete optimization and polytope theory, exploring algorithmic questions 
                  in polyhedral combinatorics and their computational complexity.
                </p>
              </div>

              {/* Previous Integrated Master's */}
              <div className="card group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-neutral-800">Integrated M.Sc, Theoretical Computer Science</h3>
                  <span className="text-primary-600 font-medium">Graduated June 2023</span>
                </div>
                <p className="text-neutral-600 mb-3">PSG College of Technology, Coimbatore, India</p>
                <p className="text-sm text-neutral-600 mb-4 italic">Graduated First Class with Distinction</p>
                
                <div className="space-y-6">
                  {/* Main Project */}
                  <div>
                    <p className="text-neutral-700 mb-2">
                      <span className="font-medium">Internal Supervisor:</span>{' '}
                      <a 
                        href="#" 
                        className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                      >
                        Prof. Lekshmi R S
                      </a>
                    </p>
                    <p className="text-neutral-700">
                      <span className="font-medium">Project title:</span> Monitoring edge-geodetic sets in graphs
                    </p>
                  </div>

                  {/* External Internship Projects */}
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-4">External internship supervisors (through internship stints):</h4>
                    
                    {/* Project 1: Monitoring edge-geodetic sets */}
                    <div className="mb-4 p-4 bg-neutral-50 rounded-lg border-l-4 border-primary-300">
                      <p className="font-medium text-neutral-800 mb-2">Project: Monitoring edge-geodetic sets in graphs</p>
                      <ul className="space-y-2 text-neutral-700 ml-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <a 
                              href="#" 
                              className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                            >
                              Prof. Florent Foucaud
                            </a>
                            <span className="text-neutral-600"> - LIMOS, Université Clermont Auvergne, France</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <a 
                              href="#" 
                              className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                            >
                              Prof. Venkatesh Raman
                            </a>
                            <span className="text-neutral-600"> - Institute of Mathematical Sciences, Chennai, India</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Project 2: Deduction number of graphs */}
                    <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-secondary-300">
                      <p className="font-medium text-neutral-800 mb-2">Project: Deduction number of graphs, a variant of the cops and robber game</p>
                      <ul className="space-y-2 text-neutral-700 ml-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <a 
                              href="#" 
                              className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                            >
                              Prof. Danny Dyer
                            </a>
                            <span className="text-neutral-600"> - Memorial University of Newfoundland, St. John's, Canada</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <a 
                              href="#" 
                              className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                            >
                              Prof. Andrea Burgess
                            </a>
                            <span className="text-neutral-600"> - University of New Brunswick, Saint John / Memorial University of Newfoundland, St. John's, Canada</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Competitive Exams Section */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Competitive Exams</h2>
            <div className="space-y-6">
              <div className="card group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-neutral-800">Joint Entrance Screening Test (JEST) 2023</h3>
                  <span className="text-primary-600 font-medium">Qualified</span>
                </div>
                <div className="space-y-2">
                  <p className="text-neutral-700">
                    <span className="font-medium">Description:</span> A National Eligibility Test (NET)
                  </p>
                  <p className="text-neutral-700">
                    <span className="font-medium">Subject:</span> Theoretical Computer Science
                  </p>
                  <p className="text-neutral-700">
                    <span className="font-medium">All India Rank:</span> <span className="text-primary-600 font-semibold">51</span> (Qualified)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Teaching Assistantship Section */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Teaching Assistantship</h2>
            <div className="space-y-6">
              <div className="card group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-neutral-800">Graduate Teaching Assistant - 1</h3>
                  <span className="text-primary-600 font-medium">2023 - 2025</span>
                </div>
                <p className="text-neutral-600 mb-6">Simon Fraser University (SFU), Burnaby & Surrey, BC</p>
                
                {/* Fall 2024 & Spring 2025 */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-4 text-lg">Fall 2024 & Spring 2025</h4>
                  <div className="space-y-4 ml-4">
                    {/* MATH 308 */}
                    <div className="border-l-2 border-primary-200 pl-4">
                      <h5 className="font-medium text-neutral-800 mb-2">MATH 308: Linear Optimization (Burnaby)</h5>
                      <p className="text-neutral-700 text-sm">
                        Led tutorial lectures, graded assignments, handled tests and examinations and provided student support.
                      </p>
                    </div>
                    
                    {/* Introductory Math Workshop */}
                    <div className="border-l-2 border-primary-200 pl-4">
                      <h5 className="font-medium text-neutral-800 mb-2">Introductory Math Workshop (Surrey)</h5>
                      <p className="text-neutral-700 text-sm mb-3">
                        Facilitated office hours and examinations, including grading.
                      </p>
                      <div>
                        <p className="font-medium text-neutral-800 mb-2 text-sm">Courses Supported:</p>
                        <ul className="text-neutral-700 text-sm space-y-1 ml-4">
                          <li>• FAN X99: Foundations of Analytical and Quantitative Reasoning</li>
                          <li>• MATH 100: Pre-Calculus</li>
                          <li>• MATH 130: Mathematics for Computer Graphics</li>
                          <li>• MACM 201: Discrete Mathematics II</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spring 2024 */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-4 text-lg">Spring 2024</h4>
                  <div className="ml-4">
                    <div className="border-l-2 border-primary-200 pl-4">
                      <h5 className="font-medium text-neutral-800 mb-2">Introductory Math Workshop (Surrey)</h5>
                      <p className="text-neutral-700 text-sm">
                        Facilitated office hours and examinations, including grading.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fall 2023 */}
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-4 text-lg">Fall 2023</h4>
                  <div className="ml-4">
                    <div className="border-l-2 border-primary-200 pl-4">
                      <h5 className="font-medium text-neutral-800 mb-2">Algebra Workshop (Burnaby)</h5>
                      <p className="text-neutral-700 text-sm mb-3">
                        Facilitated office hours and examinations, including grading.
                      </p>
                      <div>
                        <p className="font-medium text-neutral-800 mb-2 text-sm">Courses Supported:</p>
                        <ul className="text-neutral-700 text-sm space-y-1 ml-4">
                          <li>• MATH 100: Pre-Calculus</li>
                          <li>• MATH 232: Applied Linear Algebra</li>
                          <li>• MATH 240: Linear Algebra</li>
                          <li>• MACM 201: Discrete Mathematics II</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Education