export declare class BcgovButton {
    /** The action of the button. */
    link: string;
    /** default state of button if applicable */
    targetHidden: string;
    /** Add a callback to handle events */
    eventHandler: Function;
    /** Style of button */
    buttonStyle: "primary" | "secondary" | "dark" | "hamburger" | "search" | "search-inline" | "search-inline-close";
    /** A tag target */
    target: "_self" | "_blank" | "_parent" | "_top" | null;
    /** Target, only used on hamburger and search */
    dataTarget: string;
    breakpoint: number;
    el: HTMLElement;
    eventHandlerFunction(): void;
    componentDidRender(): void;
    componentWillLoad(): void;
    getParentBreakpoint(): number;
    isDesktop(): boolean;
    onClick(event: any): boolean;
    render(): any;
}
