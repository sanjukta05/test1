import React from "react";
import { Paintbrush } from "lucide-react";
import { useElfsightForm } from "./ElfsightFormContext";

/**
 * Floating mobile "Get Estimate" button (bottom left, only on mobile)
 * Should be placed globally (in App.tsx)
 */
const GetEstimateMobileButton: React.FC = () => {
  const {
    openForm
  } = useElfsightForm();
  return <button type="button" onClick={openForm} className="fixed left-4 bottom-6 z-40 bg-deco-denim text-white py-4 rounded-full shadow-lg hover:shadow-xl transition-all group flex items-center gap-2 block md:hidden px-[12px]">
      <Paintbrush className="h-5 w-5 group-hover:animate-pulse" />
      Get Estimate.
    </button>;
};
export default GetEstimateMobileButton;