import ReactPlayer from 'react-player/lazy';
import StyledHeading from './StyledHeading';
import { generateKeys } from '../utils';
import ButtonLink from './ButtonLink';

type Technologies =
  | 'react'
  | 'tailwind'
  | 'redux'
  | 'nodejs'
  | 'express'
  | 'postgres'
  | 'vite'
  | 'vanilla js'
  | 'nginx'
  | 'typescript';

interface ProjectProps {
  name: string;
  imgSrc: string;
  technologies: Technologies[];
  description: string;
  demoUrl?: string | undefined;
  lighthouseUrl?: string | undefined;
  hrefs: [string, string];
}

export default function Project({
  imgSrc,
  demoUrl,
  name,
  technologies,
  description,
  lighthouseUrl,
  hrefs,
}: ProjectProps) {
  return (
    <div className="max-w-[1280px] flex flex-col gap-16 md:gap-40">
      <article
        className={`
      grid grid-cols-1 md:grid-cols-[30%_1fr] mt-16
      gap-16 md:gap-[max(4vw,_4px)]
      `}
      >
        <img
          aria-label="Image of emeibech ai homepage on mobile"
          src={imgSrc}
          alt={name}
          height="574"
          width="281"
          className={`
          place-self-center md:self-center 
          rounded-lg dropshadow
          `}
        />

        <div>
          <StyledHeading placement="left">
            <h4 className="fluidtext-2xl px-4">{name}</h4>
          </StyledHeading>

          <ul
            className={`
          grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))]
          xs:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))]
          mt-2 gap-y-2 gap-x-[max(1vw,_1rem)]
          `}
          >
            {generateTechListJsx(technologies)}
          </ul>

          <div className="mt-8">
            <p className="fluidtext-base">{description}</p>
          </div>

          {lighthouseUrl && (
            <div className="mt-8 grid place-content-center">
              <img
                src={lighthouseUrl}
                width="569px"
                height="187px"
                className="rounded-lg dropshadow"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-8 mt-8 px-[max(6vw,_1rem)]">
            <ButtonLink
              className="fluidtext-lg py-2"
              href={hrefs[0]}
              target="_blank"
            >
              Code
            </ButtonLink>
            <ButtonLink
              className="fluidtext-lg py-2"
              href={hrefs[1]}
              target="_blank"
            >
              Live
            </ButtonLink>
          </div>
        </div>
      </article>

      {demoUrl && (
        <article className="grid place-content-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <StyledHeading placement="left">
              <h4 className="fluidtext-lg px-4">emeibech ai video demo</h4>
            </StyledHeading>
          </div>
          <ReactPlayer
            url={demoUrl}
            width={'min(90vw, 1280px)'}
            height={'min(50vw, 653px)'}
            controls
            style={{ marginTop: '1rem' }}
          />
        </article>
      )}
    </div>
  );
}

function generateTechListJsx(technologies: Technologies[]) {
  const keys = generateKeys(technologies);
  const buttons = technologies.map((tech, index) => {
    return (
      <li
        key={keys[index]}
        className={`
        fluidtext-sm text-center rounded-2xl
        bg-accentlight text-fgdark opacity-90
        dark:bg-fgdark dark:text-fglight
        `}
      >
        {tech}
      </li>
    );
  });

  return buttons;
}
