import { useRef } from 'react';
import { useButton, type AriaButtonProps } from '@react-aria/button';
import { useHover, useFocusVisible } from '@react-aria/interactions';

interface AnimatedButtonProps extends AriaButtonProps {
  color?: string | undefined;
  className?: string | undefined;
}

export default function AnimatedButton(props: AnimatedButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  const { color, children, className } = props;
  const { hoverProps, isHovered } = useHover({});
  const { isFocusVisible } = useFocusVisible({});

  return (
    <button
      ref={ref}
      {...hoverProps}
      {...buttonProps}
      className={`
      ${className} overflow-hidden border-2
      border-[#000] dark:border-[#fff]
      ${!isFocusVisible ? 'outline-none' : ''}
    `}
    >
      <div className="grid grid-cols-1">
        <span
          aria-hidden="true"
          className={`
          row-start-1 col-start-1 pointer-events-none
          transition-transform duration-200 ease-in-out
           ${color ? color : 'bg-fglight dark:bg-fgdark'}
           ${
             isHovered || isPressed
               ? '-translate-x-0 scale-x-110'
               : '-translate-x-full'
           }
          `}
        ></span>
        <p
          className={`
        z-10 row-start-1 col-start-1 px-4
        transition-color duration-200
        ${isHovered || isPressed ? 'text-fgdark dark:text-fglight' : ''}
        ${isHovered || isPressed ? 'scale-x-110' : ''}
        `}
        >
          {children}
        </p>
      </div>
    </button>
  );
}
