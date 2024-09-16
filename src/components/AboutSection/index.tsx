import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { getImageUrl } from "../../lib/utils";

const About = () => {
  const cacheData = useSelector((state: RootState) => state.cache.data)["homepage"];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {cacheData?.name ?? "Team Name"}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Web Developer JavaScript | React Enthusiast | Problem Solver
            </p>
          </div>
          <img
            src={getImageUrl(cacheData ? cacheData?.thumbnail.formats?.thumbnail.url ?? cacheData?.thumbnail.url : "")}
            alt="KDev Team"
            width={200}
            height={200}
            className="rounded-full size-[200px] object-cover"
            loading="lazy"
          />
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">{cacheData?.intro ?? ""}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
