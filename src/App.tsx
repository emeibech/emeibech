import './App.css';
import AnimatedButton from './components/AnimatedButton';

function App() {
  return (
    <div
      className={`
      min-h-screen bg-bglight dark:bg-bgdark 
      text-fglight dark:text-fgdark
    `}
    >
      <main className="min-h-screen grid place-content-center">
        <div
          className={`
          cursor-default font-medium flex flex-col px-4
          text-center md:text-start
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
            fluidtext-2xl animate-fadein
            text-accentlight dark:text-accentdark
          `}
          >
            Full-stack Web Developer
          </h2>
        </div>

        <div className="flex justify-center mt-4 animate-fadein">
          <AnimatedButton className="fluidtext-base">Projects</AnimatedButton>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
