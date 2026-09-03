import type { Components, JSX } from "../types/components";

interface BcgovFooter extends Components.BcgovFooter, HTMLElement {}
export const BcgovFooter: {
    prototype: BcgovFooter;
    new (): BcgovFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
