import { Routes, Route, Link } from "react-router-dom";
import PriorityNotifications from "./pages/PriorityNotifications";
import AllNotifications from "./pages/AllNotifications";

import { AppBar, Toolbar, Button } from "@mui/material";

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Priority
          </Button>

          <Button color="inherit" component={Link} to="/all">
            All Notifications
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<PriorityNotifications />} />
        <Route path="/all" element={<AllNotifications />} />
      </Routes>
    </>
  );
}