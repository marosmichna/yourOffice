import { H1 } from "../ui/H1";
import HomePageStatBox from "./HomePageStatBox";

const HomePageFooter = () => {
  return (
    <footer>
      <div className="border-t-2 border-slate-100 mb-4" />
      <section className="text-center w-[60%] m-auto">
        <H1 className="mb-4">Office which saves time</H1>
        <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo blanditiis quod fugiat nobis laudantium velit obcaecati, maxime itaque doloremque, optio eius aliquam assumenda! Impedit sapiente voluptatum consequatur voluptas quidem nulla?</p>
        <div>
          <div className="flex flex-row items-center justify-around mb-4">
            <HomePageStatBox 
              value="7500"
              label="Users"
            />
            <HomePageStatBox 
              value="15000"
              label="Buildings"
            />
            <HomePageStatBox 
              value="10000"
              label="Communities"
            />
          </div>
        </div>
      </section>
      <div className="py-4 mt-2 bg-slate-50 text-center">
        <p className="text-xl">©Your Office</p>
      </div>
    </footer>
  )
}

export default HomePageFooter;