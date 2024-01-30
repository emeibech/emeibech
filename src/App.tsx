import './App.css';
import AnimatedButton from './components/AnimatedButton';
import Project from './components/Project';
import StyledHeading from './components/StyledHeading';
import aiHome from './imgs/ai-home.jpeg';
import aiLighthouseDark from './imgs/ai-lighthouse-dark.png';
import aiLighthouseLight from './imgs/ai-lighthouse-light.png';
import weatherHome from './imgs/weather-home.jpeg';
import weatherLighthouseLight from './imgs/weather-lighthouse-light.png';
import weatherLighthouseDark from './imgs/weather-lighthouse-dark.png';
import ambienceHome from './imgs/ambience-home.jpeg';
import ambienceLighthouseLight from './imgs/ambience-lighthouse-light.png';
import ambienceLighthouseDark from './imgs/ambience-lighthouse-dark.png';

const theme = 'dark';

function App() {
  return (
    <div
      className={`
      bg-bglight dark:bg-bgdark 
      text-fglight dark:text-fgdark
    `}
    >
      <main className="px-4 mb-16 lg:mb-32">
        <section className="svh grid place-content-center gap-8">
          <div
            className={`
            cursor-default font-medium flex flex-col px-4 text-center
          `}
          >
            <h1
              className="fluidtext-4xl animate-fadein"
              aria-label="Mark Anthony Bechayda"
            >
              Mark Anthony Bechayda
            </h1>
            <h2
              aria-label="Full-stack Web Developer"
              className={`
              fluidtext-5xl animate-fadein
            text-accentlight dark:text-accentdark
            `}
            >
              Full-stack Web Developer
            </h2>
          </div>

          <div className="flex gap-8 justify-center animate-fadein">
            <AnimatedButton className="fluidtext-base px-8 py-2">
              <a href="#projects">Projects</a>
            </AnimatedButton>
            <AnimatedButton className="fluidtext-base px-8 py-2">
              <a href="#">Resume</a>
            </AnimatedButton>
          </div>
        </section>

        <section id="projects" className="grid justify-center mt-20">
          <StyledHeading className="min-w-[min(80vw,_960px)]">
            <h3
              className={`
              fluidtext-3xl px-4 sm:px-10
          `}
            >
              Projects
            </h3>
          </StyledHeading>

          <div className="flex flex-col gap-16 md:gap-40">
            <Project
              name="emeibech ai"
              imgSrc={aiHome}
              lighthouseUrl={
                theme === 'dark' ? aiLighthouseDark : aiLighthouseLight
              }
              demoUrl="https://www.youtube.com/watch?v=gNrKtW4pLao"
              technologies={[
                'react',
                'tailwind',
                'redux',
                'typescript',
                'express',
                'postgres',
                'vite',
                'nginx',
              ]}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.`}
            />

            <Project
              name="ambience asmr"
              imgSrc={ambienceHome}
              lighthouseUrl={
                theme === 'dark'
                  ? ambienceLighthouseDark
                  : ambienceLighthouseLight
              }
              technologies={['react', 'tailwind', 'typescript', 'vite']}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.`}
            />

            <Project
              name="emeibech weather"
              imgSrc={weatherHome}
              lighthouseUrl={
                theme === 'dark'
                  ? weatherLighthouseDark
                  : weatherLighthouseLight
              }
              technologies={['vanilla js', 'tailwind', 'vite', 'nginx']}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.`}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
