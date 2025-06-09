import React, { useState, useEffect } from "react";

const OurTalent = () => {
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/talents")
      .then((response) => response.json())
      .then((data) => setTalents(data))
      .catch((error) => console.error("Error fetching talents:", error));
  }, []);

  return (
    <>
      <h1>Our Talent</h1>
      <div className="talent">
        {talents.map((talent) => (
          <div key={talent} className="talent-item">
            <img src={talent} alt={talent} />
            <p>{talent}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurTalent;
