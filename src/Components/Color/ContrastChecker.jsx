import { useEffect, useState } from "react";

export default function ContrastChecker({ hex, contrastText }) {
  const [result, setResult] = useState("");

  useEffect(() => {
    async function postFetch() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            body: JSON.stringify({ colors: [contrastText, hex] }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contrastData = await response.json();
        const contrastScore = contrastData.overall;

        setResult(contrastScore);
      } catch (error) {
        console.error("Error fetching contrast score:", error);
        setResult("Error fetching contrast score");
      }
    }
    postFetch();
  }, [hex, contrastText]);

  return <div>Contrast Score: {result}</div>;
}
