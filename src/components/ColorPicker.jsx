import React from "react";

const ColorPicker = ({ items = ["Red", "Yellow", "Blue", "Black", "Orange", "Green", "White", "Purple", "Indigo", "Violet", "Gray", "Pink", "Gold", "Crimson", "Navy", "Teal", "YellowGreen", "Olive", "Magenta", "Maroon", "Orchid", "Chocolate", "DarkSlateGray", "Tomato"], background = "#f1f1f1", radius = "50%", size = "30px", width = "280px", bgRadius = "2px", preview = [], onClick }) => {
  return (
    <>
      <div
        style={{
          maxWidth: "1920px",
          minWidth: "76px",
          width: width,
          marginBottom: "2px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "auto",
          }}
        >
          {preview.map((code, index) => (
            <div
              key={index}
              style={{
                margin: "2px",
                background: code,
                height: size,
                width: size,
                cursor: "pointer",
                borderRadius: radius,
                border: "2px solid rgba(0, 0, 0, 0.25)",
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* Show Color Code */}
      <div
        style={{
          maxWidth: "1920px",
          minWidth: "76px",
          width: width,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "4px",
            width: "auto",
            borderRadius: bgRadius,
            background: background,
          }}
        >
          {items.map((code, index) => (
            <div
              key={index}
              onClick={() => onClick(code)}
              style={{
                margin: "2px",
                background: code,
                height: size,
                width: size,
                cursor: "pointer",
                borderRadius: radius,
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
