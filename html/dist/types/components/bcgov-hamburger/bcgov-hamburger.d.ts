export declare class BcgovHamburger {
    /** The target */
    target: string;
    /** Breakpoint */
    breakpoint: number;
    el: any;
    onClick(event: Event): void;
    componentWillLoad(): void;
    getParentBreakpoint(): number;
    isDesktop(): boolean;
    render(): any;
}
