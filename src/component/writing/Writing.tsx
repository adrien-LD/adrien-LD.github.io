import { useEffect, useRef } from "react";

import Typed, { TypedOptions } from "typed.js";

interface WritingProps extends TypedOptions {
  texts: string[];
}
export const Writing = ({ texts, ...others }: WritingProps) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: texts,
      typeSpeed: 50,
      ...others,
    });

    return () => {
      typed.destroy();
    };
  }, [others, texts]);

  return <span ref={el} />;
};
