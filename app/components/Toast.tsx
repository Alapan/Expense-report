interface ToastProps {
  message: string;
  backgroundColor: string;
  width: string;
  isVisible: boolean;
}

const Toast = ({ message, backgroundColor, width, isVisible }: ToastProps) => {
  return (
    <>
      {isVisible && (
        <div
          aria-label="Temporary notification message"
          className={`fixed box-border h-16 ${width} ${backgroundColor} animate-fade-in-image rounded-lg bottom-8 right-2 my-10`}
        >
          <div className="px-10 py-5">{message}</div>
        </div>
      )}
    </>
  );
};

export default Toast;
