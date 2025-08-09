import { Card, CardContent, Typography, Button, Stack, useTheme } from "@mui/material";
import type { News } from "../models/News/newsTypes";

interface NewsCardProps {
  news: News;
  isArchived?: boolean;
  onArchive?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const NewsCard = ({ news, isArchived, onArchive, onDelete }: NewsCardProps) => {
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        mb: 3,
        borderRadius: 2,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: theme.shadows[3],
          borderColor: theme.palette.primary.light,
        },
      }}
    >
      <CardContent>
        <Typography variant="h6">{news.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {news.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {news.content}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mx: 4 }}>
          Publicación:{" "}
          {new Date(news.date).toLocaleDateString("es-Es", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Typography>
        {isArchived && (
          <Typography variant="caption" color="text.secondary" sx={{ mx: 4 }}>
            Archivo:{" "}
            {new Date(news.archiveDate!).toLocaleDateString("es-Es", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Typography>
        )}

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          {!isArchived && (
            <Button variant="contained" size="small" onClick={() => onArchive?.(news._id)}>
              Archivar
            </Button>
          )}
          {isArchived && (
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => onDelete?.(news._id)}
            >
              Eliminar
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
