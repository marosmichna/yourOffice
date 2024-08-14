import { H3 } from "../ui/H3";

type HomePageStatBoxProps = {
    value: string;
    label: string;
}

const HomePageStatBox = ({ value, label }: HomePageStatBoxProps) => {
  return (
    <div className="bg-slate-100 w-[20%] rounded-sm p-4 text-center">
        <H3>{value}</H3>
        <p>{label}</p>
    </div>
  )
}

export default HomePageStatBox;