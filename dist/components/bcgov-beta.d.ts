import type { Components, JSX } from "../types/components";

interface BcgovBeta extends Components.BcgovBeta, HTMLElement {}
export const BcgovBeta: {
    prototype: BcgovBeta;
    new (): BcgovBeta;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
