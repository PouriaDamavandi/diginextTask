import React, { type FC, MouseEvent, useRef } from "react";

interface MainModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const MainModal: FC<MainModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleOutsideClick = (e: MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (dialog && dialog === e.target) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      onClick={handleOutsideClick}
      onClose={onClose}
    >
      <div className="modal-box">
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        <div className="py-4">{children}</div>
      </div>
      <form method="dialog" className="modal-backdrop" onClick={onClose}>
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default MainModal;
