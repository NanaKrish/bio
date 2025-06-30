import React from 'react';

const Miscellaneous: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-neutral-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-800 mb-4 text-center relative z-10">Beyond Academics</h1>
        {/* Adjusted placement, size, and centering for Bharatiya */}
        <h2 className="text-2xl sm:text-3xl text-neutral-700 font-semibold mb-12 text-center">A Proud <span className="text-neutral-900">भारतीय</span></h2>

        <div className="space-y-20"> {/* Increased overall space between sections significantly */}

          {/* Section 1: My World Outside Studies - Most varied section with multiple distinct sub-blocks */}
          <section className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-neutral-200"> {/* More rounded, more padding */}
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 pb-3 border-b-2 border-primary-300">My World Outside Studies</h2>

            <p className="text-neutral-700 leading-relaxed text-lg mb-10"> {/* Slightly larger intro text, more margin */}
              While my academic pursuits in discrete optimization and polytope theory consume a significant portion of my time,
              my interests span a much wider spectrum. I find immense joy in exploring subjects that enrich my understanding
              of the world and challenge my perspectives.
            </p>

            {/* Intellectual Passions - Stronger visual separation with two-tone background */}
            <div className="grid md:grid-cols-2 gap-8 mb-12"> {/* Larger gap, more margin */}
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200 shadow-lg"> {/* Stronger shadow, more rounded, more padding */}
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Global & Historical Dynamics</h3> {/* Stronger heading for sub-section */}
                <p className="text-neutral-700 leading-relaxed mb-4">
                  My curiosity often leads me to delve into topics like Aviation — I'm a bit of an "av-geek" in general, having had the good fortune to travel a fair bit at such a young age.
                  This interest extends to International Affairs and global politics, as well as the fascinating evolution of Military Doctrines and History.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  These passions were deeply cultivated over almost nine years of participating in Model UN debates, where I had a near-perfect award record during my college days. My debate style evolved considerably during this period, moving from rhetoric to arguments driven by facts and precedence. While powerful, this shift also meant I couldn't always be up to the task with such a demanding approach. These events were pivotal in shaping my understanding of complex global dynamics.
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 shadow-lg"> {/* Different accent color, more rounded, more padding */}
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Contemporary & Personal Interests</h3> {/* Stronger heading for sub-section */}
                <p className="text-neutral-700 leading-relaxed mb-4">
                  I also dedicate time to Environmental Sciences and sustainability, recognizing their critical importance.
                  Occasionally, I'll deep-dive into the nuances of global economics and market dynamics, appreciating their interconnectedness.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  My interest in reading doesn't always live up to my ambitious bucket list, but I genuinely try to make an effort where and when I can.
                </p>
              </div>
            </div>

            {/* Recreation & Personal Habits - Distinct, large, potentially offset block */}
            <div className="bg-neutral-100 rounded-3xl p-8 shadow-inner border border-neutral-300 md:ml-16"> {/* More padding, more rounded, larger offset */}
                <h3 className="text-2xl font-bold text-neutral-800 mb-5 pb-3 border-b border-neutral-300">Recreation & Personal Habits</h3>
                <p className="text-neutral-700 leading-relaxed mb-5">
                  For recreation, I enjoy the intellectual sparring of rapid and blitz chess on chess.com,
                  though I must admit I'm no grandmaster; far from it! I used to be something of an athlete, even a competitive swimmer in my younger days,
                  but now, my physical routine is less about competition and more about maintaining regular fitness and workout routines &mdash; definitely no bodybuilder aspirations here!
                  My interest in cricket, while once strong, is also fading fast, but I can still appreciate a good match.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-5">
                  I also love driving, especially on the more unpredictable Indian roads and highways. Driving overseas, where people follow rules to the T, can sometimes leave me feeling bored, and perhaps even sleepy, given my native driving experiences.
                </p>
                <p className="text-neutral-700 leading-relaxed text-base italic text-neutral-600 border-t pt-4 mt-6 border-neutral-200"> {/* Subtle top border, more padding */}
                  Above all, I am a creature of habit. I value routines and find comfort in their predictability, extending even to my food choices.
                  This appreciation for repetitiveness helps anchor my day-to-day life.
                </p>
            </div>
          </section>

          {/* Section 2: Hobbies & Interests - Changed from black to light green background and updated text colors */}
          <section className="bg-green-50 rounded-3xl shadow-2xl p-6 sm:p-10 border border-green-200">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 pb-3 border-b-2 border-green-500">Other activities</h2> {/* Changed title and text color */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-neutral-700 mb-4">Media & Entertainment</h3> {/* Changed text color */}
                <ul className="space-y-4 text-neutral-700 list-disc list-inside pl-4 text-lg">
                  <li>
                    Comedy sequences from just about any source, as long as it makes me laugh out loud (which isn't so hard, so bad jokes are welcome).
                  </li>
                  <li>
                    Shounen anime and manga
                  </li>
                  <li>
                    Interviews, podcasts and everything else
                  </li>
                </ul>
              </div>
              <div className="md:border-l-2 md:border-green-400 md:pl-10">
                 <h3 className="text-2xl font-semibold text-neutral-700 mb-4">A Quiet Pursuit</h3> {/* Changed text color */}
                 <p className="text-neutral-700 leading-relaxed text-lg">
                   Though I have failed in the past and continue to face constraints regularly, efforts to keep up with my नित्य कर्म - my daily duties encompasses any and all notions of mindfulness, meditation, breathing exercises etc. Therefore, that is my quiet pursuit.
                 </p>
              </div>
            </div>
          </section>

          {/* Section 3: Philosophy & Expression - Different background color again */}
          <section className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-neutral-200">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 pb-3 border-b-2 border-primary-300">Philosophy & Expression</h2>
            <div className="space-y-12"> {/* Increased space */}

              <div className="border-l-4 border-amber-500 pl-6 py-3 bg-amber-50 rounded-r-2xl shadow-md"> {/* Stronger emphasis, more padding, more rounded */}
                <h3 className="text-2xl font-semibold text-neutral-800 mb-4">My Philosophical Stance</h3>
                <p className="text-neutral-700 leading-relaxed mb-5">
                  Coming from a family that follows Advaita Vedanta, my life's goal is to align my actions
                  and understanding with its tenets. I have no qualms in admitting my imperfections and hypocrisies vis a vis my ideals, but I am
                  ever aware of this fundamental goal, which continually inspires me to grow and change.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-5">
                  While I haven't formally had a guru, my parents and extended family are my greatest role models
                  and my first gurus, whose wisdom continues to guide me.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Naturally, my ideological views lean unapologetically towards conservatism. However, this conviction
                  is always balanced by a deep respect for the choice and will of individuals above anything else. So, even if you're very dear to me, you're very <em>unlikely</em> to hear my unfiltered opinions.
                  That said, I still believe in thoughtful discourse and the power of well-reasoned arguments to bridge different
                  perspectives and foster understanding.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-neutral-800 mb-5 pb-3 border-b border-neutral-300">Writing & Communication</h3>
                <p className="text-neutral-700 leading-relaxed mb-5">
                  In the past, I had the good fortune to write from time to time on a wide variety of topics and
                  engage with some wonderful people. You can find my contributions to PSG Tech's online student
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
                <p className="text-neutral-700 leading-relaxed">
                  I consider myself rather indolent, thus reserving my very best for when I am backed into a corner,
                  as a matter of saying. This approach, while perhaps unconventional and self-damaging, has often yielded my most focused
                  and creative work.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Connect With Me - Another distinct background */}
          <section className="bg-primary-50 rounded-3xl shadow-2xl p-6 sm:p-10 border border-primary-200"> {/* New accent background */}
            <h2 className="text-3xl font-bold text-primary-800 mb-8 pb-3 border-b-2 border-primary-500">Connect With Me</h2>
            <div className="grid md:grid-cols-2 gap-10"> {/* Increased gap */}
              <div>
                <h3 className="text-2xl font-semibold text-primary-700 mb-4">Academic Inquiries</h3>
                <div className="space-y-4 text-neutral-700"> {/* Increased space */}
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
                <h3 className="text-2xl font-semibold text-primary-700 mb-4">General & Personal Inquiries</h3>
                <div className="space-y-4 text-neutral-700"> {/* Increased space */}
                  <p>
                    <span className="font-medium">Email:</span> <a href="mailto:nkrishna0602@gmail.com" className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200">nkrishna0602@gmail.com</a>
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Feel free to reach out for discussions about anything from shared intellectual interests
                    to philosophical perspectives, or just to connect. 
                  </p>
                  <p>
                    <span className="font-medium">Social Media:</span> You can find me on various platforms, but I prefer to keep any activities minimal.
                    If you know me personally, you probably already have my handles. In any case, it's not worth listing them here.
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