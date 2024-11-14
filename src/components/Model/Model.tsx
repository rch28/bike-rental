// Modal.js
import { useModal } from "@/hooks/useModalStore";
import {
  Dialog,
  Transition,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import { LuXCircle } from "react-icons/lu";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}: ModalProps) => {
  return (
    // <Transition show={isOpen} as={Fragment}>
    //   <Dialog as="div" className="relative z-10" onClose={closeModal}>
    //     {/* Background Overlay */}
    //     <Transition
    //       show={isOpen}
    //       as="div" // Change Fragment to div
    //       className="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
    //       enter="ease-out duration-300"
    //       enterFrom="opacity-0"
    //       enterTo="opacity-100"
    //       leave="ease-in duration-200"
    //       leaveFrom="opacity-100"
    //       leaveTo="opacity-0"
    //     />

    //     <div className="fixed inset-0 flex items-center justify-center p-4">
    //       <Transition
    //         show={isOpen}
    //         as="div" // Change Fragment to div
    //         enter="ease-out duration-300"
    //         enterFrom="opacity-0 scale-95"
    //         enterTo="opacity-100 scale-100"
    //         leave="ease-in duration-200"
    //         leaveFrom="opacity-100 scale-100"
    //         leaveTo="opacity-0 scale-95"
    //       >
    //         <DialogPanel className="max-w-md w-full p-6 bg-white rounded-lg shadow-xl">
    //           {children}
    //         </DialogPanel>
    //       </Transition>
    //     </div>
    //   </Dialog>
    // </Transition>
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-25"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg p-6 space-y-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            {" "}
            <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
            <button onClick={onClose} className="">
              <LuXCircle size={24} className="hover:text-red-500" />
            </button>
          </div>
          <Description className="text-sm text-gray-500">
            {description}
          </Description>
          <div>{children}</div>
          {/* <div className="flex gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-md"
            >
              Confirm
            </button>
          </div> */}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
