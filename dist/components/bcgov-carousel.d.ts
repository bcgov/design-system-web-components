import type { Components, JSX } from "../types/components";

interface BcgovCarousel extends Components.BcgovCarousel, HTMLElement {}
export const BcgovCarousel: {
    prototype: BcgovCarousel;
    new (): BcgovCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
