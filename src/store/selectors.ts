import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectorNews = createSelector(
  (state: RootState) => state.news.allNews,
  (allNews) => allNews.filter((n) => !n.archiveDate)
);

export const selectorArchivedNews = createSelector(
  (state: RootState) => state.news.allNews,
  (allNews) =>
    [...allNews]
      .filter((n) => n.archiveDate)
      .sort((a, b) => new Date(b.archiveDate!).getTime() - new Date(a.archiveDate!).getTime())
);
