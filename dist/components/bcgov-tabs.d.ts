import type { Components, JSX } from "../types/components";

interface BcgovTabs extends Components.BcgovTabs, HTMLElement {}
export const BcgovTabs: {
    prototype: BcgovTabs;
    new (): BcgovTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
