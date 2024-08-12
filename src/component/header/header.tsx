import {
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";

const TextItem = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-[14px] p-2 cursor-pointer hover:text-gray-400">{children}</div>
  );
};

export const Header = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const scroll = useCallback(() => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition > 0) {
      // 滚动条不在顶部了
      setIsCollapse(true);
    } else {
      setIsCollapse(false);
    }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, [scroll]);

  return (
    <header>
      <nav
        className={`w-full px-[16px] text-xl text-white fixed top-0 nav-transition-700-ease ${
          isCollapse ? "py-[5px] bg-black" : "py-[12px] bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center mx-auto max-w-[1140px]">
          <a className="p-1 cursor-pointer">Adrien</a>
          <div className="flex items-center">
            <TextItem>JS</TextItem>
            <TextItem>CSS</TextItem>
            <TextItem>React</TextItem>
            <TextItem>Vue</TextItem>
            <TextItem>Github</TextItem>
          </div>
        </div>
      </nav>
    </header>
  );
};
