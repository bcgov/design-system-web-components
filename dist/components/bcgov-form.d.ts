import type { Components, JSX } from "../types/components";

interface BcgovForm extends Components.BcgovForm, HTMLElement {}
export const BcgovForm: {
    prototype: BcgovForm;
    new (): BcgovForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
