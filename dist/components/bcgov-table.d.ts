import type { Components, JSX } from "../types/components";

interface BcgovTable extends Components.BcgovTable, HTMLElement {}
export const BcgovTable: {
    prototype: BcgovTable;
    new (): BcgovTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
