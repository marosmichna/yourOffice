import OfficeImage from "@/assets/images/office.png";
import { H3 } from "@/components/ui/H3";
import SignInForm from "@/components/Forms/SignInForm";
import HomePageHeader from "@/components/HomePage/HomePageHeader";
import HomePageFooter from "@/components/HomePage/HomePageFooter";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <HomePageHeader />
      <main className="flex flex-grow justify-around items-center">
        <img 
          src={OfficeImage} 
          alt="Office Image" 
        />
        <section className="bg-slate-100 p-7 rounded-md w-[500px]">
          <H3 className="text-center mb-5">Sign In</H3>
          <SignInForm />
        </section>
      </main>
      <HomePageFooter />
    </div>
  );
};

export default HomePage;

