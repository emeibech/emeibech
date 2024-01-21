import ReactPlayer from 'react-player/lazy';
import StyledHeading from './StyledHeading';

type Technologies =
  | 'react'
  | 'tailwind'
  | 'redux'
  | 'nodejs'
  | 'express'
  | 'postgres'
  | 'vite'
  | 'vanilla js';

interface ProjectProps {
  name: string;
  imgSrc: string;
  demoUrl: string;
  technologies: Technologies[];
}

export default function Project({ imgSrc, demoUrl, name }: ProjectProps) {
  return (
    <div className="">
      <article className="svh items-center grid grid-cols-2 border">
        <img src={imgSrc} alt={name} height="574" width="281" />

        <div>
          <StyledHeading placement="left">
            <h4 className="fluidtext-lg px-4">{name}</h4>
          </StyledHeading>
        </div>
      </article>

      <article className="border">
        <ReactPlayer
          url={demoUrl}
          width={'min(90vw, 960px)'}
          height={'min(50vw, 490px)'}
          controls
        />
      </article>
    </div>
  );
}
