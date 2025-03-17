import { LoaderIcon } from "lucide-react";

export const AppLoading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <LoaderIcon size={40} className="animate-spin " color="blue" />
    </div>
  );
};
