# Luna Tabs
LunaTabs adds basic tabbing functionality for your applications. LunaTabs allows developers to take full control over styling and animations while automatically adding accessibility.

## Example
There are three required data attributes to setup our tabs. `data-luna-tabs` is used on our wrapper element which contains both our tab buttons and the tabbed content. `data-luna-tab` used on our tab buttons. These require a unique name that relate them to the `data-luna-tab-target` which contains each of our tabbed elements content.

## Basic Markup
```html
<div data-luna-tabs>

  <div class="tab-buttons" aria-label="Tabs">
    <button id="tab-1" type="tab" data-luna-tab="tab-1" aria-controls="panel-1">Tab 1</button>
    <button id="tab-1" type="tab" data-luna-tab="tab-2" aria-controls="panel-2">Tab 2</button>
    <button id="tab-1" type="tab" data-luna-tab="tab-3" aria-controls="panel-3">Tab 3</button>
  </div>

  <div class="tab-container">
    <div id="panel-1" data-luna-tab-target="tab-1" aria-labelledby="tab-1">Tab Content 1</div>
    <div id="panel-1" data-luna-tab-target="tab-2" aria-labelledby="tab-2">Tab Content 2</div>
    <div id="panel-1" data-luna-tab-target="tab-3" aria-labelledby="tab-3">Tab Content 3</div>
  </div>

</div>
```

## initialization

1. Firstly install the LunaTabs package via npm.

```bash
npm install luna-tabs
```

2. import the class.

```js
import LunaTabs from 'luna-tabs';
```

3. Initialize the class.

```js
// Initialize all tab elements by data attribute.
const allTabs = document.querySelectorAll('[data-luna-tabs]');

allTabs.forEach(tabs => {
  const tabContainer = new LunaTabs(tabs);
});

// Initialize a specific element.
const tabs = document.querySelector('[data-luna-tabs]');
const tabContainer = new LunaTabs(tabs);
```

LunaTabs will apply an `is-active` class to both the tab button and the tab content element.

A basic reveal for tab content could be as follows:

```scss
[data-luna-tab-target] {
  visibility: hidden;

  &.is-active {
    visibility: visible;
  }
}
```