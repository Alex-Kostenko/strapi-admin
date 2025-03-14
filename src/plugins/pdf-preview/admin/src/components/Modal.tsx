import React, { useEffect, ReactNode, CSSProperties } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  style?: CSSProperties;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, style = {} }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scroll
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !modalRoot) return null;

  const modalStyles: CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px 40px',
    borderRadius: '8px',
    background: '#212134',
    border: 0,
    color: 'white',
    zIndex: 1001,
    width: '90%',
    height: '90%',
  };

  const backdropStyles: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  };

  const closeButtonStyles: CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    width: 32,
    height: 32,
    fontSize: 32,
    lineHeight: 0.4,
    color: 'white',
  };

  return ReactDOM.createPortal(
    <>
      <div style={backdropStyles} onClick={onClose} />
      <dialog open style={{ ...modalStyles, ...style }}>
        <button style={closeButtonStyles} onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        {children}
      </dialog>
    </>,
    modalRoot
  );
};

export default Modal;
