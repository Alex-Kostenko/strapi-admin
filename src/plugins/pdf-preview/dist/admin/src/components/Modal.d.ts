import React, { ReactNode, CSSProperties } from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    style?: CSSProperties;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
