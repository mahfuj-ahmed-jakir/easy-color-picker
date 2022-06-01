import React from "react";

const MultiPicker = ({ items = ["Red", "Yellow", "Blue", "Black", "Orange", "Green", "White", "Purple", "Indigo", "Violet", "Gray", "Pink", "Gold", "Crimson", "Navy", "Teal", "YellowGreen", "Olive", "Magenta", "Maroon", "Orchid", "Chocolate", "DarkSlateGray", "Tomato"], background = "#f1f1f1", radius = "50%", size = "30px", width = "280px" }) => {
  return (
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
          borderRadius: "2px",
          padding: "4px",
          width: "auto",
          background: background,
        }}
      >
        {items.map((color, index) => (
          <div
            key={index}
            style={{
              margin: "2px",
              background: color,
              height: size,
              width: size,
              cursor: "pointer",
              borderRadius: radius,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MultiPicker;
