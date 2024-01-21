import './App.css';
import AnimatedButton from './components/AnimatedButton';
import Project from './components/Project';
import StyledHeading from './components/StyledHeading';
import aiHome from './imgs/ai-home.jpeg';

function App() {
  return (
    <div
      className={`
      bg-bglight dark:bg-bgdark 
      text-fglight dark:text-fgdark
    `}
    >
      <main>
        <section className="svh grid place-content-center gap-8">
          <div
            className={`
            cursor-default font-medium flex flex-col px-4 text-center
          `}
          >
            <h1
              className="fluidtext-3xl animate-fadein"
              aria-label="Mark Anthony Bechayda"
            >
              Mark Anthony Bechayda
            </h1>
            <h2
              aria-label="Full-stack Web Developer"
              className={`
              fluidtext-4xl animate-fadein
            text-accentlight dark:text-accentdark
            `}
            >
              Full-stack Web Developer
            </h2>
          </div>

          <div className="flex gap-8 justify-center animate-fadein">
            <AnimatedButton className="fluidtext-base">
              <a href="#projects">Projects</a>
            </AnimatedButton>
            <AnimatedButton className="fluidtext-base">Resume</AnimatedButton>
          </div>
        </section>

        <section id="projects" className="grid justify-center mt-20">
          <StyledHeading className="min-w-[min(80vw,_960px)]">
            <h3
              className={`
              fluidtext-2xl px-4 sm:px-10
          `}
            >
              Projects
            </h3>
          </StyledHeading>

          <Project
            name="emeibech ai"
            imgSrc={aiHome}
            demoUrl="https://www.youtube.com/watch?v=gNrKtW4pLao"
            technologies={[
              'react',
              'tailwind',
              'redux',
              'nodejs',
              'express',
              'postgres',
              'vite',
            ]}
          />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
