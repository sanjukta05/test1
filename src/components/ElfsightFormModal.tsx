import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { useElfsightForm } from "./ElfsightFormContext";
const ELFSIGHT_APP_ID = "4ae4b665-d18d-434d-bf98-3c9f9bc376b1";
const ElfsightFormModal: React.FC = () => {
  const {
    open,
    closeForm
  } = useElfsightForm();
  return <Dialog open={open} onOpenChange={v => !v && closeForm()}>
      <DialogContent className="p-0 max-w-xl">
        <DialogHeader>
          
          <DialogClose className="absolute top-2 right-2 z-10 rounded-full p-2 hover:bg-gray-100" onClick={closeForm} />
        </DialogHeader>
        <div className="p-4">
          <div className={`elfsight-app-${ELFSIGHT_APP_ID}`} data-elfsight-app-lazy style={{
          minHeight: 450
        }}></div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default ElfsightFormModal;