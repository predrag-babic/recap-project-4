async function checkContrast(hex, contrastText) {
  const response = await fetch(
    "https://www.aremycolorsaccessible.com/api/are-they",
    {
      method: "POST",
      body: JSON.stringify({
        foregroundColor: contrastText,
        backgroundColor: hex,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error("Failed to fetch!!");
    return null;
  }
}
