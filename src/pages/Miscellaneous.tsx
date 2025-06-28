import React from 'react'

const Miscellaneous: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="section-title">Interests</h1>
        
        <div className="space-y-8">
          {/* Personal Interests */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Personal Interests</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card group">
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Academic Interests</h3>
                <p className="text-neutral-700 mb-4">
                  Beyond my primary focus on discrete optimization and polytope theory, I enjoy exploring 
                  connections between different areas of mathematics and their real-world applications.
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mathematical puzzles and algorithmic problem-solving
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    History of mathematics and computer science
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mathematical education and pedagogy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Interdisciplinary applications of optimization theory
                  </li>
                </ul>
              </div>

              <div className="card group">
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Non-Academic Interests</h3>
                <p className="text-neutral-700 mb-4">
                  I have a wide range of interests that help me maintain perspective and foster 
                  creative thinking beyond my academic pursuits.
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Aviation and aerospace technology
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    International affairs and global politics
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    History and historical analysis
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Environmental sciences and sustainability
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Global economics and market dynamics
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Entertainment & Recreation */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Entertainment & Recreation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card group">
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Media & Entertainment</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comedy shows and stand-up performances
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Cricket matches and sports analysis
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Shounen anime and manga
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Documentary films on various topics
                  </li>
                </ul>
              </div>

              <div className="card group">
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Physical & Mental Wellness</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Regular fitness and workout routines
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hiking and outdoor exploration
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Chess and strategic board games
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Meditation and mindfulness practices
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Philosophy & Writing */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Philosophy & Writing</h2>
            <div className="space-y-6">
              <div className="card group">
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Philosophical Studies</h3>
                <p className="text-neutral-700 mb-4">
                  I find great value in studying philosophical traditions, particularly those that 
                  offer frameworks for understanding consciousness, reality, and human experience.
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Advaita Vedanta and non-dualistic philosophy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comparative philosophy and cross-cultural perspectives
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Philosophy of mind and consciousness studies
                  </li>
                </ul>
              </div>

              <div className="card group">
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Writing & Communication</h3>
                <p className="text-neutral-700 mb-4">
                  I have had the opportunity to write on various topics and engage with diverse audiences 
                  through different platforms, which has enriched my perspective and communication skills.
                </p>
                <div className="space-y-3">
                  <p className="text-neutral-700">
                    <span className="font-medium">Previous Work:</span> Contributed articles to PSG Tech's online 
                    student magazine, <em>The Bridge</em>, covering a wide range of topics from technology 
                    to social issues.
                  </p>
                  <p className="text-neutral-700">
                    <span className="font-medium">Approach:</span> I believe in thoughtful discourse and 
                    the power of well-reasoned arguments to bridge different perspectives and foster understanding.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Philosophy */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Personal Philosophy</h2>
            <div className="card group">
              <p className="text-neutral-700 mb-4">
                I consider myself someone who reserves their very best efforts for when truly challenged, 
                finding that pressure often brings out the most focused and creative work. This approach 
                has served me well in both academic and personal pursuits.
              </p>
              <p className="text-neutral-700">
                I believe that maintaining diverse interests and staying curious about the world beyond 
                one's immediate field of study is essential for both personal growth and academic excellence. 
                The connections between seemingly unrelated fields often yield the most interesting insights.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Contact</h2>
            <div className="card group">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">Academic Contact</h3>
                  <div className="space-y-2 text-neutral-700">
                    <p>
                      <span className="font-medium">Email:</span> krishna.narayanan@sfu.ca
                    </p>
                    <p>
                      <span className="font-medium">Institution:</span> Simon Fraser University
                    </p>
                    <p>
                      <span className="font-medium">Department:</span> Mathematics
                    </p>
                    <p>
                      <span className="font-medium">Location:</span> Burnaby, BC, Canada
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">General Inquiries</h3>
                  <p className="text-neutral-700 mb-3">
                    Feel free to reach out for discussions about research, academic collaboration, 
                    or any of the topics mentioned on this page. I enjoy engaging with people 
                    who share similar interests or different perspectives.
                  </p>
                  <p className="text-sm text-neutral-600">
                    I'm always open to meaningful conversations and learning from others' experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Miscellaneous