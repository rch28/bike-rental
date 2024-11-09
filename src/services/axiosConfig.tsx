import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

type RequestHeaders = { [key: string]: string };
type RequestBody = { [key: string]: any } | null;

interface Requests {
  get: (url: string, headers?: RequestHeaders) => Promise<any>;
  post: (
    url: string,
    body?: RequestBody,
    headers?: RequestHeaders
  ) => Promise<any>;
  put: (
    url: string,
    body?: RequestBody,
    headers?: RequestHeaders
  ) => Promise<any>;
  patch: (
    url: string,
    body?: RequestBody,
    headers?: RequestHeaders
  ) => Promise<any>;
  delete: (url: string, headers?: RequestHeaders) => Promise<any>;
}

const configureAxios = (): Requests => {
  const instance: AxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}api/v1`,
    withCredentials: true,
  });

  const errorHandler = (error: AxiosError): Promise<never> => {
    const status = error.response?.status;

    if (status === 401 && window.location.pathname !== "/login/") {
      setTimeout(() => {
        const email = localStorage.getItem("email") as string;
        localStorage.clear();
        localStorage.setItem("email", email);
        window.location.href = "/login/";
      }, 3000);
    } else if (status && status >= 400 && status < 500) {
      // Handle other client errors
      console.warn("Client error:", error.message);
    } else if (status && status >= 500) {
      // Handle server errors
      console.error("Server error:", error.message);
    }

    return Promise.reject(error);
  };

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => errorHandler(error)
  );

  const requests: Requests = {
    get: (url: string, headers?: RequestHeaders) =>
      instance.get(url, { headers }).then((res) => res.data),

    post: (url: string, body: RequestBody = null, headers?: RequestHeaders) =>
      instance.post(url, body, { headers }).then((res) => res.data),

    put: (url: string, body: RequestBody = null, headers?: RequestHeaders) =>
      instance.put(url, body, { headers }).then((res) => res.data),

    patch: (url: string, body: RequestBody = null, headers?: RequestHeaders) =>
      instance.patch(url, body, { headers }).then((res) => res.data),

    delete: (url: string, headers?: RequestHeaders) =>
      instance.delete(url, { headers }).then((res) => res.data),
  };

  return requests;
};

export default configureAxios;
