import Button from "@/components/ui/Button";
import { AppDispatch, RootState } from "@/store/store";
import { setIsRegister } from "@/store/userName/userNameSlice";
import { useDispatch, useSelector } from "react-redux";

const LogOutPage = () => {

  const firstName = useSelector((state: RootState) => state.userName.firstName);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(setIsRegister(false));
  }

  return (

    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <p>{firstName}, are you sure you want to log out?</p>
        <Button 
          variant="submit"
          className="mt-10"
          onClick={handleLogOut}
        >
          Log Out
        </Button>
      </div>
    </div>
  )
}

export default LogOutPage;