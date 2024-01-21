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
  console.log(orientation);
  return (
    <div
      aria-hidden={decorative === true}
      aria-role={!decorative ? 'separator' : undefined}
      aria-orientation={!decorative ? orientation : undefined}
      className={`
      ${orientations[orientation]} 
      ${className}
      bg-fglight dark:bg-fgdark
      `}
    ></div>
  );
}
