import * as React from "react";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

export interface IProjectState {
  id: number;
  title: string;
  subTitle?: string;
  desc?: string;
  linkCode?: string;
  linkDemo?: string;
  gallery: string[];
}

const Project = () => {
  const cacheData = useSelector((state: RootState) => state.cache.data)["homepage"];
  const data: IProjectState[] = React.useMemo(() => {
    if (cacheData) {
      if (!cacheData || (cacheData && !cacheData.project) || (cacheData && cacheData.project.length < 1)) return [];
      return cacheData.project.reduce((acc: IProjectState[], item: any) => {
        const { id, title, sub_title, desc, link_code, link_demo, gallery } = item;

        acc.push({
          id,
          title,
          linkCode: link_code,
          linkDemo: link_demo,
          desc,
          subTitle: sub_title,
          gallery: gallery ? gallery.map(item => item.url) : [],
        });
        return acc;
      }, []);
    } else {
      return []
    }
  }, [cacheData]);

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Dự án</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((project, idx) => (
            <ProjectCard
              gallery={project.gallery}
              title={project.title}
              subTitle={project.subTitle}
              desc={project.desc}
              codeLink={project.linkCode}
              demoLink={project.linkDemo}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
