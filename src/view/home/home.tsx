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
				<div className="w-full absolute top-2/4 right-0">
					<div className=" text-white font-medium text-[32px] flex items-center justify-center">
						<Writing texts={["人生是旷野，不是轨道"]} cursorChar={"_"} />
					</div>
				</div>
				{/* <main>
          <TechnologyStackPanel />
        </main> */}
			</div>
		</Layout>
	);
};
