import { Building, GlobeLock, LogIn, Settings, User, Users } from "lucide-react";
import MenuGroup from "./MenuGroup";
import UserItem from "./UserItem";

const listOfMenu = [
    {
        group: 'General',
        items: [
            { link: '/', icon: <User />, text: 'Profile' },
            { link: '/', icon: <Users />, text: 'Communities' },
            { link: '/', icon: <Building />, text: 'Buildings' },
        ],
    },
    {
        group: 'Settings',
        items: [
            { link: '/', icon: <Settings />, text: 'General Settings' },
            { link: '/', icon: <GlobeLock />, text: 'Privacy' },
            { link: '/', icon: <LogIn />, text: 'Logs' },
        ],
    }
];

const Sidebar = () => {

  return (
    <div className="flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-5 gap-5">
        <div>
            <UserItem />
        </div>
        <div className="grow">
            {
                listOfMenu.map((list, index) => (
                    <MenuGroup key={index} heading={list.group} items={list.items} />
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar;
