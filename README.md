# [React Easy Color Picker](http://mahfuj.me/)

* **Different Pickers** - You can take one or many colors in your array
* **Make Your Own** - You can add colors yourself and customize the design to your liking
* It has been built for the convenience of development and design

## Design Demo
![Demo](https://gcdnb.pbrd.co/images/aePPPObvnWlB.png)
[**Live Demo**](http://mafhuj.me/)

## What is this?

This is a react color picker. Easy Color Picker is a very nice package for developers and designers to grab colors from web pages or select from the color-picker board.

## Installation & Usage

```
npm i easy-color-picker --save
```

## Include the Component

```
import React, { useState } from "react";
import { ColorPicker } from "easy-color-picker";

const Component = () => {
  let [color, setColor] = useState([]);

  return (
    <React.Fragment>
      <ColorPicker selectOne={(color) => setColor(color)} />
    </React.Fragment>
  );
};
```

## Customize

```
import React, { useState } from "react";
import { ColorPicker } from "easy-color-picker";

const Component = () => {
  let [color, setColor] = useState([]);

  let colors = ["Red", "Yellow", "Blue", "Black", "Orange", "Green", "White", "Purple", "Indigo", "Violet", "Gray", "Pink", "Gold", "Crimson", "Navy", "Teal", "YellowGreen", "Olive", "#000000", "#ffffff", "#f1f1f1", "#d9d9d9", "#202020", "#101010"];

  return (
    <React.Fragment>
      <ColorPicker
      colors={colors}
      background="#dddddd"
      size="20px"
      radius="2px"
      width="658px"
      selectOne={(color) => setColor(color)}
      />
    </React.Fragment>
  );
};
```

* Thanks for using our package
