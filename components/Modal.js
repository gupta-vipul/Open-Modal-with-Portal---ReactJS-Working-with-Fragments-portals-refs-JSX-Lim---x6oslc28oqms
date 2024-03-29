import ReactDOM from "react-dom";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  else if (onClose) {
    return (
      <>
        {ReactDOM.createPortal(
          <div className="modal">
            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
      </>
    );
  }
};

export default Modal;

//add code here
