declare class RequestService {
    apiUrl: string;
    token: string | undefined;
    request(path: string, method: 'POST' | 'GET' | 'PUT' | 'DELETE', init: {
        body?: any;
        headers?: any;
    }): Promise<Response>;
    post<T>(path: string, init: {
        body: any;
        headers?: any;
    }): Promise<T>;
    get<T>(path: string, init?: {
        headers?: any;
    }): Promise<T>;
    put<T>(path: string, init: {
        body: any;
        headers?: any;
    }): Promise<T>;
    delete(path: string, init?: {
        headers?: any;
    }): Promise<Response>;
}
export declare const request: RequestService;
export {};
