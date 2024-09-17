import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { cn, getImageUrl } from "../../lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export interface IProjectCardProps {
  title: string;
  subTitle?: string;
  desc?: string;
  demoLink?: string;
  codeLink?: string;
  gallery: string[];
}

const ProjectCard = ({
  title = "Name Project",
  subTitle,
  desc,
  demoLink,
  codeLink,
  gallery,
}: IProjectCardProps) => {
  return (
    <Card className="border-none hover:border hover:border-gray-400 group/projectCard bg-white hover:rotate-10 hover:bg-slate-100 hover:shadow-lg hover:scale-105 transition duration-500">
      <CardHeader>
        <CardTitle className="line-clamp-2 group-hover/projectCard:line-clamp-none">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-400 line-clamp-2 group-hover/projectCard:line-clamp-none">
          {subTitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full">
          <CarouselContent>
            {gallery &&
              gallery.length > 0 &&
              Array.from(gallery).map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-0 rounded-sm">
                        <img
                          alt="project-thumbnail"
                          src={getImageUrl(item)}
                          className="object-cover size-full rounded-sm"
                          loading="lazy"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
        <p className="text-sm line-clamp-4 group-hover/projectCard:line-clamp-none">
          {desc}
        </p>
        <div className="flex mt-4">
          <Link
            to={demoLink}
            className={cn([demoLink ? "flex" : "hidden"])}
            target="_blank"
          >
            <Button className="mr-2 bg-black font-bold hover:opacity-80 text-white">
              Demo
            </Button>
          </Link>
          <Link
            target="_blank"
            to={codeLink}
            className={cn(["font-bold", codeLink ? "flex" : "hidden"])}
          >
            <Button variant="outline" className="mr-2 bg-white">
              Code
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
