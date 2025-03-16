import LanguageSelector from "@/components/ui/langue-select";
export const Header = () => {
  return (
    <header className="py-[30px] bg-[#F8F8F8]  mb-[90px] lg:mb-28">
      <div className="container flex justify-between items-center">
        <h2 className="text-[#4DA6FF] font-bold text-[45px] cursor-pointer">
          AutoShop
        </h2>
        <span className="flex  items-center gap-[5px] cursor-pointer uppercase text-xl text-[#666666] font-medium">
          <LanguageSelector />
        </span>
      </div>
    </header>
  );
};
