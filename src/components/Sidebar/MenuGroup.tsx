import { MenuItemType } from "@/models/Sidebar/sidebar";
import {H3} from "../ui/H3";
import MenuItem from "./MenuItem";

type MenuGroupProps = {
    heading: string;
    items: MenuItemType[];
}

const MenuGroup = ({ heading, items }: MenuGroupProps) => {
  return (
    <div className="mb-4">
      <H3>{heading}</H3>
      <div className="flex flex-col gap-1">
        {
            items.map((item, index) => (
                <MenuItem key={index} {...item} />
            ))
        }
      </div>
    </div>
  );
}

export default MenuGroup;
