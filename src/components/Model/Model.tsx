// Modal.js
import { useModal } from "@/hooks/useModalStore";
import {
  Dialog,
  Transition,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";

const Modal = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isOpen, closeModal } = useModal();

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="max-w-md w-full p-6 bg-white rounded-lg shadow-xl">
              {children}
            </DialogPanel>
          </Transition>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
