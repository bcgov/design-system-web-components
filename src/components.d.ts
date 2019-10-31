/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface BcgovBeta {
    'content': string;
    'label': string;
  }
  interface BcgovButton {
    /**
    * Style of button
    */
    'buttonStyle': "primary" | "secondary" | "dark" | "hamburger" | "search";
    /**
    * Add a callback to handle events
    */
    'eventHandler': Function;
    /**
    * The action of the button.
    */
    'link': string;
    /**
    * Target, only used on hamburger and search
    */
    'target': string;
  }
  interface BcgovCallout {}
  interface BcgovFooter {}
  interface BcgovForm {}
  interface BcgovHeader {
    /**
    * link for logo
    */
    'href': string;
  }
  interface BcgovMenu {
    /**
    * Alignment of menu
    */
    'alignment': string;
    /**
    * A number that represents mobile menu breakpoint in px;
    */
    'breakpoint': number;
    /**
    * Automatically adds hamburger.
    */
    'hamburger': boolean;
    /**
    * Link for menu
    */
    'href': string;
    /**
    * Aria Instructions
    */
    'instructions': string;
    /**
    * Menu id used for instructions TODO: this might need more consideration
    */
    'menuId': string;
    /**
    * Label for submenu
    */
    'name': string;
    'primary': string;
  }
  interface BcgovSearch {}
  interface BcgovSectionDivider {
    'margins': any;
    'thickness': any;
  }
}

declare global {


  interface HTMLBcgovBetaElement extends Components.BcgovBeta, HTMLStencilElement {}
  var HTMLBcgovBetaElement: {
    prototype: HTMLBcgovBetaElement;
    new (): HTMLBcgovBetaElement;
  };

  interface HTMLBcgovButtonElement extends Components.BcgovButton, HTMLStencilElement {}
  var HTMLBcgovButtonElement: {
    prototype: HTMLBcgovButtonElement;
    new (): HTMLBcgovButtonElement;
  };

  interface HTMLBcgovCalloutElement extends Components.BcgovCallout, HTMLStencilElement {}
  var HTMLBcgovCalloutElement: {
    prototype: HTMLBcgovCalloutElement;
    new (): HTMLBcgovCalloutElement;
  };

  interface HTMLBcgovFooterElement extends Components.BcgovFooter, HTMLStencilElement {}
  var HTMLBcgovFooterElement: {
    prototype: HTMLBcgovFooterElement;
    new (): HTMLBcgovFooterElement;
  };

  interface HTMLBcgovFormElement extends Components.BcgovForm, HTMLStencilElement {}
  var HTMLBcgovFormElement: {
    prototype: HTMLBcgovFormElement;
    new (): HTMLBcgovFormElement;
  };

  interface HTMLBcgovHeaderElement extends Components.BcgovHeader, HTMLStencilElement {}
  var HTMLBcgovHeaderElement: {
    prototype: HTMLBcgovHeaderElement;
    new (): HTMLBcgovHeaderElement;
  };

  interface HTMLBcgovMenuElement extends Components.BcgovMenu, HTMLStencilElement {}
  var HTMLBcgovMenuElement: {
    prototype: HTMLBcgovMenuElement;
    new (): HTMLBcgovMenuElement;
  };

  interface HTMLBcgovSearchElement extends Components.BcgovSearch, HTMLStencilElement {}
  var HTMLBcgovSearchElement: {
    prototype: HTMLBcgovSearchElement;
    new (): HTMLBcgovSearchElement;
  };

  interface HTMLBcgovSectionDividerElement extends Components.BcgovSectionDivider, HTMLStencilElement {}
  var HTMLBcgovSectionDividerElement: {
    prototype: HTMLBcgovSectionDividerElement;
    new (): HTMLBcgovSectionDividerElement;
  };
  interface HTMLElementTagNameMap {
    'bcgov-beta': HTMLBcgovBetaElement;
    'bcgov-button': HTMLBcgovButtonElement;
    'bcgov-callout': HTMLBcgovCalloutElement;
    'bcgov-footer': HTMLBcgovFooterElement;
    'bcgov-form': HTMLBcgovFormElement;
    'bcgov-header': HTMLBcgovHeaderElement;
    'bcgov-menu': HTMLBcgovMenuElement;
    'bcgov-search': HTMLBcgovSearchElement;
    'bcgov-section-divider': HTMLBcgovSectionDividerElement;
  }
}

declare namespace LocalJSX {
  interface BcgovBeta {
    'content'?: string;
    'label'?: string;
  }
  interface BcgovButton {
    /**
    * Style of button
    */
    'buttonStyle'?: "primary" | "secondary" | "dark" | "hamburger" | "search";
    /**
    * Add a callback to handle events
    */
    'eventHandler'?: Function;
    /**
    * The action of the button.
    */
    'link'?: string;
    /**
    * Target, only used on hamburger and search
    */
    'target'?: string;
  }
  interface BcgovCallout {}
  interface BcgovFooter {}
  interface BcgovForm {}
  interface BcgovHeader {
    /**
    * link for logo
    */
    'href'?: string;
  }
  interface BcgovMenu {
    /**
    * Alignment of menu
    */
    'alignment'?: string;
    /**
    * A number that represents mobile menu breakpoint in px;
    */
    'breakpoint'?: number;
    /**
    * Automatically adds hamburger.
    */
    'hamburger'?: boolean;
    /**
    * Link for menu
    */
    'href'?: string;
    /**
    * Aria Instructions
    */
    'instructions'?: string;
    /**
    * Menu id used for instructions TODO: this might need more consideration
    */
    'menuId'?: string;
    /**
    * Label for submenu
    */
    'name'?: string;
    'primary'?: string;
  }
  interface BcgovSearch {}
  interface BcgovSectionDivider {
    'margins'?: any;
    'thickness'?: any;
  }

  interface IntrinsicElements {
    'bcgov-beta': BcgovBeta;
    'bcgov-button': BcgovButton;
    'bcgov-callout': BcgovCallout;
    'bcgov-footer': BcgovFooter;
    'bcgov-form': BcgovForm;
    'bcgov-header': BcgovHeader;
    'bcgov-menu': BcgovMenu;
    'bcgov-search': BcgovSearch;
    'bcgov-section-divider': BcgovSectionDivider;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'bcgov-beta': LocalJSX.BcgovBeta & JSXBase.HTMLAttributes<HTMLBcgovBetaElement>;
      'bcgov-button': LocalJSX.BcgovButton & JSXBase.HTMLAttributes<HTMLBcgovButtonElement>;
      'bcgov-callout': LocalJSX.BcgovCallout & JSXBase.HTMLAttributes<HTMLBcgovCalloutElement>;
      'bcgov-footer': LocalJSX.BcgovFooter & JSXBase.HTMLAttributes<HTMLBcgovFooterElement>;
      'bcgov-form': LocalJSX.BcgovForm & JSXBase.HTMLAttributes<HTMLBcgovFormElement>;
      'bcgov-header': LocalJSX.BcgovHeader & JSXBase.HTMLAttributes<HTMLBcgovHeaderElement>;
      'bcgov-menu': LocalJSX.BcgovMenu & JSXBase.HTMLAttributes<HTMLBcgovMenuElement>;
      'bcgov-search': LocalJSX.BcgovSearch & JSXBase.HTMLAttributes<HTMLBcgovSearchElement>;
      'bcgov-section-divider': LocalJSX.BcgovSectionDivider & JSXBase.HTMLAttributes<HTMLBcgovSectionDividerElement>;
    }
  }
}


