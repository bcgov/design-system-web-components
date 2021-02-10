export declare class BcgovHeader {
  /** link for logo */
  href: string;
  /** Logo options -- might not work... */
  logo: "" | "gov_bc_logo.svg" | "gov_bc_logo_white.png" | "gov_bc_logo_grey.jpg";
  el: any;
  componentWillLoad(): void;
  componentDidRender(): void;
  getImage(): string;
  render(): any;
}
