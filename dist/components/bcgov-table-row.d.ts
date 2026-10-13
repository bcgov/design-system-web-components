import type { Components, JSX } from "../types/components";

interface BcgovTableRow extends Components.BcgovTableRow, HTMLElement {}
export const BcgovTableRow: {
    prototype: BcgovTableRow;
    new (): BcgovTableRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
