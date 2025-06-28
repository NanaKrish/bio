import React from 'react'

const Experience: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="section-title">Experience</h1>
        
        <div className="space-y-12">
          {/* Academic Experience */}
          <section className="fade-in">
            <h2 className="text-3xl font-semibold text-neutral-800 mb-8">Academic Experience</h2>
            <div className="space-y-8">
              <div className="card group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-neutral-800">Graduate Teaching Assistant</h3>
                  <span className="text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">Fall 2023 - Present</span>
                </div>
                <p className="text-neutral-600 mb-4 font-medium">Department of Mathematics</p>
                <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
                  Assisting with undergraduate mathematics courses, providing academic support to students, 
                  and gaining valuable teaching experience in mathematical education.
                </p>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-4 text-lg">Key Responsibilities:</h4>
                  <ul className="grid md:grid-cols-2 gap-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      Conducting weekly tutorial sessions for undergraduate students
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      Grading assignments and providing constructive feedback
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      Holding office hours for individual student support
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      Assisting with exam preparation and review sessions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-neutral-800">Research Assistant</h3>
                  <span className="text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">Spring 2023 - Present</span>
                </div>
                <p className="text-neutral-600 mb-4 font-medium">Mathematics Department Research Group</p>
                <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
                  Supporting faculty research in discrete mathematics and optimization theory through 
                  literature review, problem analysis, and computational work.
                </p>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-4 text-lg">Contributions:</h4>
                  <ul className="grid md:grid-cols-2 gap-3 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      Conducting comprehensive literature reviews on optimization algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      Implementing and testing mathematical algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      Preparing research summaries and technical documentation
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      Participating in research group meetings and discussions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Skills & Competencies */}
          <section className="fade-in">
            <h2 className="text-3xl font-semibold text-neutral-800 mb-8">Skills & Competencies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card group">
                <h3 className="text-xl font-semibold text-neutral-800 mb-6">Mathematical Skills</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-700">Discrete Mathematics</span>
                      <span className="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Advanced</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-700">Optimization Theory</span>
                      <span className="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Intermediate</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-700">Linear Algebra</span>
                      <span className="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Advanced</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card group">
                <h3 className="text-xl font-semibold text-neutral-800 mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-700">Python</span>
                      <span className="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Intermediate</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-700">LaTeX</span>
                      <span className="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Advanced</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-700">MATLAB</span>
                      <span className="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Intermediate</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Development */}
          <section className="fade-in">
            <h2 className="text-3xl font-semibold text-neutral-800 mb-8">Professional Development</h2>
            <div className="card group">
              <h3 className="text-xl font-semibold text-neutral-800 mb-6">Workshops & Training</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4 text-neutral-700">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">Graduate Student Teaching Workshop</span>
                      <span className="block text-sm text-neutral-600">2023</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">Mathematical Research Methods Seminar</span>
                      <span className="block text-sm text-neutral-600">2023</span>
                    </div>
                  </li>
                </ul>
                <ul className="space-y-4 text-neutral-700">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">Academic Writing for Mathematics</span>
                      <span className="block text-sm text-neutral-600">2023</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Experience