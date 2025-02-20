import '@react-pdf-viewer/core/lib/styles/index.css';
interface File {
    id: number;
    documentId: string;
    name: string;
    alternativeText: any;
    caption: any;
    width: any;
    height: any;
    formats: any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}
export interface IReplay {
    id: number;
    documentId: string;
    name: string;
    email: string;
    message: string;
    state: 'read' | 'unread';
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    file: File;
}
export default function HomePage(): import("react/jsx-runtime").JSX.Element;
export {};
