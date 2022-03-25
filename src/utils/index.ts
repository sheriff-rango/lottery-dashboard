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

export async function sendRequest(url: string) {
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
}

export function getAgoString(timeStr: string): string {
  if (!timeStr) return "";
  const now = new Date().getTime();
  const target = new Date(timeStr).getTime();
  let diffTime = Math.floor((now - target) / 1000); // in second
  if (diffTime === 0) {
    return "just ago";
  } else if (diffTime < 60) {
    return `${diffTime} seconds ago`;
  }

  diffTime = Math.floor(diffTime / 60); // in minutes
  if (diffTime === 1) {
    return "a minute ago";
  } else if (diffTime < 60) {
    return `${diffTime} minutes ago`;
  }

  diffTime = Math.floor(diffTime / 60); // in hours
  if (diffTime === 1) {
    return "an hour ago";
  } else if (diffTime < 24) {
    return `${diffTime} hours ago`;
  }

  diffTime = Math.floor(diffTime / 24); // in days
  if (diffTime === 1) {
    return "one day ago";
  } else if (diffTime < 24) {
    return `${diffTime} days ago`;
  }
  return "";
}

export function shortenString(
  str: string,
  lengthStart: number,
  lengthEnd?: number
): string {
  const start = lengthStart;
  const end = lengthEnd ?? lengthStart;
  return str.length < start + end
    ? str
    : `${str.slice(0, start)}...${str.slice(-end)}`;
}
