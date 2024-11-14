// useModal.js

import useModalStore from "@/store/modalStore";

export const useModal = () => {
  const { isOpen, openModal, closeModal } = useModalStore();

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
