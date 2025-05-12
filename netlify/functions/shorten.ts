import type { Handler } from "@netlify/functions";

const handler: Handler = async (e) => {
  try {
    const { url } = JSON.parse(e.body || "{}");
    const apiUrl = "https://cleanuri.com/api/v1/shorten";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Server error",
        details: (error as Error).message,
      }),
    };
  }
};

export { handler };
