import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { getImageUrl } from "../../lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

const Header = () => {
  const cacheData = useSelector((state: RootState) => state.cache.data);
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <React.Fragment>
      <header className="px-4 lg:px-6 h-14 flex items-center fixed top-0 left-0 w-full border-b shadow-lg bg-white z-50">
        <Link className="flex items-center justify-center" to="/">
          <img
            alt="logo"
            src={getImageUrl(
              cacheData["homepage"]
                ? cacheData["homepage"].logo?.url
                : ""
            )}
            className="size-6"
          />
          <span className="sr-only">Trang chủ</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {[
            {
              id: "about",
              label: "Giới thiệu",
            },
            {
              id: "skills",
              label: "Kỹ năng",
            },
            {
              id: "projects",
              label: "Dự án",
            },
            {
              id: "contact",
              label: "Liên hệ",
            },
          ].map((item, idx) => (
            <Button
              className="text-sm font-medium hover:underline underline-offset-4 px-0"
              key={idx}
              onClick={() => handleScroll(item.id)}
              variant="ghost"
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </header>
      <div className="h-[56px]"></div>
    </React.Fragment>
  );
};

export default Header;
