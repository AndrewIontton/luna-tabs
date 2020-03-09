export default class LunaTabs {
  constructor(container) {
    this.container = container;
    this.buttons = this.container.querySelectorAll('[data-luna-tab]');
    this.contents = this.container.querySelectorAll('[data-luna-tab-target]');
    this.init();
  }
  init() {
    this.setRoles();
    this.resetTabState();
    this.setActiveTab(this.buttons[0], this.contents[0]);
    this.clickEvents();
    this.keyEvents();
  }
  setRoles() {
    this.container.setAttribute('role', 'tablist');
    this.buttons.forEach(button => {
      button.setAttribute('role', 'tab');
      button.setAttribute('tabindex', '-1');
    });
    this.contents.forEach(content => {
      content.setAttribute('role', 'tabpanel');
      content.setAttribute('tabindex', 0);
    });
  }
  resetTabState() {
    this.buttons.forEach(button => {
      button.setAttribute('aria-selected', false);
      button.setAttribute('tabindex', '-1');
      button.classList.remove('is-active');
    });
    this.contents.forEach(content => {
      content.setAttribute('aria-hidden', true);
      content.classList.remove('is-active');
    });
  }
  setActiveTab(button, content) {
    button.setAttribute('aria-selected', true);
    button.setAttribute('tabindex', 0);
    button.classList.add('is-active');
    content.setAttribute('aria-hidden', false);
    content.classList.add('is-active');
  }
  clickEvents() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-luna-tab');
        const content = this.container.querySelector(`[data-luna-tab-target="${tabId}"]`);
        this.resetTabState();
        this.setActiveTab(button, content);
      });
    });
  }
  keyEvents() {
    const tabList = this.container.querySelector('[role="tablist"]');

    if (tabList === null) {
      return;
    }

    let tabFocus = 0;

    tabList.addEventListener('keydown', event => {
      if (event.keyCode === 39) {
        tabFocus++;
        if (tabFocus >= this.buttons.length) {
          tabFocus = 0;
        }
      } else if (event.keyCode === 37) {
        tabFocus--;
        if (tabFocus < 0) {
          tabFocus = this.buttons.length - 1;
        }
      }
      this.buttons.forEach(button => {
        button.setAttribute('tabindex', '-1');
        button.blur();
      });
      this.buttons[tabFocus].setAttribute('tabindex', 0);
      this.buttons[tabFocus].focus();
    });
  }
}
