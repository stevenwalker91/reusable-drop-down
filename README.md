# Reusable Dropdown

## Overview

Small project as part of Odin Project curriculum to ceate a dropdown button that can be re-used across projets.

The code creates the necessary styles for showing and displaying the dropdown content and appends it to the HTML document as a style. This removes the need for anyone using the component to add specific style to show or hide. 

Additional styling is not applied as it is assumed anyone using the component will want to apply their own styling.

## Usage
1. Install the package in project: `npm install @woftis/reusable-drop-down --save`
2. Import the package in your JS file: `import initaliseDropdown from "@woftis/reusable-drop-down";`
3. Initialise by calling `initialiseDropdown();`



In order to use the component create a `button` with a class of `dropdown-btn` immediately proceeded by a `div` with a class of `dropdown-container`. The `div` will then contain any drop down content.

Example:
```html
    <button class="dropdown-btn" type="button">Click me</button>
    <div class="dropdown-container">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
    </div>
```
* Note that the code creates event listeners, so if dropdowns are being created dynamically, the `initialiseDropdown` function should be called _after_ any components are dynamically created.