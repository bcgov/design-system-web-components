import type { Components, JSX } from "../types/components";

interface BcgovCallout extends Components.BcgovCallout, HTMLElement {}
export const BcgovCallout: {
    prototype: BcgovCallout;
    new (): BcgovCallout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
