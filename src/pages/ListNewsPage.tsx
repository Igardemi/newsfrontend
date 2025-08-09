import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import { loadNews, archiveNews } from "../store/newsSlice";
import { NewsCard } from "../components/NewsCard";
import { selectorNews } from "../store/selectors";
import { Box, Typography } from "@mui/material";

const ListNewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const News = useSelector(selectorNews);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h1">Ultimas Noticias</Typography>
      <Box style={{ marginBottom: 20 }}>
        <hr />
      </Box>
      {News.map((news) => (
        <NewsCard key={news._id} news={news} onArchive={(_id) => dispatch(archiveNews(_id))} />
      ))}
    </Box>
  );
};

export default ListNewsPage;
