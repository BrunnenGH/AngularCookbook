/* tslint:disable */
const createStorageMock = () => {
  let storage = {};
  return {
    getItem: key => key in storage ? storage[key] : null,
    setItem: (key, value) => storage[key] = value || '',
    removeItem: key => delete storage[key],
    clear: () => storage = {},
  };
};

Object.defineProperty(window, 'CSS', {value: null});
Object.defineProperty(window, 'localStorage', {value: createStorageMock()});
Object.defineProperty(window, 'sessionStorage', {value: createStorageMock()});
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});
/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});

Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {}
    };
  }
});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      getPropertyValue: () => {}
    };
  }
});

Object.defineProperty(window, 'MutationObserver', {
  value: () => {
    return {
      observe: () => {}
    };
  }
});

/**
 * ISSUE: https://github.com/thymikee/jest-preset-angular/issues/170
 * Workaround: https://github.com/angular/angular/issues/24094
 */
if (document.body.style.animation === undefined && CSSStyleDeclaration) {
  CSSStyleDeclaration.prototype.animation = '';
}

if (document.body.style['animation-name'] === undefined && CSSStyleDeclaration) {
  CSSStyleDeclaration.prototype['animation-name'] = '';
  CSSStyleDeclaration.prototype['animationName'] = '';
}

if (document.body.style['animation-duration'] === undefined && CSSStyleDeclaration) {
  CSSStyleDeclaration.prototype['animation-duration'] = '';
  CSSStyleDeclaration.prototype['animationDuration'] = '';
}

if (document.body.style['animation-play-state'] === undefined && CSSStyleDeclaration) {
  CSSStyleDeclaration.prototype['animation-play-state'] = '';
  CSSStyleDeclaration.prototype['animationPlayState'] = '';
}

