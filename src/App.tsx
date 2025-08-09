import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, CssBaseline, Box } from "@mui/material";
import ListNewsPage from "./pages/ListNewsPage";
import ArchivedNewsPage from "./pages/ArchivedNewsPage";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppBar position="static" sx={{ my: 4 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" component={Link} to="/" sx={{ mx: 2 }}>
            Noticias
          </Button>
          <Button color="inherit" component={Link} to="/archived" sx={{ mx: 2 }}>
            Archivadas
          </Button>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<ListNewsPage />} />
        <Route path="/archived" element={<ArchivedNewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
