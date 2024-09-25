# React DS Components

A collection of reusable React components to speed up your development process.

[![NPM Version](https://img.shields.io/npm/v/my-awesome-package.svg)](https://www.npmjs.com/package/my-awesome-package)
[![License](https://img.shields.io/npm/l/my-awesome-package.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this package using npm or yarn:

```bash
npm install rahul-ds
```

```bash
yarn add rahul-ds
```

## Usage

After installing the package, you can import and use the components in your React application. Here’s a basic example of how to use some of the available components:

Importing Components

```javascript
import React from "react";
import { Button, Badge, InputBox, Dropdown, Notification } from "rahul-ds";
import "../node_modules/rahul-ds/src/style.css";
```

Basic Usage Example
Here’s an example demonstrating how to use the components in a functional component:

```javascript
import React, { useState } from "react";
import { Button, InputBox, Dropdown, Notification } from "rahul-ds";
import "../node_modules/rahul-ds/src/style.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [notificationVisible, setNotificationVisible] = useState(false);

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleButtonClick = () => {
    setNotificationVisible(true);
  };

  return (
    <div>
      <InputBox
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <Dropdown
        options={options}
        onChange={(e) => console.log(e.target.value)}
        placeholder="Select an option"
      />
      <Button label="Submit" onClick={handleButtonClick} />
      {notificationVisible && (
        <Notification
          message="Your input has been submitted!"
          onClose={() => setNotificationVisible(false)}
        />
      )}
    </div>
  );
};

export default App;
```

## Available Components

1. Button

```javascript
<Button label="Button Text" onClick={handleClick} />
```

2. Badge

```javascript
<Badge text="New" size="medium" variant="primary" />
```

3. InputBox

```javascript
<InputBox
  type="text"
  value={inputValue}
  onChange={handleChange}
  placeholder="Enter text here"
/>
```

4. Dropdown

```javascript
<Dropdown
  options={[
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
  ]}
  onChange={handleSelect}
/>
```

5. Notification

```javascript
<Notification message="This is a notification!" onClose={handleClose} />
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
