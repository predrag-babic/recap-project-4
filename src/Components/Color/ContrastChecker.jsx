import { useEffect, useState } from "react";

export default function ContrastChecker({ hex, contrastText }) {
  const [result, setResult] = useState("");

  useEffect(() => {
    async function postFetch() {
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
      const contrastData = await response.json();
      const contrastScore = contrastData.overall;

      setResult(contrastScore);
    }
    postFetch();
  }, [hex, contrastText]);

  return <div>Contrast Score: {result}</div>;
}
