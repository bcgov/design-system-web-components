export declare class BcgovButton {
    /** The action of the button. */
    link: string;
    /** Add a callback to handle events */
    eventHandler: Function;
    /** Creates Primary button  */
    primary?: string;
    /** Creates Secondary button  */
    secondary?: string;
    /** Creates Dark button  */
    dark?: string;
    el: HTMLElement;
    eventHandlerFunction(): void;
    buttonStyle(): string;
    componentDidRender(): void;
    render(): any;
}
