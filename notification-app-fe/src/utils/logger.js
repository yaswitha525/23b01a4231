const LOG_API = "http://4.224.186.213/evaluation-service/logs";

// Paste the same JWT token here (WITHOUT "Bearer")
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2IwMWE0MjMxQHN2ZWN3LmVkdS5pbiIsImV4cCI6MTc4MjM4MjU2MiwiaWF0IjoxNzgyMzgxNjYyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMzBhOTA0MWQtYjQzZS00OWM4LWI5M2UtNjc0ZGQ5NGRiMDkyIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZGFuZGFtdWRpIHNhaSB5YXN3aXRoYSIsInN1YiI6ImY5YmZkMDg3LWQxMTgtNDk4Yy1iNDI0LTg4MDNiZTViOTBiNiJ9LCJlbWFpbCI6IjIzYjAxYTQyMzFAc3ZlY3cuZWR1LmluIiwibmFtZSI6ImRhbmRhbXVkaSBzYWkgeWFzd2l0aGEiLCJyb2xsTm8iOiIyM2IwMWE0MjMxIiwiYWNjZXNzQ29kZSI6ImFoWGp2cCIsImNsaWVudElEIjoiZjliZmQwODctZDExOC00OThjLWI0MjQtODgwM2JlNWI5MGI2IiwiY2xpZW50U2VjcmV0IjoidGdYekNCVXlLY1JWeGROUCJ9.JsAd0U9HoanGIsJ7AuBOapWjxQvKvcHcf2n6fEQVp80";

export async function Log(stack, level, packageName, message) {
  try {
    await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}