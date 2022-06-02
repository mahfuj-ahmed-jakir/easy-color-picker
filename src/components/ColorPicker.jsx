import React from "react";

const ColorPicker = ({ colors = ["Red", "Yellow", "Blue", "Black", "Orange", "Green", "White", "Purple", "Indigo", "Violet", "Gray", "Pink", "Gold", "Crimson", "Navy", "Teal", "YellowGreen", "Olive", "Magenta", "Maroon", "Orchid", "Chocolate", "DarkSlateGray", "Tomato"], background = "#f1f1f1", radius = "50%", size = "30px", width = "280px", onClick }) => {
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
        {colors.map((color, index) => (
          <div
            onClick={() => onClick(color)}
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

export default ColorPicker;
