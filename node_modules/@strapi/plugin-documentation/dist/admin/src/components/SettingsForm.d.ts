import { FormikHelpers } from 'formik';
import { DocumentInfos, SettingsInput } from '../types';
type SettingsFormProps = {
    data?: DocumentInfos;
    onSubmit: (body: SettingsInput, formik: FormikHelpers<SettingsInput>) => Promise<void>;
};
export declare const SettingsForm: ({ data, onSubmit }: SettingsFormProps) => import("react/jsx-runtime").JSX.Element;
export {};
