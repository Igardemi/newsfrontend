import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import { loadNews, archiveNews } from "../store/newsSlice";
import { NewsCard } from "../components/NewsCard";
import { selectorNews } from "../store/selectors";
import { Box, Button, Divider, Typography } from "@mui/material";
import NewsModal from "../components/NewsCreateModal";

const ListNewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const News = useSelector(selectorNews);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h1">Ultimas Noticias</Typography>
      <Box>
        <Divider
          sx={{
            mb: 3,
          }}
        />
      </Box>
      <Box>
        <Button
          sx={{
            mb: 3,
          }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Añade Nueva noticia
        </Button>
        <NewsModal open={open} handleClose={() => setOpen(false)} />
      </Box>
      {News.map((news) => (
        <NewsCard key={news._id} news={news} onArchive={(_id) => dispatch(archiveNews(_id))} />
      ))}
    </Box>
  );
};

export default ListNewsPage;
