import type { Components, JSX } from "../types/components";

interface BcgovButton extends Components.BcgovButton, HTMLElement {}
export const BcgovButton: {
    prototype: BcgovButton;
    new (): BcgovButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
