interface ModalProps {
  children: React.ReactNode;
  open: boolean;
}

const Modal = ({ children, open }: ModalProps) => {
  return (
    <div
      className={`${
        open ? "flex" : "hidden"
      } z-30 justify-center items-center w-full h-screen fixed top-0 left-0 bg-[#00000080]`}
    >
      {children}
    </div>
  );
};

export default Modal;
