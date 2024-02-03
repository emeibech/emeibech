import { useRef } from 'react';
import { useButton, type AriaButtonProps } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

interface AnimatedButtonProps extends AriaButtonProps {
  color?: string;
  className?: string;
  disabled?: boolean;
}

export default function AnimatedButton(props: AnimatedButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  const { color, children, className, disabled } = props;
  const { hoverProps, isHovered } = useHover({});
  const { isFocusVisible, focusProps } = useFocusRing();
  const allProps = mergeProps(focusProps, hoverProps, buttonProps);

  return (
    <button
      disabled={disabled ?? false}
      ref={ref}
      {...allProps}
      className={`
      overflow-hidden border-2
      ${!isFocusVisible ? 'outline-none' : ''}
      border-fglight dark:border-fgdark rounded-sm
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
        z-10 row-start-1 col-start-1
        transition-color duration-200
        ${className}
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
