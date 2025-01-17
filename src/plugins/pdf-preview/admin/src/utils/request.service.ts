class RequestService {
  apiUrl = process.env.STRAPI_ADMIN_API_URL;
  token = process.env.STRAPI_ADMIN_STRAPI_TOKEN;

  async request(
    path: string,
    method: 'POST' | 'GET' | 'PUT' | 'DELETE',
    init: {
      body?: any;
      headers?: any;
    }
  ): Promise<Response> {
    const headers = {
      Authorization: `Bearer ${this.token}`,
      ...init.headers,
    };

    const res = await fetch(this.apiUrl + path, {
      method: method,
      headers,
      body: init.body,
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(`API request failed ${path} : ${res.status} ${res.statusText} \n${data}`);
    }
    return res;
  }

  async post<T>(
    path: string,
    init: {
      body: any;
      headers?: any;
    }
  ): Promise<T> {
    const res = await this.request(path, 'POST', {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...init.headers,
      },
      body: JSON.stringify(init.body),
    });

    return await res.json();
  }

  async get<T>(
    path: string,
    init: {
      headers?: any;
    } = {}
  ): Promise<T> {
    const res = await this.request(path, 'GET', init);

    return await res.json();
  }

  async put<T>(
    path: string,
    init: {
      body: any;
      headers?: any;
    }
  ): Promise<T> {
    const res = await this.request(path, 'PUT', {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...init.headers,
      },
      body: JSON.stringify(init.body),
    });

    return await res.json();
  }

  async delete(
    path: string,
    init: {
      headers?: any;
    } = {}
  ): Promise<Response> {
    const res = await this.request(path, 'DELETE', {
      ...init,
    });

    return await res;
  }
}

export const request = new RequestService();
