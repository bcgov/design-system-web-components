import type { Components, JSX } from "../types/components";

interface BcgovTab extends Components.BcgovTab, HTMLElement {}
export const BcgovTab: {
    prototype: BcgovTab;
    new (): BcgovTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
