import { getLocaleStorage } from "@/utils/locale-storage";
export const fetchItemsServ = async <T>(url: string): Promise<T> => {
  const lang = getLocaleStorage("lang");
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      lang: lang ? lang : "uz",
    },
  });
  const data: T = await res.json();
  return data;
};
export const postItemsServ = async <TRequest, TResponse>(
  url: string,
  newUserObj: TRequest,
  headers: Record<string, string> = { "Content-Type": "application/json" }
): Promise<TResponse> => {
  // LocalStorage'dan token olish
  const token = getLocaleStorage("UserToken");
  console.log({ token });

  // Agar token bo'lsa, headersga qo'shamiz
  const authHeaders = token
    ? { ...headers, Authorization: `Bearer ${token}` }
    : headers;

  const res = await fetch(url, {
    method: "POST",
    headers: authHeaders,
    body: JSON.stringify(newUserObj),
  });

  return (await res.json()) as TResponse;
};

export const patchItemsServ = async <TRequest, TResponse>(
  url: string,
  updateObj: TRequest,
  headers: Record<string, string> = { "Content-Type": "application/json" }
): Promise<TResponse> => {
  const res = await fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(updateObj),
  });

  return (await res.json()) as TResponse;
};
