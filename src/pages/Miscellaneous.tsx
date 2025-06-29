import React from 'react'

const Miscellaneous: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="section-title">Beyond Academics</h1> {/* Changed page title */}
        
        <div className="space-y-8">
          {/* My World Outside Studies */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">My World Outside Studies</h2>
            <div className="card group">
              <p className="text-neutral-700 mb-4">
                While my academic pursuits in discrete optimization and polytope theory consume a significant
                portion of my time, my interests span a much wider spectrum. I find immense joy in
                exploring subjects that enrich my understanding of the world and challenge my perspectives.
              </p>
              <p className="text-neutral-700 mb-4">
                My curiosity often leads me to delve into topics like **aviation and aerospace technology**,
                the intricate dynamics of **international affairs and global politics**, and the fascinating evolution
                of **military doctrines and history**. I also dedicate time to **environmental sciences and sustainability**,
                recognizing the critical importance of these areas. Occasionally, I'll deep-dive into the nuances of
                **global economics and market dynamics**, appreciating the interconnectedness of it all.
              </p>
              <p className="text-neutral-700 mb-4">
                For recreation, I enjoy the intellectual sparring of **rapid and blitz chess on chess.com**, though I must admit I'm no grandmaster.
                I used to be quite the athlete, even a **competitive swimmer** in my younger days, but nowadays, my physical routine is less about competition and
                more about maintaining **regular fitness and workout routines** – definitely no bodybuilder aspirations here! My interest in
                **cricket**, while once strong, is also fading fast, but I can still appreciate a good match.
              </p>
              <p className="text-neutral-700">
                Above all, I am a creature of habit. I value routines and find comfort in their predictability,
                extending even to my food choices. This appreciation for repetitiveness helps anchor my day-to-day life.
              </p>
            </div>
          </section>

          {/* Entertainment & Wellness - Slightly re-arranged for logical grouping */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Leisure & Well-being</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card group">
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Media & Recreation</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comedy shows and stand-up performances
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
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Mind & Body Practices</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hiking and outdoor exploration
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
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Philosophy & Expression</h2>
            <div className="space-y-6">
              <div className="card group">
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">My Philosophical Stance</h3>
                <p className="text-neutral-700 mb-4">
                  Coming from a family that follows **Advaita Vedanta**, my life's goal is to align my actions
                  and understanding with its tenets. I have no qualms in admitting my imperfections, but I am
                  ever aware of this fundamental goal, which continually inspires me to grow and change.
                  While I haven't formally had a guru, my parents and extended family are my greatest role models
                  and my first gurus, whose wisdom continues to guide me.
                </p>
                <p className="text-neutral-700">
                  Naturally, my ideological views lean unapologetically towards conservatism. However, this conviction
                  is always balanced by a deep respect for the **choice and will of individuals** above anything else.
                  I believe in thoughtful discourse and the power of well-reasoned arguments to bridge different
                  perspectives and foster understanding.
                </p>
              </div>

              <div className="card group">
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Writing & Communication</h3>
                <p className="text-neutral-700 mb-4">
                  In the past, I had the good fortune to write from time to time on a wide variety of topics and
                  engage with wonderful people. You can find my contributions to PSG Tech's online student
                  magazine, <em>The Bridge</em>,{' '}
                  <a 
                    href="https://thebridge.psgtech.ac.in/author/nanakrish/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                  >
                    here
                  </a>.
                </p>
                <p className="text-neutral-700">
                  I consider myself rather indolent, thus reserving my very best for when I am backed into a corner,
                  as a matter of saying. This approach, while perhaps unconventional, has often yielded my most focused
                  and creative work.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Contact Me</h2>
            <div className="card group">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">Academic Inquiries</h3>
                  <div className="space-y-2 text-neutral-700">
                    <p>
                      <span className="font-medium">Email:</span> <a href="mailto:krishna_narayanan@sfu.ca" className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200">krishna_narayanan@sfu.ca</a>
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
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">General & Personal Inquiries</h3>
                  <div className="space-y-2 text-neutral-700">
                    <p>
                      <span className="font-medium">Email:</span> <a href="mailto:nkrishna0602@gmail.com" className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200">nkrishna0602@gmail.com</a>
                    </p>
                    <p className="mb-3">
                      Feel free to reach out for discussions about anything from shared intellectual interests
                      to philosophical perspectives, or just to connect. I enjoy engaging with people
                      who share similar interests or offer different viewpoints.
                    </p>
                    <p className="text-sm text-neutral-600">
                      I'm always open to meaningful conversations and learning from others' experiences.
                    </p>
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

export default Miscellaneous