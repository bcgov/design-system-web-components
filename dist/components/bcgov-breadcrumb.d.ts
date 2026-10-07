import type { Components, JSX } from "../types/components";

interface BcgovBreadcrumb extends Components.BcgovBreadcrumb, HTMLElement {}
export const BcgovBreadcrumb: {
    prototype: BcgovBreadcrumb;
    new (): BcgovBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
