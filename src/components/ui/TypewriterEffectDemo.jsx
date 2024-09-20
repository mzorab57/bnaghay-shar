
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build Awesome Arch With " ,
    },
    {
      text: "'Bnaghay Shar'.",
      className: "text-blue-500 ",
    },
  ];
  return (
    (<TypewriterEffectSmooth words={words} />)
  );
}
