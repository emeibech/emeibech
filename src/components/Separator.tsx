interface SeparatorProps {
  orientation?: 'vertical' | 'horizontal' | undefined;
  className?: string | undefined;
  decorative?: boolean | undefined;
}

const orientations = {
  vertical: 'w-0.5 h-full',
  horizontal: 'h-0.5 w-full',
};

export default function Separator({
  orientation = 'horizontal',
  className,
  decorative,
}: SeparatorProps) {
  return (
    <div
      role={!decorative ? 'separator' : undefined}
      aria-hidden={decorative === true}
      aria-orientation={!decorative ? orientation : undefined}
      className={`
      ${orientations[orientation]} 
      ${className}
      bg-fglight dark:bg-fgdark
      `}
    ></div>
  );
}
