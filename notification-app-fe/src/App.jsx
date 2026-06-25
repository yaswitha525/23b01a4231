import { useEffect, useState } from "react";
import { fetchNotifications } from "./api/notifications";
import { sortNotifications } from "./utils/sortNotifications";
import "./App.css";

export default function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchNotifications();
      setNotifications(sortNotifications(data));
    }

    loadData();
  }, []);

  return (
    <div className="container">
      <h1>Top 10 Priority Notifications</h1>

      {notifications.map((item) => (
        <div key={item.ID} className="card">
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <small>{item.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}