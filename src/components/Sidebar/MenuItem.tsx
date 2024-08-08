import React from "react";
import { Link } from "react-router-dom";

type MenuItemProps = {
  link: string;
  icon: React.ReactNode;
  text: string;
}

const MenuItem = ({ link, icon, text }: MenuItemProps) => {
  return (
    <Link to={link} className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer">
      {icon}
      <span>{text}</span>
    </Link>
  )
}

export default MenuItem;
