import React from "react";

export const EpisodesCard = ({ name, air_date }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", border: "1px solid",  }}>
      <span>{name}</span>
      <span>{air_date}</span>
    </div>
  );
};
