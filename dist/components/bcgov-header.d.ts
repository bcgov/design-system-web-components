import type { Components, JSX } from "../types/components";

interface BcgovHeader extends Components.BcgovHeader, HTMLElement {}
export const BcgovHeader: {
    prototype: BcgovHeader;
    new (): BcgovHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
