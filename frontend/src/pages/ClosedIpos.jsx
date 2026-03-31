import React, { useEffect, useState } from "react";

const ClosedIpos = () => {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/ipo/live`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);

        // ⚠️ format data (important)
        const formatted = data.map((ipo) => ({
          name: ipo.name || ipo.companyName,
          price: ipo.issuePrice || ipo.issue_price || ipo.price,
          closeDate: ipo.closeDate || ipo.close_date || ipo.closingDate,
        }));

        setIpos(formatted);
      });
  }, []);

  return (
    <div>
      <h2>Closed IPOs (Live)</h2>

      {ipos.map((ipo, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{ipo.name}</h3>
          <p>Price: {ipo.price}</p>
          <p>Close Date: {ipo.closeDate}</p>
        </div>
      ))}
    </div>
  );
};

export default ClosedIpos;