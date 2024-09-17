import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { getImageUrl } from "../../lib/utils";

const About = () => {
  const cacheData = useSelector((state: RootState) => state.cache.data)[
    "homepage"
  ];

  return (
    <section
      id="about"
      className={`w-full py-12 md:py-24 lg:py-28 flex flex-col items-center bg-fixed transition-transform bg-[url('${getImageUrl(
        cacheData?.thumbnail.url ?? ""
      )}')]`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2 flex flex-col items-center">
            <div
              className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none p-2 
                rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 hover:transition hover:duration-500 text-white text-center`}
            >
              {cacheData?.name ?? "Team Name"}
            </div>
            <div className="mx-auto max-w-[700px]  md:text-xl dark:text-gray-400 font-bold p-2 rounded-full bg-white ">
              Web Developer JavaScript | React Enthusiast | Problem Solver
            </div>
          </div>
          <div className="sm:size-[200px] size-[120px] overflow-hidden rounded-full">
            <img
              src={getImageUrl(cacheData ? cacheData?.logo.url : "")}
              alt="KDev Team"
              width={200}
              height={200}
              className="rounded-full size-full object-cover hover:scale-110 duration-500 transition-transform"
              loading="lazy"
            />
          </div>

          <div className="mx-auto max-w-[700px] md:text-xl text-white bg-black opacity-70 rounded-lg p-2">
            {cacheData?.intro ?? ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
