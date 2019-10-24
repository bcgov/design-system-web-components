export declare class BcgovMenu {
    alignment: string;
    allTags: NodeList;
    menuId: string;
    instructions: string;
    isSubmenu: boolean;
    href: string;
    name: string;
    clone: Node;
    el: any;
    getInstructions(): string;
    componentWillLoad(): void;
    componentDidRender(): void;
    onMouseEnter(ev: Event): void;
    onMouseLeave(ev: Event): void;
    showSubmenu: (target: Element, expanded: boolean) => void;
    render(): any;
}
