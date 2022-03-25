import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

function fetch({
  method,
  url,
  headers,
  data,
}: AxiosRequestConfig): AxiosPromise {
  return axios({
    method: method || "get",
    url: url,
    headers: headers,
    data,
  });
}

module.exports = async function sendRequest({ url }: { url: string }) {
  try {
    const result = await fetch({
      url,
      headers: { "content-type": "application/json" },
      method: "get",
    });
    return result.data;
  } catch (err: any) {
    console.log("axios error", err?.message, "url: ", url);
    return null;
  }
};
