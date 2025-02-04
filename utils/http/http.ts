import { QueryClient } from "@tanstack/react-query";
import type { ContactUsType, PartnerRequestType } from "types/types";

export const queryClient = new QueryClient();
const API_BASE_URL = "https://rha-backend.onrender.com";
// const API_BASE_URL = "http://localhost:3333";

export const postContactUs = async (data: ContactUsType) => {
  const res = await fetch(`${API_BASE_URL}/contact-us`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to send message");
  } else {
    return await res.json();
  }
};

export const postPartnerRequest = async (data: PartnerRequestType) => {
  const res = await fetch(`${API_BASE_URL}/partnership/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to send message");
  } else {
    return await res.json();
  }
};
