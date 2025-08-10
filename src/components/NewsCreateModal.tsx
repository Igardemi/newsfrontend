import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import type { SaveNewsDTO } from "../models/News/newsTypes";
import { saveNews } from "../store/newsSlice";
import { useAppDispatch } from "../store";

interface NewsCardProps {
  open: boolean;
  handleClose: () => void;
}

export const NewsModal = ({ open, handleClose }: NewsCardProps) => {
  const dispatch = useAppDispatch();
  const [newsData, setNewsData] = useState<SaveNewsDTO>({
    title: "",
    description: "",
    content: "",
    author: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(saveNews(newsData));
    handleClose();
    setNewsData({
      title: "",
      description: "",
      content: "",
      author: "",
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: 400,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          Crear nueva noticia
        </Typography>
        <TextField
          label="Título"
          name="title"
          value={newsData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          slotProps={{
            input: {
              inputProps: { maxLength: 120 },
            },
          }}
          helperText={`${newsData.title.length}/50 caracteres`}
        />
        <TextField
          label="Descripción"
          name="description"
          value={newsData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          slotProps={{
            input: {
              inputProps: { maxLength: 250 },
            },
          }}
          helperText={`${newsData.description.length}/250 caracteres`}
        />
        <TextField
          label="Contenido"
          name="content"
          value={newsData.content}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          slotProps={{
            input: {
              inputProps: { maxLength: 2000 },
            },
          }}
          helperText={`${newsData.content.length}/2000 caracteres`}
        />
        <TextField
          label="Autor"
          name="author"
          value={newsData.author}
          onChange={handleChange}
          fullWidth
          margin="normal"
          slotProps={{
            input: {
              inputProps: { maxLength: 60 },
            },
          }}
          helperText={`${newsData.author.length}/60 caracteres`}
        />
        <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
          <Button onClick={handleClose} variant="outlined">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Guardar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewsModal;
