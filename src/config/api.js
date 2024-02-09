import axios from "axios";
import Cookie from "js-cookie";

export const GET = async (path, params) => {
  const getToken = Cookie.get("token");

  const header = {
    Authorization: `Bearer ${getToken || null}`,
  };

  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}${path}`,
    {
      headers: header,
      params,
    }
  );

  return response.data;
};

export const GET_AUTH = async (path, params) => {
  const getToken = Cookie.get("token");

  const header = {
    Authorization: `Bearer ${getToken || null}`,
  };

  const response = await axios.get(`${import.meta.env.VITE_API_AUTH}${path}`, {
    headers: header,
    params,
  });

  return response.data;
};

export const POST = async (path, payload) => {
  const header = {
    "Content-Type": "application/json",
    accept: "application/json",
    "Accept-Language": "en",
  };

  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}${path}`,
    payload,
    {
      headers: header,
    }
  );

  return response.data;
};

export const POST_AUTH = async (path, payload) => {
  const header = {
    "Content-Type": "application/json",
    accept: "application/json",
    "Accept-Language": "en",
  };

  const response = await axios.post(
    `${import.meta.env.VITE_API_AUTH}${path}`,
    payload,
    {
      headers: header,
    }
  );

  return response.data;
};

export const PATCH = async (path, payload) => {
  const header = {
    "Content-Type": "application/json",
    accept: "application/json",
    "Accept-Language": "en",
  };

  const response = await axios.patch(
    `${import.meta.env.VITE_API_BASE_URL}${path}`,
    payload,
    {
      headers: header,
    }
  );

  return response.data;
};
export const PUT = async (path, payload) => {
  const header = {
    "Content-Type": "application/json",
    accept: "application/json",
    "Accept-Language": "en",
  };

  const response = await axios.put(
    `${import.meta.env.VITE_API_BASE_URL}${path}`,
    payload,
    {
      headers: header,
    }
  );

  return response.data;
};
export const DELETE = async (path, payload) => {
  const header = {
    "Content-Type": "application/json",
    accept: "application/json",
    "Accept-Language": "en",
  };

  const response = await axios.delete(
    `${import.meta.env.VITE_API_BASE_URL}${path}`,
    payload,
    {
      headers: header,
    }
  );

  return response.data;
};
