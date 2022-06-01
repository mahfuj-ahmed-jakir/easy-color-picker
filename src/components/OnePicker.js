import React, { useState } from "react";

const OnePicker = () => {
  let colorList = ["Red", "Yellow", "Blue", "Black", "Orange", "Green", "White", "Purple", "Indigo", "Violet", "Gray", "Pink", "Gold", "Crimson", "Navy", "Teal", "YellowGreen", "Olive", "Magenta", "Maroon", "Orchid", "Chocolate", "DarkSlateGray", "Tomato"];

  let [color, setColor] = useState("");

  console.log(color);

  return (
    <React.Fragment>
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
          {colorList.map((color, index) => (
            <div
              onClick={() => setColor(color)}
              key={index}
              style={{
                background: color,
                height: "30px",
                width: "30px",
                borderRadius: "2px",
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default OnePicker;
