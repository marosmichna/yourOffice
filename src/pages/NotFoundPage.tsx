import { Link } from "react-router-dom";


const NotFoundPage = () => {



  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="text-center">
            <p>Sorry :-(</p>
            <p>Page Not found</p>
            <Link className="underline mt-4" to="/">Go to the home page</Link>
        </div>
    </div>
  )
}

export default NotFoundPage;