"use client";
interface Props {
  count: number;
  setCount: (value: number) => void;
  activePage: number;
}
export const Pagination = ({ count, setCount, activePage }: Props) => {
  const fakeArray = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <div className="w-full flex justify-center p-10">
      <div className="border border-gray-400 rounded-[40px] flex gap-3 p-2">
        {fakeArray.map((item) => (
          <button
            key={item}
            className={`border-none p-1 h-8 w-8 rounded-full hover:bg-slate-200  ${
              activePage === item ? "bg-slate-200 text-black" : ""
            }`}
            onClick={() => setCount(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
