# What is this?

This is react color picker for easy development. This is now development mode. Please wait for stable version.

# Installation

```
npm i easy-color-picker --save
```

# How to use this?

```
// If you want single color code? use this!

import { OnePicker } from "easy-color-picker"

let [color, setColor] = useState("");

<OnePicker onClick={(color) => setColor(color)} />
```

```
// If you want multiple color code? use this!
// MultiplePicker is under construction, please wait for stable version.

<MultiplePicker />
```

```
// If you want popup selection? follow this!

import { OnePicker } from "easy-color-picker"

let [showHide, setShowHide] = useState(false);
let [color, setColor] = useState("");

let handleSelect = (color) => {
    setColor(color)
    setShowHide(!showHide)
};

<button onClick={() => setShowHide(!showHide)}>Show and Hide</button>

// Add this in return last line or any where.
{showHide ?
    <PopUp>
        <OnePicker onClick={(color) => handleSelect(color)} />
    </PopUp>
    : ""}
```

# Options

```
// If you want to customize
<OnePicker background="#f1f1f1" radius="50%" size="30px" width="280px" onClick={(color) => setColor(color)} />
```
