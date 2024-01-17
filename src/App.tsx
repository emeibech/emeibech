import './App.css';

function App() {
  return (
    <div
      className={`min-h-screen bg-bglight dark:bg-bgdark
       text-fglight dark:text-fgdark`}
    >
      <main className="min-h-screen grid place-content-center">
        <div
          className={`
          cursor-default font-medium flex flex-col gap-2 px-4
          text-center md:text-start
        `}
        >
          <h1 className="fluidtext-4xl">Mark Anthony Bechayda</h1>
          <h2 className="fluidtext-2xl text-[#b94062] dark:text-[#e662bf]">
            Fullstack Web Developer
          </h2>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
