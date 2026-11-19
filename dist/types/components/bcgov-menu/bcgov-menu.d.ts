export declare class BcgovMenu {
    /** Horizontal alignment of the top-level list. */
    alignment: string;
    /** Viewport width at which the menu switches to desktop styling. */
    breakpoint: number;
    /** Accessible name for the navigation landmark. */
    label: string;
    /** Apply primary header-navigation styling and a mobile close button. */
    primary: boolean;
    /** Use the compact sidebar layout. */
    sidebar: boolean;
    el: HTMLElement;
    componentWillLoad(): void;
    onResize(): void;
    onClick(event: Event): void;
    onFocusOut(event: FocusEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    private updateDesktop;
    private initializeDisclosures;
    private getSubmenu;
    private setExpanded;
    private getListItems;
    render(): any;
}
