export declare class BcgovButton {
    /** The action of the button. */
    link: string;
    /** Add a callback to handle events */
    eventHandler: Function;
    /** Style of button */
    buttonStyle: "primary" | "secondary" | "dark" | "hamburger" | "search";
    /** Target, only used on hamburger and search */
    target: string;
    breakpoint: number;
    el: HTMLElement;
    eventHandlerFunction(): void;
    componentDidRender(): void;
    componentWillLoad(): void;
    getParentBreakpoint(): number;
    isDesktop(): boolean;
    onClick(): void;
    render(): any;
}
