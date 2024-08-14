import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutesPage = () => {

  const isRegister = useSelector((state: RootState) => state.userName.isRegister);

  return (
    isRegister ? <Outlet /> : <Navigate to="/" />
  )
}

export default ProtectedRoutesPage