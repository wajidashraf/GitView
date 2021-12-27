import React from "react";

export const Loader = () => {
  return (
    <div>
      <h1
        style={{
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#999",
        }}
      >
        Loading...
      </h1>
    </div>
  );
};
export const NotFound = () => {
  return (
    <div>
      <h1
        style={{
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#999",
        }}
      >
         😞 No Record Found 
      </h1>
    </div>
  );
};


