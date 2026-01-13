export function SubhajitMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M 187.5 218.75 L 31.25 218.75 L 31.25 187.5 L 0 187.5 L 0 156.25 L 62.5 156.25 L 62.5 187.5 L 156.25 187.5 L 156.25 125 L 31.25 125 L 31.25 93.75 L 0 93.75 L 0 31.25 L 31.25 31.25 L 31.25 0 L 187.5 0 L 187.5 31.25 L 218.75 31.25 L 218.75 62.5 L 156.25 62.5 L 156.25 31.25 L 62.5 31.25 L 62.5 93.75 L 187.5 93.75 L 187.5 125 L 218.75 125 L 218.75 187.5 L 187.5 187.5 L 187.5 218.75 Z M 406.25 218.75 L 250 218.75 L 250 0 L 406.25 0 L 406.25 31.25 L 437.5 31.25 L 437.5 62.5 L 468.75 62.5 L 468.75 156.25 L 437.5 156.25 L 437.5 187.5 L 406.25 187.5 L 406.25 218.75 Z M 312.5 31.25 L 312.5 187.5 L 375 187.5 L 375 156.25 L 406.25 156.25 L 406.25 62.5 L 375 62.5 L 375 31.25 L 312.5 31.25 Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
