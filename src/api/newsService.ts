import axios from "axios";
import type { News, SaveNewsDTO } from "../models/News/newsTypes";

const API_URL = "http://localhost:3000/api";

export const fetchNews = async (): Promise<News[]> => {
  const response = await axios.get(`${API_URL}/news`);
  return response.data.data;
};

export const saveNewsAPI = async (news: SaveNewsDTO): Promise<News> => {
  const payload = {
    title: news.title,
    description: news.description,
    content: news.content,
    author: news.author,
  };
  const response = await axios.post(`${API_URL}/news`, payload);
  return response.data.data;
};

export const archiveNewsAPI = async (id: string): Promise<News[]> => {
  const response = await axios.put(`${API_URL}/news/${id}/archive`);
  return response.data.data;
};

export const deleteNewsAPI = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/news/${id}`);
};
