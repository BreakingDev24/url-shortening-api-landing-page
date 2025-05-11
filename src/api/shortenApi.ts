async function getData(url: string) {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = "https://cleanuri.com/api/v1/shorten";
  try {
    const response = await fetch(corsProxy + apiUrl, {
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
