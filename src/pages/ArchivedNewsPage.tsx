import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { deleteNews, loadNews } from "../store/newsSlice";
import { NewsCard } from "../components/NewsCard";
import { useEffect } from "react";
import { selectorArchivedNews } from "../store/selectors";
import { Box, Typography } from "@mui/material";

const ArchivedNewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoaded = useSelector((state: RootState) => state.news.isLoaded);
  const archivedNews = useSelector(selectorArchivedNews);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(loadNews());
    }
  }, [isLoaded, dispatch]);

  return (
    <Box>
      <Typography variant="h1">Archivadas</Typography>
      <Box style={{ marginBottom: 20 }}>
        <hr />
      </Box>
      {archivedNews.map((news) => (
        <NewsCard
          key={news._id}
          news={news}
          onDelete={(_id: string) => dispatch(deleteNews(_id))}
          isArchived
        />
      ))}
    </Box>
  );
};

export default ArchivedNewsPage;
