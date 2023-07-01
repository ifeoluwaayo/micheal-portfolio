"use client";
import React, { useEffect } from "react";
import { Dialog } from "@headlessui/react";

interface ViewResumeProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ViewResume = ({ open, setOpen }: ViewResumeProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  function ViewResume() {
    return (
      <iframe
        src="/pdf/Micheal(Resume).pdf#view=FitH"
        title="Resume"
        height="100%"
        width="100%"
        className="scrollbar-hide"
      />
    );
  }

  const handleDownload = () => {
    if (typeof window === "undefined") return;

    fetch("/pdf/Micheal(Resume).pdf").then((res) => {
      res.blob().then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Micheal (Resume).pdf");
        document.body.appendChild(link);
        link.click();
        (link.parentNode as any).removeChild(link);
      });
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-50">
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-[95vw] md:w-[80vw] h-[85vh] rounded-lg shadow-lg flex flex-col bg-black">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Resume</h1>
            <button className="text-2xl font-bold" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            <ViewResume />
          </div>
          <div className="bottom-0 px-5 py-2 w-full flex md:justify-end justify-center items-center gap-5">
            <button
              className="bg-blue-500 text-white px-4 py-2 text-base rounded-lg transition-all duration-200 hover:bg-blue-600 ease-in-out hover:scale-95"
              onClick={handleDownload}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
