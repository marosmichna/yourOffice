import { useSelector } from "react-redux";
import { H1 } from "../ui/H1"
import { RootState } from "@/store/store";


const ProfilePageHeader = () => {

  const firstName = useSelector((state: RootState) => state.userName.firstName);

  return (
    <header>
        <H1>Welcome to Your Profile <span className="text-gray-600">{firstName}</span></H1>
  </header>
  )
}

export default ProfilePageHeader;