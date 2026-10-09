export declare class BcgovTable {
    /** Breakpoint at which the table turns into rows. */
    breakpoint: number;
    /** The primary column. */
    primaryColumn: number;
    /** Shows header columns when not in table. */
    showColumnLabels: boolean;
    el: HTMLElement;
    componentWillLoad(): void;
    onWindowResize(): void;
    isTable(): void;
    render(): any;
}
