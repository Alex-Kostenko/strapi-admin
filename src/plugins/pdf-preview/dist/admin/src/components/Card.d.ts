interface CardProps {
    name: string;
    email: string;
    message: string;
    documentId: string;
    createdAt: string;
    state: 'read' | 'unread';
    pdfPath: string;
    updateReplays: (documentId: string) => void;
}
declare const CardComponent: ({ name, email, message, documentId, createdAt, state, pdfPath, updateReplays, }: CardProps) => import("react/jsx-runtime").JSX.Element;
export default CardComponent;
