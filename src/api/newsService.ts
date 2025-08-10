import axios from "axios";
import type { News, SaveNewsDTO } from "../models/News/newsTypes";

const API_URL = "http://localhost:3000/api";

export const fetchNews = async () => {
  const response = await axios.get(`${API_URL}/news`);
  return response.data;
};

export const saveNewsAPI = async (news: SaveNewsDTO): Promise<News> => {
  const response = await axios.post(`${API_URL}/news`, { news });
  return response.data;
};

export const archiveNewsAPI = async (id: string) => {
  const response = await axios.put(`${API_URL}/news/${id}/archive`);
  return response.data;
};

export const deleteNewsAPI = async (id: string) => {
  const response = await axios.delete(`${API_URL}/news/${id}`);
  return response.data;
};
