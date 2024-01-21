import { ReactNode } from 'react';
import Separator from './Separator';

interface StyledHeadingProps {
  children: ReactNode;
  className?: string | undefined;
  placement?: 'left' | 'right' | 'middle' | undefined;
}

const placements = {
  left: 'place-self-start ml-8',
  right: 'place-self-end mr-8',
  middle: '',
};

export default function StyledHeading({
  children,
  className,
  placement = 'middle',
}: StyledHeadingProps) {
  return (
    <div className={`${className} grid grid-cols-1 place-items-center`}>
      <Separator className="col-start-1 row-start-1" />
      <div
        aria-hidden="true"
        className={`
        ${placements[placement]}
        col-start-1 row-start-1 bg-bglight dark:bg-bgdark
        `}
      >
        {children}
      </div>
    </div>
  );
}
