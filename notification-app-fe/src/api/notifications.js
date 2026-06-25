import { Log } from "../utils/logger";

const API_URL = "http://4.224.186.213/evaluation-service/notifications";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2IwMWE0MjMxQHN2ZWN3LmVkdS5pbiIsImV4cCI6MTc4MjM4NDc0MSwiaWF0IjoxNzgyMzgzODQxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNzVhYTU3YzYtM2VjYy00ZjhjLTk1YzgtMTdkYThiZTc3ZDFlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZGFuZGFtdWRpIHNhaSB5YXN3aXRoYSIsInN1YiI6ImY5YmZkMDg3LWQxMTgtNDk4Yy1iNDI0LTg4MDNiZTViOTBiNiJ9LCJlbWFpbCI6IjIzYjAxYTQyMzFAc3ZlY3cuZWR1LmluIiwibmFtZSI6ImRhbmRhbXVkaSBzYWkgeWFzd2l0aGEiLCJyb2xsTm8iOiIyM2IwMWE0MjMxIiwiYWNjZXNzQ29kZSI6ImFoWGp2cCIsImNsaWVudElEIjoiZjliZmQwODctZDExOC00OThjLWI0MjQtODgwM2JlNWI5MGI2IiwiY2xpZW50U2VjcmV0IjoidGdYekNCVXlLY1JWeGROUCJ9.69NqN6ZeCRj-H_771H-qGcavmMvAEDryYTzO_yRysXo";
export async function fetchNotifications(limit = 10, page = 1, type = "All") {
  let url = `${API_URL}?limit=${limit}&page=${page}`;

  if (type !== "All") {
    url += `&notification_type=${type}`;
  }

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const data = await response.json();

    await Log("frontend", "info", "api", "Fetched notifications");

    return data.notifications || [];
  } catch (error) {
    await Log("frontend", "error", "api", "Fetch failed");
    return [];
  }
}