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
import ButtonLink from './components/ButtonLink';
import { Button } from 'react-aria-components';
import { MoonIcon, SunIcon } from './modules/Svgs';
import { useRef, useState } from 'react';

const resumeUrl = import.meta.env.VITE_RESUME_URL;
const githubUrl = import.meta.env.VITE_GITHUB_URL;
fetch('https://server.emeibech.com');

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const themeTogglerStyle = useRef('animate-fadein');

  return (
    <div
      className={`
      bg-bglight dark:bg-bgdark 
      text-fglight dark:text-fgdark
    `}
    >
      <main className="px-4 pb-16 lg:pb-32 relative">
        <div className="absolute right-8 top-8 md:right-12 md:top-12">
          <Button
            aria-label="Theme toggler"
            aria-pressed={theme === 'light'}
            className={({ isFocusVisible }) => `
              "border-none"
              ${!isFocusVisible ? 'outline-none' : ''}
            `}
            onPress={() => {
              const newTheme = theme === 'dark' ? 'light' : 'dark';
              setTheme(newTheme);
              themeTogglerStyle.current = '';
              document.body.className = newTheme;
            }}
          >
            {theme === 'dark' && (
              <MoonIcon
                height="32px"
                width="32px"
                className={themeTogglerStyle.current}
              />
            )}
            {theme === 'light' && <SunIcon height="32px" width="32px" />}
          </Button>
        </div>

        <section className="svh grid place-content-center gap-8">
          <div
            className={`
            cursor-default font-medium flex flex-col px-4 text-center
            mt-20 sm:mt-0
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

            <p className="text-lg cursor-text opacity-90 animate-fadein">
              Contact me at{' '}
              <em className="text-cyan-700 dark:text-cyan-300">
                work.emeibech@gmail.com
              </em>
            </p>
          </div>

          <div
            className={`
            grid animate-fadein grid-cols-1 sm:grid-cols-3
            gap-4 md:gap-12 px-4 md:px-16
          `}
          >
            <AnimatedButton
              className="fluidtext-base px-8 py-2"
              onPress={() => {
                const project = document.getElementById('projects');
                project?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projects
            </AnimatedButton>
            <ButtonLink
              href={resumeUrl}
              target="_blank"
              className="fluidtext-base px-8 py-2"
            >
              Resume
            </ButtonLink>
            <ButtonLink
              href={githubUrl}
              target="_blank"
              className="fluidtext-base px-8 py-2"
            >
              GitHub
            </ButtonLink>
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
              hrefs={[
                'https://github.com/emeibech/ai-tools',
                'https://ai.emeibech.com',
              ]}
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
              description={`
              A full-stack application featuring a collection of AI-powered tools 
              such as Coding Assistant, Tone Changer, Story Generator, and more. 
              Tools with chat interfaces come with conversation history so you can 
              review chats at a later time or continue it with another related 
              query, just like ChatGPT. Accounts have rate limits, too, just like 
              ChatGPT. Okay, I'll be honest. I just made this app to avoid paying 
              the monthly subscription to ChatGPT Plus. Using my app, I pay half a 
              dollar a month and I get to make specialized tools that removes the 
              need for repeated prompting. Moreover, I get to tinker with the 
              models' parameters to get more consistent results.
              `}
            />

            <Project
              name="ambience asmr"
              imgSrc={ambienceHome}
              hrefs={[
                'https://github.com/emeibech/ambience',
                'https://ambience.emeibech.com',
              ]}
              lighthouseUrl={
                theme === 'dark'
                  ? ambienceLighthouseDark
                  : ambienceLighthouseLight
              }
              technologies={['react', 'tailwind', 'typescript', 'vite']}
              description={`
              A simple web application that provides a variety of sounds and imagery 
              to help create the illusion that you're touching grass. Yeah, I know, 
              you can just youtube “forest ambience” or something, but I like to 
              tinker with the levels of sounds individually, and this app provides 
              that capability. In addition, it also saves active tab and volume 
              levels for all the sounds to localStorage so you don't have to adjust 
              them on your next visit.
              `}
            />

            <Project
              name="emeibech weather"
              imgSrc={weatherHome}
              hrefs={[
                'https://github.com/emeibech/weather-fe',
                'https://weather.emeibech.com',
              ]}
              lighthouseUrl={
                theme === 'dark'
                  ? weatherLighthouseDark
                  : weatherLighthouseLight
              }
              technologies={['vanilla js', 'tailwind', 'vite', 'nginx']}
              description={`
              A weather app where you don’t need to navigate a complicated maze of 
              a UI and make three server requests just to get the information you 
              want. As soon as I learned about OpenWeather API, I knew I wanted to 
              make a weather app with minimal UI and one where the pertinent 
              information is front and center. On initial load, the app 
              approximates your current location based on your IP address, and 
              then BAM! Everything a non-meteorologist would want to know about the 
              weather is right there.
              `}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
