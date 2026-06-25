import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Button,
} from "@mui/material";

export default function AllNotifications() {

  const [notifications,setNotifications]=useState([]);
  const [type,setType]=useState("All");

  useEffect(()=>{

    fetchNotifications(100,1,type)
    .then(setNotifications);

  },[type]);

  return (

    <Container sx={{mt:4}}>

      <Typography variant="h4" gutterBottom>
        All Notifications
      </Typography>

      <Button onClick={()=>setType("All")}>All</Button>
      <Button onClick={()=>setType("Placement")}>Placement</Button>
      <Button onClick={()=>setType("Event")}>Event</Button>
      <Button onClick={()=>setType("Result")}>Result</Button>

      {notifications.map((n)=>(
        <Card key={n.ID} sx={{mb:2}}>
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