import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const UserItem = () => {

  const firstName = useSelector((state: RootState) => state.userName.firstName);
  const lastName = useSelector((state: RootState) => state.userName.lastName);
  const email = useSelector((state: RootState) => state.userName.email);
  const isRegister = useSelector((state: RootState) => state.userName.isRegister);

  return (
    <div className="flex items-center gap-2 p-2 shadow">
      <div className="flex justify-center items-center w-10 h-10 bg-gray-300 rounded-full">{isRegister ? `${firstName.charAt(0)}${lastName.charAt(0)}` : "UN"}</div>
      <div>
        <h4 className="font-semibold">{isRegister ? `${firstName} ${lastName}` : "User Name"}</h4>
        <p className="text-sm text-gray-600">{isRegister ? email : "user@email.com"}</p>
      </div>
    </div>
  )
}

export default UserItem;
