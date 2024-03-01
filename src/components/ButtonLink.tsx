import { useLink, type AriaLinkOptions } from '@react-aria/link';
import { useRef, type ReactNode } from 'react';
import { useHover } from '@react-aria/interactions';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';

export interface LinkProps extends AriaLinkOptions {
  color?: string;
  className?: string;
  children: ReactNode;
}

/* Why ButtonLink if it looks exactly the same as the AnimatedButton?
Because this is the semantically correct element. Putting link inside button doesn't
do it either as they're both focusable elements and can potentially cause confusion
to someone who relies on screen reader */
export default function ButtonLink(props: LinkProps) {
  const ref = useRef(null);
  const { linkProps, isPressed } = useLink(props, ref);
  const { hoverProps, isHovered } = useHover({});
  const { isFocusVisible, focusProps } = useFocusRing();
  const allProps = mergeProps(focusProps, hoverProps, linkProps);
  const { color, children, className, href } = props;

  return (
    <a
      ref={ref}
      href={href}
      {...allProps}
      className={`
      overflow-hidden border-2 border-fglight dark:border-fgdark
      ${!isFocusVisible ? 'outline-none' : ''}
      rounded-sm text-center cursor-pointer
    `}
    >
      <div className="grid grid-cols-1">
        <span
          aria-hidden="true"
          className={`
          row-start-1 col-start-1 pointer-events-none scale-110
          transition-transform duration-200 ease-in-out
           ${color ? color : 'bg-fglight dark:bg-fgdark'}
           ${isHovered || isPressed ? '-translate-x-0' : '-translate-x-[105%]'}
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
    </a>
  );
}
