import { Element } from "../../stencil-public-runtime";
export declare class BcgovMenu {
  /** Alignment of menu */
  alignment: string;
  primary: string;
  sidebar: string;
  /** Menu id used for instructions
   * TODO: this might need more consideration
   */
  menuId: string;
  /** Aria Instructions */
  instructions: string;
  /** Link for menu */
  href: string;
  /** Label for submenu */
  name: string;
  /** A number that represents mobile menu breakpoint in px; */
  breakpoint: number;
  /** Automatically adds hamburger. */
  hamburger: boolean;
  active: boolean;
  /** Adds hover to submenues */
  allowHover: boolean;
  /** Changes timeout for submenu */
  menuTimeOut: number;
  isSubmenu: boolean;
  clone: Node;
  allTags: NodeList;
  bodyTag: Element;
  menuTimeOutState: any;
  el: any;
  componentWillLoad(): void;
  /**
   * This sets up inital attributes for sub menus
   */
  componentDidRender(): void;
  isDesktop(): boolean;
  onMouseEnter(ev: Event): void;
  onMouseLeave(event: Event): void;
  onClick(event: Event): void;
  onKeyDown(event: KeyboardEvent): void;
  focusChange(current: HTMLElement, direction?: string): void;
  showSubmenu: (target: Element, expanded: boolean) => void;
  render(): any;
}
