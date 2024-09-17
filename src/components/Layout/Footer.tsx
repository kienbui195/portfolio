import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

const Footer = () => {
  const cacheData = useSelector((state: RootState) => state.cache.data)['homepage']

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">{`© 2024 ${cacheData?.name ?? "Team Name"}. All rights reserved.`}</p>
    </footer>
  );
};

export default Footer;
