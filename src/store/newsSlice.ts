import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { NewsState, SaveNewsDTO } from "../models/News/newsTypes";
import { fetchNews, archiveNewsAPI, deleteNewsAPI, saveNewsAPI } from "../api/newsService";

const initialState: NewsState = {
  allNews: [],
  isLoaded: false,
};

export const loadNews = createAsyncThunk("news/loadNews", async () => {
  return await fetchNews();
});

export const saveNews = createAsyncThunk("news/saveNews", async (formNews: SaveNewsDTO) => {
  console.log("Creo nueva noticia.");
  return await saveNewsAPI(formNews);
});

export const archiveNews = createAsyncThunk("news/archiveNews", async (id: string) => {
  console.log("Archivo noticias: ", id);
  await archiveNewsAPI(id);
  return id;
});

export const deleteNews = createAsyncThunk("news/deleteNews", async (id: string) => {
  console.log("Elimino Noticia:", id);
  await deleteNewsAPI(id);
  return id;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadNews.fulfilled, (state, action) => {
        state.allNews = action.payload;
        state.isLoaded = true;
      })
      .addCase(saveNews.fulfilled, (state, action) => {
        state.allNews.unshift(action.payload);
      })
      .addCase(archiveNews.fulfilled, (state, action) => {
        const news = state.allNews.find((n) => n._id === action.payload);
        if (news) {
          news.archiveDate = new Date().toISOString();
        }
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.allNews = state.allNews.filter((n) => n._id !== action.payload);
      });
  },
});

export default newsSlice.reducer;
