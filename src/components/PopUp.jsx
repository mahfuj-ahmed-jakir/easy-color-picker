import React from "react";

export const PopUp = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.75)",
        position: "fixed",
        left: "0",
        top: "0",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
