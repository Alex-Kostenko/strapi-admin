import { SerializedError } from '@reduxjs/toolkit';
import { type UnknownApiError, type ApiError } from '@strapi/strapi/admin';
type BaseQueryError = ApiError | UnknownApiError | SerializedError;
declare const isBaseQueryError: (error: BaseQueryError) => error is ApiError | UnknownApiError;
export { isBaseQueryError };
