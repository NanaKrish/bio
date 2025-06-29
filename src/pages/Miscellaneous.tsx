import React from 'react';

const Miscellaneous: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10"> {/* Changed page-container to direct Tailwind */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted content-wrapper to direct Tailwind */}
        <h1 className="section-title text-4xl sm:text-5xl font-extrabold text-neutral-800 mb-12 text-center">Beyond Academics</h1> 
        
        <div className="space-y-12"> {/* Increased overall space between sections */}

          {/* Section 1: My World Outside Studies - Enhanced layout */}
          <section className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">My World Outside Studies</h2>
            
            {/* Introductory Paragraph */}
            <p className="text-neutral-700 leading-relaxed mb-6">
              While my academic pursuits in discrete optimization and polytope theory consume a significant portion of my time,
              my interests span a much wider spectrum. I find immense joy in exploring subjects that enrich my understanding
              of the world and challenge my perspectives.
            </p>

            {/* Core Intellectual Interests - Grid or list for variety */}
            <h3 className="text-xl font-semibold text-neutral-800 mb-4 border-b pb-2 border-neutral-200">Intellectual Passions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-neutral-700 mb-6">
                <p>
                    <strong className="font-bold">Aviation & Aerospace:</strong> Delving into the mechanics and future of flight.
                </p>
                <p>
                    <strong className="font-bold">International Affairs:</strong> Understanding global politics and geopolitical strategies.
                </p>
                <p>
                    <strong className="font-bold">Military Doctrines & History:</strong> The evolution of conflict and defense.
                </p>
                <p>
                    <strong className="font-bold">Environmental Sciences:</strong> Recognizing the critical importance of sustainability.
                </p>
                <p className="md:col-span-2">
                    <strong className="font-bold">Global Economics:</strong> Occasionally deep-diving into market dynamics and interconnectedness.
                </p>
            </div>
            
            {/* Recreation & Personal Habits - More narrative */}
            <h3 className="text-xl font-semibold text-neutral-800 mb-4 border-b pb-2 border-neutral-200">Recreation & Personal Habits</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              For recreation, I enjoy the intellectual sparring of <strong className="font-bold">rapid and blitz chess on chess.com</strong>,
              though I must admit I'm no grandmaster! I used to be quite the athlete, even a <strong className="font-bold">competitive swimmer</strong>
              in my younger days, but nowadays, my physical routine is less about competition and more about maintaining
              <strong className="font-bold"> regular fitness and workout routines</strong> &mdash; definitely no bodybuilder aspirations here!
              My interest in <strong className="font-bold">cricket</strong>, while once strong, is also fading fast, but I can still appreciate a good match.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Above all, I am a creature of habit. I value routines and find comfort in their predictability, extending even to my food choices.
              This appreciation for repetitiveness helps anchor my day-to-day life.
            </p>
          </section>

          {/* Section 2: Leisure & Well-being - Simplified and focused */}
          <section className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Leisure & Well-being</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Media & Recreation</h3>
                <ul className="space-y-2 text-neutral-700 list-disc list-inside pl-4"> {/* Added list styling */}
                  <li>
                    Comedy shows and stand-up performances
                  </li>
                  <li>
                    Shounen anime and manga
                  </li>
                  <li>
                    Documentary films on various topics
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Mind & Body Practices</h3>
                <ul className="space-y-2 text-neutral-700 list-disc list-inside pl-4"> {/* Added list styling */}
                  <li>
                    Meditation and mindfulness practices
                  </li>
                  <li>
                    Chess and strategic board games (Re-added here from previous discussion, if that was desired as distinct from just "playing chess")
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Philosophy & Expression - Use Blockquote more effectively */}
          <section className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Philosophy & Expression</h2>
            <div className="space-y-8"> {/* Increased space-y for internal section elements */}
              
              <div className="mb-6"> {/* Card removed, using direct padding and styling for a more integrated feel */}
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">My Philosophical Stance</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Coming from a family that follows <strong className="font-bold">Advaita Vedanta</strong>, my life's goal is to align my actions
                  and understanding with its tenets. I have no qualms in admitting my imperfections, but I am
                  ever aware of this fundamental goal, which continually inspires me to grow and change.
                </p>
                
                {/* Dedicated blockquote for emphasis */}
                <blockquote className="text-neutral-700 italic border-l-4 border-primary-500 pl-5 py-3 my-6 rounded-r-lg bg-primary-50">
                  <p className="mb-2">
                    While I haven't formally had a guru, my parents and extended family are my greatest role models
                    and my first gurus, whose wisdom continues to guide me.
                  </p>
                  <footer className="text-sm text-neutral-600">— Krishna Narayanan</footer>
                </blockquote>

                <p className="text-neutral-700 leading-relaxed">
                  Naturally, my ideological views lean unapologetically towards conservatism. However, this conviction
                  is always balanced by a deep respect for the <strong className="font-bold">choice and will of individuals</strong> above anything else.
                  I believe in thoughtful discourse and the power of well-reasoned arguments to bridge different
                  perspectives and foster understanding.
                </p>
              </div>

              <div> {/* Card removed, more integrated */}
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Writing & Communication</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  In the past, I had the good fortune to write from time to time on a wide variety of topics and
                  engage with wonderful people. You can find my contributions to PSG Tech's online student
                  magazine, <em>The Bridge</em>,{' '}
                  <a 
                    href="https://thebridge.psgtech.ac.in/author/nanakrish/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200 font-medium"
                  >
                    here
                  </a>.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  I consider myself rather indolent, thus reserving my very best for when I am backed into a corner,
                  as a matter of saying. This approach, while perhaps unconventional, has often yielded my most focused
                  and creative work.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Contact Me */}
          <section className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Connect With Me</h2>
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
                  <p className="mb-3 leading-relaxed">
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;