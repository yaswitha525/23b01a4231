import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import {
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";

export default function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications(10, 1, "All")
      .then(setNotifications);
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Top 10 Priority Notifications
      </Typography>

      {notifications.map((n) => (
        <Card sx={{ mb:2 }} key={n.ID}>
          <CardContent>
            <Typography variant="h6">{n.Type}</Typography>
            <Typography>{n.Message}</Typography>
            <Typography color="text.secondary">
              {n.Timestamp}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}