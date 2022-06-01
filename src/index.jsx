import React from "react";

const OnePicker = () => {
  return (
    <div
      style={{
        padding: "4px",
        background: "#dddddd",
        width: "268px",
        borderRadius: "2px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "30px 30px 30px 30px 30px 30px 30px 30px",
          gridColumnGap: "4px",
          gridRowGap: "4px",
        }}
      >
        <div
          style={{
            background: "red",
            height: "30px",
            width: "30px",
            borderRadius: "2px",
            cursor: "pointer",
          }}
        ></div>
        <div
          style={{
            background: "blue",
            height: "30px",
            width: "30px",
            borderRadius: "2px",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </div>
  );
};

export { OnePicker };
