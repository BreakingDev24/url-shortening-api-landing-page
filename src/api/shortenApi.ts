async function getData(url: string) {
  try {
    const response = await fetch("/.netlify/functions/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getData;
