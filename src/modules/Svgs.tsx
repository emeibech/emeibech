import type { SVGAttributes } from 'react';

export function SunIcon(props: SVGAttributes<HTMLOrSVGElement>) {
  const { height, width, fill } = props;
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height={height ?? '20px'}
      width={width ?? '20px'}
      fill={fill}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export function MoonIcon(props: SVGAttributes<HTMLOrSVGElement>) {
  const { height, width, fill } = props;

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height={height ?? '20px'}
      width={width ?? '20px'}
      fill={fill}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}
