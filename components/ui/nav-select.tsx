import { MdKeyboardArrowDown } from "react-icons/md";
interface Props {
  initialTitle: string;
  data: { label: string; path: string; id: number }[];
}
export const NavSelect = ({ data, initialTitle }: Props) => {
  return (
    <div className="select-container">
      <span className="flex items-center gap-[5px] text-[19px] font-medium cursor-pointer">
        {initialTitle}
        <MdKeyboardArrowDown />
      </span>
      <div className="select-action">
        {data.map((item) => (
          <p key={item.id} className="text-[#333333] text-[19px] mb-4">
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
};
