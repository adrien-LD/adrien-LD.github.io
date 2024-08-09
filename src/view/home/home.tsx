import { TechnologyStackPanel } from "./technology-stack-panel";

import HomeBg from "@/assets/images/bg4.png";
import { Layout } from "@/component/layout";

import { Writing } from "@/component/writing";

export const Home = () => {
  return (
    <Layout>
      <div
        className="h-full bg-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${HomeBg})` }}
      >
        <div className="pos-absolute pos-inset-x-none pos-inset-y-none flex items-center justify-center">
          <div className="c-white font-500 text-32px">
            <Writing texts={["人生是旷野，不是轨道"]} cursorChar={"_"} />
          </div>
        </div>
      </div>
      <main>
        <TechnologyStackPanel />
      </main>
    </Layout>
  );
};
