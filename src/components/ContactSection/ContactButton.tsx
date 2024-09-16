import * as React from "react";
import { Button } from "../ui/button";
import { getImageUrl } from "../../lib/utils";
import { Link } from "react-router-dom";

export interface IContactButtonProps {
  icon?: string;
  name: string;
  link: string;
}

const ContactButton = ({ icon, name, link }: IContactButtonProps) => {
  return (
    <Link to={link} target="_blank">
      <Button variant="outline" className="bg-white">
        <img alt="" src={getImageUrl(icon, "../../assets/images/default_image.jpg")} className="mr-2 h-4 w-4" loading="lazy" />
        {name}
      </Button>
    </Link>
  );
};

export default ContactButton;
