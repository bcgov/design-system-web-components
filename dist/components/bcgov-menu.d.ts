import type { Components, JSX } from "../types/components";

interface BcgovMenu extends Components.BcgovMenu, HTMLElement {}
export const BcgovMenu: {
    prototype: BcgovMenu;
    new (): BcgovMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
