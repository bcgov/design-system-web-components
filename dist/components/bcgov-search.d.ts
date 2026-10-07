import type { Components, JSX } from "../types/components";

interface BcgovSearch extends Components.BcgovSearch, HTMLElement {}
export const BcgovSearch: {
    prototype: BcgovSearch;
    new (): BcgovSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
