# [React Easy Color Picker](http://mahfuj.me/)

* **Different Pickers** - You can take one or many colors in your array
* **Make Your Own** - You can add colors yourself and customize the design to your liking
* It has been built for the convenience of development and design

## Demo Design
![Demo](https://gcdnb.pbrd.co/images/aePPPObvnWlB.png)
[**Live Demo**](http://mahfuj.me/)

## What is this?

This is a react color picker. Easy Color Picker is a very nice package for developers and designers to grab colors from web pages or select from the color-picker board.

## Installation

```
npm i easy-color-picker --save
```

## Usage

* Use this `let [color, setColor] = useState("");` and `onClick={(code) => setColor(code)}` for get single color/code.

* Use this `let [color, setColor] = useState([]);` and `onClick={(code) => setColor([code])}` for get single color/code with array.

* Use this `let [color, setColor] = useState([]);` and `onClick={(code) => setColor([...color, code])}` for get multiple color/code with array.

```
import React, { useState } from "react";
import { ColorPicker } from "easy-color-picker";

const Component = () => {
  let [color, setColor] = useState("");

  return (
    <>
      <ColorPicker onClick={(code) => setColor(code)} />
    </>
  );
};
```

## Customize

```
import React, { useState } from "react";
import { ColorPicker } from "easy-color-picker";

const Component = () => {
  let [color, setColor] = useState([]);

  let items = ["Red", "Yellow", "Blue", "Black", "Orange", "Green", "White"
  "Purple", "Indigo", "Violet", "Gray", "Pink", "Gold", "Crimson", "Navy",
  "Teal", "YellowGreen", "Olive", "#000000", "#ffffff", "#f1f1f1", "#d9d9d9",
  "#202020", "#101010"];

  return (
    <>
      <ColorPicker
        items={items}  // "items" for custom color add, it need must be [Array]
        preview={color}  // "preview" for color review, here use color array for reveiw
        background="#dddddd"  // "background" for customize background
        size="30px"  // "size" for customize color size
        radius="2px"  // "radius" for customize color radius
        width="280px"  // "width" for customize background width
        bgRadius="2px"  // "bgRadius" for customize background radius
        onClick={(code) => setColor([...color, code])}  // "onClick" for get value
      />
    </>
  );
};
```

* Thanks for using our package
