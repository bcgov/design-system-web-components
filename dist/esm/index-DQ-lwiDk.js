const NAMESPACE = 'bcgov-web-components';
const BUILD = /* bcgov-web-components */ { hydratedSelectorName: "hydrated", lazyLoad: true, propChangeCallback: false, slotRelocation: true, state: true, updatable: true};

const globalScripts = () => {};
const globalStyles = "html{font-size:16px;line-height:1.6;-webkit-text-size-adjust:100%}h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6{margin:2rem 0 0.5rem;font-weight:bold}h1,.h1{margin-top:0;font-size:2.074rem}h2,.h2{font-size:1.728rem}h3,.h3{font-size:1.44rem}h4,.h4{font-size:1.2rem}p{margin:0 0 1.5rem}*,*::before,*::after{box-sizing:border-box}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:200}dd{margin-bottom:0.5rem;margin-left:0}blockquote{margin:0 0 1rem}body{margin:0;text-align:left;font-family:var(--bcgov-wc-font-family)}*:focus{outline-color:#3b99fc}body{color:#313132;background-color:#f1f1f1}body .bcgov-main{background:#f1f1f1}a,a.active,a:active,a:visited,a:focus{color:#1a5a96;text-decoration:underline}a:hover{color:#00f;text-decoration:none}a i{color:#1a5a96}bcgov-header,.bcgov-header{background-color:#036;border-bottom:2px solid #fcba19}bcgov-header header .banner img,.bcgov-header header .banner img{max-width:175px}bcgov-header .headline,bcgov-header a,.bcgov-header .headline,.bcgov-header a{color:#fff}form input,form input:not([type=submit]),form textarea,form select{border-color:#606060}form input[type=submit]{color:#fff;background-color:#036;border-color:#036}form input[type=radio]{border-color:#606060}form input[type=radio]:checked{background-color:#606060}form input[type=checkbox]{border-color:#606060}form input[type=checkbox]:checked{background-color:#606060}bcgov-menu[primary],bcgov-menu .primary{background-color:#38598a}bcgov-menu[primary].is-desktop,bcgov-menu .primary.is-desktop{background-color:#38598a}bcgov-search,.bcgov-search{border-color:#f1f1f1}bcgov-search form input,bcgov-search form input:not([type=search]),bcgov-search form select,.bcgov-search form input,.bcgov-search form input:not([type=search]),.bcgov-search form select{border-color:#f1f1f1}bcgov-button a.primary,bcgov-button button.primary,.bcgov-button a.primary,.bcgov-button button.primary{background-color:#036;color:#fff}bcgov-button a.primary:hover,bcgov-button button.primary:hover,.bcgov-button a.primary:hover,.bcgov-button button.primary:hover{background-color:rgba(0, 51, 102, 0.8)}bcgov-button a.primary:active,bcgov-button a.primary.active,bcgov-button button.primary:active,bcgov-button button.primary.active,.bcgov-button a.primary:active,.bcgov-button a.primary.active,.bcgov-button button.primary:active,.bcgov-button button.primary.active{background-color:rgba(0, 51, 102, 0.7)}bcgov-button a.primary:disabled,bcgov-button a.primary.disabled,bcgov-button button.primary:disabled,bcgov-button button.primary.disabled,.bcgov-button a.primary:disabled,.bcgov-button a.primary.disabled,.bcgov-button button.primary:disabled,.bcgov-button button.primary.disabled{background-color:rgba(0, 51, 102, 0.3)}bcgov-button a.secondary,bcgov-button button.secondary,.bcgov-button a.secondary,.bcgov-button button.secondary{background:none;border:2px solid #036;color:#036}bcgov-button a.secondary:active,bcgov-button a.secondary.active,bcgov-button button.secondary:active,bcgov-button button.secondary.active,.bcgov-button a.secondary:active,.bcgov-button a.secondary.active,.bcgov-button button.secondary:active,.bcgov-button button.secondary.active{color:#fff;background-color:rgba(0, 51, 102, 0.7);border-color:rgba(0, 51, 102, 0.7)}bcgov-button a.secondary:hover,bcgov-button button.secondary:hover,.bcgov-button a.secondary:hover,.bcgov-button button.secondary:hover{color:#fff;background-color:rgba(0, 51, 102, 0.8);border-color:rgba(0, 51, 102, 0.8)}bcgov-button a.secondary:disabled,bcgov-button a.secondary.disabled,bcgov-button button.secondary:disabled,bcgov-button button.secondary.disabled,.bcgov-button a.secondary:disabled,.bcgov-button a.secondary.disabled,.bcgov-button button.secondary:disabled,.bcgov-button button.secondary.disabled{color:rgba(0, 51, 102, 0.3) !important;border-color:rgba(0, 51, 102, 0.3) !important;background-color:transparent}bcgov-button a.dark,bcgov-button button.dark,.bcgov-button a.dark,.bcgov-button button.dark{background:none;color:#fff;border:2px solid #fff}bcgov-button a.dark:active,bcgov-button a.dark.active,bcgov-button button.dark:active,bcgov-button button.dark.active,.bcgov-button a.dark:active,.bcgov-button a.dark.active,.bcgov-button button.dark:active,.bcgov-button button.dark.active{color:#fff;background-color:#b8b8b8;border-color:#b8b8b8}bcgov-button a.dark:hover,bcgov-button button.dark:hover,.bcgov-button a.dark:hover,.bcgov-button button.dark:hover{background-color:#f1f1f1;color:#313132}bcgov-button a.dark:disabled,bcgov-button a.dark.disabled,bcgov-button button.dark:disabled,bcgov-button button.dark.disabled,.bcgov-button a.dark:disabled,.bcgov-button a.dark.disabled,.bcgov-button button.dark:disabled,.bcgov-button button.dark.disabled{color:rgba(255, 255, 255, 0.3) !important;border-color:rgba(255, 255, 255, 0.3) !important;background-color:transparent}bcgov-button a.hamburger,bcgov-button button.hamburger,.bcgov-button a.hamburger,.bcgov-button button.hamburger{font-size:0.8rem;border-color:transparent;background-color:#036;color:#fff}bcgov-button a.hamburger div,bcgov-button button.hamburger div,.bcgov-button a.hamburger div,.bcgov-button button.hamburger div{border-color:#fff}bcgov-button a.hamburger div:before,bcgov-button button.hamburger div:before,.bcgov-button a.hamburger div:before,.bcgov-button button.hamburger div:before{border-color:#fff}bcgov-button a.hamburger .bcgov-button-text,bcgov-button button.hamburger .bcgov-button-text,.bcgov-button a.hamburger .bcgov-button-text,.bcgov-button button.hamburger .bcgov-button-text{display:none}bcgov-button a.hamburger:hover,bcgov-button button.hamburger:hover,.bcgov-button a.hamburger:hover,.bcgov-button button.hamburger:hover{background-color:rgba(0, 51, 102, 0.8)}bcgov-button a.search,bcgov-button button.search,.bcgov-button a.search,.bcgov-button button.search{color:#fff;border-color:transparent;background-color:transparent}bcgov-button a.search .bcgov-button-text,bcgov-button button.search .bcgov-button-text,.bcgov-button a.search .bcgov-button-text,.bcgov-button button.search .bcgov-button-text{display:none}bcgov-breadcrumb{padding:1rem 0}bcgov-footer,.bcgov-footer{background-color:#036;border-top:2px solid #fcba19;color:#fff;padding-top:0.25rem;padding-bottom:0.25rem}bcgov-footer a,bcgov-footer a:visited,bcgov-footer a:active,bcgov-footer a:focus,.bcgov-footer a,.bcgov-footer a:visited,.bcgov-footer a:active,.bcgov-footer a:focus{color:#fff}bcgov-header,bcgov-footer,bcgov-menu.is-desktop[primary]{padding-right:1%;padding-left:1%}@media (min-width: 987px){bcgov-header,bcgov-footer,bcgov-menu.is-desktop[primary]{padding-right:10%;padding-left:10%}}table td,table th{padding:8px 15px;border-bottom:1px solid #ccc;font-size:0.9rem}table{margin:15px 0;display:block;overflow:scroll}@media only screen and (min-width: 978px){.has-sidebar{}}.header-button-container{margin-top:10px}.header-button-container a{font-size:0.8rem !important}.colour-wrapper{margin:0;padding:0;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;list-style:none}.colour-wrapper .colour-card{flex:1;border:1px solid var(--bcgov-wc-color-components);margin:0 2rem 2rem 0;max-width:250px}.colour-wrapper .colour-display{height:75px;padding:8px}.colour-wrapper .colour-text{padding:8px;border-top:1px solid var(--bcgov-wc-color-components)}.code{display:none}.code.loaded{display:block}.form-styles ul li{margin-bottom:2rem}.section-content{margin:0 calc(var(--bcgov-wc-gutter) - 2rem);padding:2rem;background-color:#fff}:root{--bcgov-wc-color-white:#fff;--bcgov-wc-color-error:#d8292f;--bcgov-wc-color-success:#2e8540;--bcgov-wc-font-family:BCSans, Calibri, Arial, sans serif;--bcgov-wc-gutter:10%;--button-hamburger-background:#036;--button-hamburger-background-hover:#036;--menu-background:#38598a;--menu-background-active:#5f79a2;--menu-color:#fff;--menu-color-hover:#fff;--menu-color-active:#fff;--menu-border-color:#5f79a2;--menu-submenu-background:#2b4777;--menu-submenu-background-active:#5f79a2;--menu-submenu-color:#fff;--menu-submenu-color-hover:#fff;--menu-submenu-color-active:#fff;--menu-submenu-border-color:#5f79a2;--menu-mobile-border-color:#5f79a2;--menu-mobile-background:#38598a;--menu-mobile-background-active:#5f79a2;--menu-mobile-color:#fff;--menu-mobile-color-hover:#fff;--menu-mobile-color-active:#fff;--menu-mobile-submenu-background:#2b4777;--menu-mobile-submenu-background-active:#5f79a2;--menu-mobile-submenu-color:#fff;--menu-mobile-submenu-color-hover:#fff;--menu-mobile-submenu-color-active:#fff}bcgov-button,.bcgov-button{opacity:0;visibility:hidden}bcgov-button.hydrated,.bcgov-button.hydrated{opacity:1;visibility:visible;-webkit-transition:opacity 0.01s ease-in;-moz-transition:opacity 0.01s ease-in;-ms-transition:opacity 0.01s ease-in;-o-transition:opacity 0.01s ease-in;transition:opacity 0.01s ease-in}bcgov-button,.bcgov-button{display:inline-block;overflow:hidden}bcgov-button a,bcgov-button button,.bcgov-button a,.bcgov-button button{margin:4px 4px 4px 0;height:100%;padding:0.75rem 1.5rem;font-size:1.1rem;text-align:center;text-decoration:none;line-height:1.2;cursor:pointer;display:inline-block}bcgov-button a.hamburger,bcgov-button a.search,bcgov-button button.hamburger,bcgov-button button.search,.bcgov-button a.hamburger,.bcgov-button a.search,.bcgov-button button.hamburger,.bcgov-button button.search{margin:0;padding:0.5rem;border-width:1px;border-style:solid;border-radius:0}bcgov-button a.hamburger:hover,bcgov-button button.hamburger:hover,.bcgov-button a.hamburger:hover,.bcgov-button button.hamburger:hover{cursor:pointer}bcgov-button a.hamburger div,bcgov-button button.hamburger div,.bcgov-button a.hamburger div,.bcgov-button button.hamburger div{margin:0 2px;border-top-width:2px;border-top-style:solid;border-bottom-style:solid;border-bottom-width:2px;min-width:30px}bcgov-button a.hamburger div:before,bcgov-button button.hamburger div:before,.bcgov-button a.hamburger div:before,.bcgov-button button.hamburger div:before{content:\" \";border-top-style:solid;border-top-width:2px;margin:6px 0;display:block}bcgov-button a.search,bcgov-button button.search,.bcgov-button a.search,.bcgov-button button.search{font-size:1.5rem}bcgov-button a.search-inline,bcgov-button button.search-inline,.bcgov-button a.search-inline,.bcgov-button button.search-inline{background-color:transparent;color:var(--bcgov-wc-color-text);border-width:1px;padding:3px 18px}bcgov-button a.search-inline .bcgov-button-text,bcgov-button button.search-inline .bcgov-button-text,.bcgov-button a.search-inline .bcgov-button-text,.bcgov-button button.search-inline .bcgov-button-text{margin-left:0.5rem}bcgov-button a:hover,bcgov-button button:hover,.bcgov-button a:hover,.bcgov-button button:hover{text-decoration:underline}bcgov-button a:disabled,bcgov-button button:disabled,.bcgov-button a:disabled,.bcgov-button button:disabled{cursor:not-allowed}bcgov-button.is-desktop button.hamburger,.bcgov-button.is-desktop button.hamburger{display:none}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){bcgov-button,.bcgov-button{opacity:1;visibility:visible}}.bcgov-header{opacity:0;visibility:hidden}.bcgov-header.hydrated{opacity:1;visibility:visible;-webkit-transition:opacity 0.01s ease-in;-moz-transition:opacity 0.01s ease-in;-ms-transition:opacity 0.01s ease-in;-o-transition:opacity 0.01s ease-in;transition:opacity 0.01s ease-in}.bcgov-header{position:relative;display:block;z-index:11000}.bcgov-header header{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:normal;-moz-justify-content:normal;-ms-justify-content:normal;justify-content:normal;-ms-flex-pack:normal;-webkit-flex-grow:1;-moz-flex-grow:1;-ms-flex-grow:1;flex-grow:1;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center}.bcgov-header header .banner{padding:6px 0}.bcgov-header header .banner a{padding:0;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.bcgov-header header .banner img{width:100%}.bcgov-header header .heading,.bcgov-header header .headline,.bcgov-header header .hl{padding:0 1rem}.bcgov-header .access{position:relative;height:100%;width:0;font-size:0.8rem}.bcgov-header .access a{width:0;position:absolute;display:block;padding:5px;opacity:0;top:2px;z-index:-1}.bcgov-header .access a:focus{opacity:1;background-color:#fff;text-align:center;width:150px;height:50px;color:inherit;z-index:1}@media screen and (min-width: 762px){.bcgov-header{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex}}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.bcgov-header{opacity:1;visibility:visible}}.bcgov-footer{opacity:0;visibility:hidden}.bcgov-footer.hydrated{opacity:1;visibility:visible;-webkit-transition:opacity 0.01s ease-in;-moz-transition:opacity 0.01s ease-in;-ms-transition:opacity 0.01s ease-in;-o-transition:opacity 0.01s ease-in;transition:opacity 0.01s ease-in}.bcgov-footer{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-between;-moz-justify-content:space-between;-ms-justify-content:space-between;justify-content:space-between;-ms-flex-pack:space-between;-webkit-flex-grow:1;-moz-flex-grow:1;-ms-flex-grow:1;flex-grow:1;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;min-height:50px}.bcgov-footer .footer-logo{max-width:175px;width:100%;padding:8px 0}.bcgov-footer img{height:auto;min-width:175px;max-width:300px;width:100%;padding:0 1rem}.bcgov-footer.align-left bcgov-menu.is-desktop ul{justify-content:flex-start !important}.bcgov-footer.align-left>*:not(bcgov-menu){justify-self:end}.bcgov-footer.align-right bcgov-menu.is-desktop ul{justify-content:flex-end !important}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.bcgov-footer{opacity:1;visibility:visible}}bcgov-beta,.bcgov-beta{opacity:0;visibility:hidden}bcgov-beta.hydrated,.bcgov-beta.hydrated{opacity:1;visibility:visible;-webkit-transition:opacity 0.01s ease-in;-moz-transition:opacity 0.01s ease-in;-ms-transition:opacity 0.01s ease-in;-o-transition:opacity 0.01s ease-in;transition:opacity 0.01s ease-in}bcgov-beta,.bcgov-beta{color:var(--bcgov-wc-color-brand-secondary);position:relative;top:-5px;text-transform:uppercase;font-weight:200;margin-left:8px;font-size:0.95rem}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){bcgov-beta,.bcgov-beta{opacity:1;visibility:visible}}bcgov-menu{opacity:0;visibility:hidden}bcgov-menu.hydrated{opacity:1;visibility:visible;-webkit-transition:opacity 0.01s ease-in;-moz-transition:opacity 0.01s ease-in;-ms-transition:opacity 0.01s ease-in;-o-transition:opacity 0.01s ease-in;transition:opacity 0.01s ease-in}bcgov-menu{padding:0;position:relative;display:block}bcgov-menu ul{list-style:none;position:relative;height:100%;margin:0;padding:0}bcgov-menu a{position:relative;display:block}bcgov-menu a:before{content:\" \";position:absolute;height:100%;border-left:1px solid var(--menu-mobile-border-color);right:45px;top:0}bcgov-menu{}bcgov-menu bcgov-menu>div span{cursor:pointer}bcgov-menu bcgov-menu>div span:after{content:\" \";position:absolute;cursor:pointer;display:block;width:8px;height:8px;top:12px;right:18.75px;border-bottom-style:solid;border-bottom-width:2px;border-right-style:solid;border-right-width:2px;transform:rotateZ(45deg);box-sizing:unset}bcgov-menu bcgov-menu.expandable.expanded>div span:after{top:18px;transform:rotateZ(225deg)}bcgov-menu[primary],bcgov-menu.primary{z-index:11000;color:var(--menu-mobile-color);max-width:500px;width:100%;right:0;position:absolute}bcgov-menu[primary] a,bcgov-menu[primary] a:hover,bcgov-menu[primary] a:visited,bcgov-menu[primary] a:active,bcgov-menu[primary] a:focus,bcgov-menu.primary a,bcgov-menu.primary a:hover,bcgov-menu.primary a:visited,bcgov-menu.primary a:active,bcgov-menu.primary a:focus{color:var(--menu-mobile-color);border-bottom:1px solid var(--menu-mobile-border-color);text-decoration:none}bcgov-menu[primary] a:hover,bcgov-menu.primary a:hover{text-decoration:underline;color:var(--menu-mobile-color-hover);background-color:var(--menu-mobile-background-active)}bcgov-menu[primary] ul li.bcgov-primary-menu-close a,bcgov-menu.primary ul li.bcgov-primary-menu-close a{opacity:0.6}bcgov-menu[primary] ul li.bcgov-primary-menu-close a span,bcgov-menu.primary ul li.bcgov-primary-menu-close a span{border:2px solid var(--menu-mobile-color);border-radius:16px;padding:0.3px 9px 1px;line-height:1}bcgov-menu[primary] ul li.bcgov-primary-menu-close a:before,bcgov-menu.primary ul li.bcgov-primary-menu-close a:before{content:\"\";position:relative;border:none}bcgov-menu[primary] ul li.bcgov-primary-menu-close a:hover,bcgov-menu.primary ul li.bcgov-primary-menu-close a:hover{opacity:1;background-color:inherit}bcgov-menu[primary] ul bcgov-menu ul,bcgov-menu.primary ul bcgov-menu ul{z-index:11100;background-color:var(--menu-mobile-submenu-background)}bcgov-menu[primary] ul bcgov-menu>div span,bcgov-menu.primary ul bcgov-menu>div span{position:absolute;top:0;right:0;height:100%;width:45px}bcgov-menu[primary] ul bcgov-menu>div span:after,bcgov-menu.primary ul bcgov-menu>div span:after{border-bottom-color:var(--menu-mobile-color);border-right-color:var(--menu-mobile-color)}bcgov-menu[primary] ul bcgov-menu ul,bcgov-menu[primary] ul bcgov-menu li ul,bcgov-menu.primary ul bcgov-menu ul,bcgov-menu.primary ul bcgov-menu li ul{display:none;background-color:var(--menu-mobile-submenu-background)}bcgov-menu[primary] ul bcgov-menu a,bcgov-menu[primary] ul bcgov-menu a:hover,bcgov-menu[primary] ul bcgov-menu a:visited,bcgov-menu[primary] ul bcgov-menu a:focus,bcgov-menu[primary] ul bcgov-menu a:active,bcgov-menu[primary] ul bcgov-menu li a,bcgov-menu[primary] ul bcgov-menu li a:hover,bcgov-menu[primary] ul bcgov-menu li a:visited,bcgov-menu[primary] ul bcgov-menu li a:focus,bcgov-menu[primary] ul bcgov-menu li a:active,bcgov-menu.primary ul bcgov-menu a,bcgov-menu.primary ul bcgov-menu a:hover,bcgov-menu.primary ul bcgov-menu a:visited,bcgov-menu.primary ul bcgov-menu a:focus,bcgov-menu.primary ul bcgov-menu a:active,bcgov-menu.primary ul bcgov-menu li a,bcgov-menu.primary ul bcgov-menu li a:hover,bcgov-menu.primary ul bcgov-menu li a:visited,bcgov-menu.primary ul bcgov-menu li a:focus,bcgov-menu.primary ul bcgov-menu li a:active{color:var(--menu-mobile-submenu-color)}bcgov-menu[primary] ul bcgov-menu a:hover,bcgov-menu[primary] ul bcgov-menu li a:hover,bcgov-menu.primary ul bcgov-menu a:hover,bcgov-menu.primary ul bcgov-menu li a:hover{color:var(--menu-mobile-submenu-color-hover);background-color:var(--menu-mobile-submenu-background-active)}bcgov-menu[primary] ul bcgov-menu.expandable,bcgov-menu.primary ul bcgov-menu.expandable{display:list-item}bcgov-menu[primary] ul bcgov-menu.expandable.expanded ul,bcgov-menu.primary ul bcgov-menu.expandable.expanded ul{display:block}bcgov-menu[primary] ul bcgov-menu.expandable.expanded ul li:hover,bcgov-menu.primary ul bcgov-menu.expandable.expanded ul li:hover{background-color:var(--menu-mobile-background-active)}bcgov-menu[primary] ul bcgov-menu.expandable.expanded>div span:after,bcgov-menu.primary ul bcgov-menu.expandable.expanded>div span:after{top:18px;transform:rotateZ(225deg)}bcgov-menu[primary] ul>li.active>a,bcgov-menu[primary] ul bcgov-menu.active div>a,bcgov-menu.primary ul>li.active>a,bcgov-menu.primary ul bcgov-menu.active div>a{background-color:var(--menu-mobile-background-active);color:var(--menu-mobile-color-active)}bcgov-menu[primary] ul bcgov-menu ul>li.active>a,bcgov-menu.primary ul bcgov-menu ul>li.active>a{background-color:var(--menu-mobile-submenu-background-active);color:var(--menu-mobile-submenu-color-active)}bcgov-menu{}bcgov-menu.target-hidden{display:none}bcgov-menu{}bcgov-menu.is-desktop{display:block;position:relative;max-width:100%}bcgov-menu.is-desktop ul{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;position:relative}bcgov-menu.is-desktop ul.align-right{margin-right:-15px;-webkit-justify-content:flex-end;-moz-justify-content:flex-end;-ms-justify-content:flex-end;justify-content:flex-end;-ms-flex-pack:flex-end}bcgov-menu.is-desktop ul.align-left{-webkit-justify-content:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;justify-content:flex-start;-ms-flex-pack:flex-start;margin-left:-15px}bcgov-menu.is-desktop ul.align-center{-webkit-justify-content:center;-moz-justify-content:center;-ms-justify-content:center;justify-content:center;-ms-flex-pack:center}bcgov-menu.is-desktop a{border:1px solid transparent;margin:0}bcgov-menu.is-desktop a:before{content:\"\";position:relative;border:none}bcgov-menu.is-desktop[primary] a,bcgov-menu.is-desktop[primary] a:hover,bcgov-menu.is-desktop[primary] a:active,bcgov-menu.is-desktop[primary] a:focus,bcgov-menu.is-desktop[primary] a:visited,bcgov-menu.is-desktop.primary a,bcgov-menu.is-desktop.primary a:hover,bcgov-menu.is-desktop.primary a:active,bcgov-menu.is-desktop.primary a:focus,bcgov-menu.is-desktop.primary a:visited{color:var(--menu-color)}bcgov-menu.is-desktop[primary] a:hover,bcgov-menu.is-desktop.primary a:hover{color:var(--menu-color-hover);background-color:var(--menu-background-active);border-color:var(--menu-border-color)}bcgov-menu.is-desktop[primary] ul li.bcgov-primary-menu-close,bcgov-menu.is-desktop.primary ul li.bcgov-primary-menu-close{display:none}bcgov-menu.is-desktop[primary] ul bcgov-menu>div span:after,bcgov-menu.is-desktop.primary ul bcgov-menu>div span:after{border-bottom:2px solid var(--menu-color);border-right:2px solid var(--menu-color)}bcgov-menu.is-desktop[primary] ul bcgov-menu>div a,bcgov-menu.is-desktop.primary ul bcgov-menu>div a{padding-right:37.5px}bcgov-menu.is-desktop[primary] ul bcgov-menu li>div,bcgov-menu.is-desktop.primary ul bcgov-menu li>div{border:none}bcgov-menu.is-desktop[primary] ul bcgov-menu li a,bcgov-menu.is-desktop[primary] ul bcgov-menu li a:hover,bcgov-menu.is-desktop[primary] ul bcgov-menu li a:active,bcgov-menu.is-desktop[primary] ul bcgov-menu li a:focus,bcgov-menu.is-desktop[primary] ul bcgov-menu li a:visited,bcgov-menu.is-desktop.primary ul bcgov-menu li a,bcgov-menu.is-desktop.primary ul bcgov-menu li a:hover,bcgov-menu.is-desktop.primary ul bcgov-menu li a:active,bcgov-menu.is-desktop.primary ul bcgov-menu li a:focus,bcgov-menu.is-desktop.primary ul bcgov-menu li a:visited{color:var(--menu-submenu-color)}bcgov-menu.is-desktop[primary] ul bcgov-menu li a:hover,bcgov-menu.is-desktop.primary ul bcgov-menu li a:hover{color:var(--menu-submenu-color-hover);background-color:var(--menu-submenu-background-active)}bcgov-menu.is-desktop[primary] ul bcgov-menu ul,bcgov-menu.is-desktop.primary ul bcgov-menu ul{display:none;flex-direction:column;position:absolute;width:230px;height:auto;background-color:var(--menu-submenu-background)}bcgov-menu.is-desktop[primary] ul bcgov-menu ul li,bcgov-menu.is-desktop.primary ul bcgov-menu ul li{border-top:1px solid var(--menu-submenu-border-color);border-left:1px solid var(--menu-submenu-border-color);border-right:1px solid var(--menu-submenu-border-color)}bcgov-menu.is-desktop[primary] ul bcgov-menu ul li:last-child,bcgov-menu.is-desktop.primary ul bcgov-menu ul li:last-child{border-bottom:1px solid var(--menu-submenu-border-color)}bcgov-menu.is-desktop[primary] ul bcgov-menu.expandable.expanded ul li:hover,bcgov-menu.is-desktop.primary ul bcgov-menu.expandable.expanded ul li:hover{background-color:var(--menu-background-active)}bcgov-menu.is-desktop[primary] ul bcgov-menu.expandable.expanded>div span:after,bcgov-menu.is-desktop.primary ul bcgov-menu.expandable.expanded>div span:after{top:18px;transform:rotateZ(225deg)}bcgov-menu.is-desktop[primary] ul>li.active>a,bcgov-menu.is-desktop[primary] ul bcgov-menu.active div>a,bcgov-menu.is-desktop.primary ul>li.active>a,bcgov-menu.is-desktop.primary ul bcgov-menu.active div>a{background-color:var(--menu-background-active);color:var(--menu-color-active);border:1px solid var(--menu-border-color)}bcgov-menu.is-desktop[primary] ul bcgov-menu ul>li.active>a,bcgov-menu.is-desktop.primary ul bcgov-menu ul>li.active>a{background-color:var(--menu-submenu-background-active);color:var(--menu-submenu-color-active)}bcgov-menu[sidebar].is-desktop ul{display:block}bcgov-menu[sidebar].is-desktop ul li a{padding:0.1rem !important}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){bcgov-menu{opacity:1;visibility:visible}}bcgov-callout,.bcgov-callout{opacity:0;visibility:hidden}bcgov-callout.hydrated,.bcgov-callout.hydrated{opacity:1;visibility:visible;-webkit-transition:opacity 0.01s ease-in;-moz-transition:opacity 0.01s ease-in;-ms-transition:opacity 0.01s ease-in;-o-transition:opacity 0.01s ease-in;transition:opacity 0.01s ease-in}bcgov-callout,.bcgov-callout{display:block;padding:25px;border-left:10px solid var(--bcgov-wc-color-background-primary);margin:16px 0;background-color:var(--bcgov-wc-color-background-seconary)}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){bcgov-callout,.bcgov-callout{opacity:1;visibility:visible}}bcgov-search,.bcgov-search{opacity:0;visibility:hidden}bcgov-search.hydrated,.bcgov-search.hydrated{opacity:1;visibility:visible;-webkit-transition:opacity 0.01s ease-in;-moz-transition:opacity 0.01s ease-in;-ms-transition:opacity 0.01s ease-in;-o-transition:opacity 0.01s ease-in;transition:opacity 0.01s ease-in}bcgov-search,.bcgov-search{display:block;border-width:1px;border-style:solid;position:absolute;width:100%;z-index:9999}bcgov-search .search-container,.bcgov-search .search-container{-webkit-transition:height 200ms ease-in;-moz-transition:height 200ms ease-in;-ms-transition:height 200ms ease-in;-o-transition:height 200ms ease-in;transition:height 200ms ease-in;background-color:#fff;border-style:solid;border-width:1px;padding:2px}bcgov-search .search-container form,.bcgov-search .search-container form{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-moz-align-content:center;-ms-align-content:center;align-content:center;-webkit-justify-content:flex-end;-moz-justify-content:flex-end;-ms-justify-content:flex-end;justify-content:flex-end;-ms-flex-pack:flex-end;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 !important}bcgov-search .search-container form bcgov-button button,.bcgov-search .search-container form bcgov-button button{padding:0.5rem !important;margin:0}bcgov-search.is-search-desktop .search-container form,.bcgov-search.is-search-desktop .search-container form{-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row}bcgov-search.is-search-desktop .search-container form>input,bcgov-search.is-search-desktop .search-container form select,bcgov-search.is-search-desktop .search-container form input:not([type=submit]),.bcgov-search.is-search-desktop .search-container form>input,.bcgov-search.is-search-desktop .search-container form select,.bcgov-search.is-search-desktop .search-container form input:not([type=submit]){-webkit-box-flex:2 1;-moz-box-flex:2 1;-webkit-flex:2 1;-ms-flex:2 1;flex:2 1;width:100%}bcgov-search.is-search-desktop .search-container form>input[type=search],bcgov-search.is-search-desktop .search-container form select[type=search],bcgov-search.is-search-desktop .search-container form input:not([type=submit])[type=search],.bcgov-search.is-search-desktop .search-container form>input[type=search],.bcgov-search.is-search-desktop .search-container form select[type=search],.bcgov-search.is-search-desktop .search-container form input:not([type=submit])[type=search]{border:none !important}bcgov-search.is-search-desktop .search-container form bcgov-button,bcgov-search.is-search-desktop .search-container form .bcgov-button,.bcgov-search.is-search-desktop .search-container form bcgov-button,.bcgov-search.is-search-desktop .search-container form .bcgov-button{display:block}bcgov-search.is-search-desktop .search-container form bcgov-button[button-style=search-inline] .bcgov-button-text,bcgov-search.is-search-desktop .search-container form .bcgov-button[button-style=search-inline] .bcgov-button-text,.bcgov-search.is-search-desktop .search-container form bcgov-button[button-style=search-inline] .bcgov-button-text,.bcgov-search.is-search-desktop .search-container form .bcgov-button[button-style=search-inline] .bcgov-button-text{display:none}bcgov-search.is-search-desktop .search-container form bcgov-button[button-style=search-inline-close] button,bcgov-search.is-search-desktop .search-container form .bcgov-button[button-style=search-inline-close] button,.bcgov-search.is-search-desktop .search-container form bcgov-button[button-style=search-inline-close] button,.bcgov-search.is-search-desktop .search-container form .bcgov-button[button-style=search-inline-close] button{background-color:transparent;border:0}bcgov-search.is-search-desktop .search-container form bcgov-button[button-style=search-inline-close] .bcgov-button-text,bcgov-search.is-search-desktop .search-container form .bcgov-button[button-style=search-inline-close] .bcgov-button-text,.bcgov-search.is-search-desktop .search-container form bcgov-button[button-style=search-inline-close] .bcgov-button-text,.bcgov-search.is-search-desktop .search-container form .bcgov-button[button-style=search-inline-close] .bcgov-button-text{font-size:0}bcgov-search.is-search-desktop .search-container form bcgov-button[button-style=search-inline-close] .bcgov-button-text:after,bcgov-search.is-search-desktop .search-container form .bcgov-button[button-style=search-inline-close] .bcgov-button-text:after,.bcgov-search.is-search-desktop .search-container form bcgov-button[button-style=search-inline-close] .bcgov-button-text:after,.bcgov-search.is-search-desktop .search-container form .bcgov-button[button-style=search-inline-close] .bcgov-button-text:after{content:\">\";font-size:1rem}bcgov-search.target-hidden,.bcgov-search.target-hidden{display:none}bcgov-search.target-hidden .search-container,.bcgov-search.target-hidden .search-container{height:0;visibility:hidden}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){bcgov-search,.bcgov-search{opacity:1;visibility:visible}}form:not(.no-styles){margin:0.5rem 0;position:relative;}form:not(.no-styles) input:not([type=submit]),form:not(.no-styles) textarea,form:not(.no-styles) select,form:not(.no-styles) .uneditable-input{border-style:solid;border-width:1px;border-radius:4px;padding:10px 8px;font-family:inherit;width:100%}form:not(.no-styles) input:not([type=submit]):focus,form:not(.no-styles) textarea:focus,form:not(.no-styles) select:focus,form:not(.no-styles) .uneditable-input:focus{outline-width:2px;box-shadow:none;outline-offset:2px}form:not(.no-styles) input[disabled],form:not(.no-styles) select[disabled],form:not(.no-styles) textarea[disabled],form:not(.no-styles) input[readonly],form:not(.no-styles) select[readonly],form:not(.no-styles) textarea[readonly]{cursor:not-allowed;background-color:#e6e6e6}form:not(.no-styles) input[type=radio]{position:relative;-webkit-appearance:none;-moz-appearance:none;appearance:none;top:4px;width:20px;height:20px;border-width:2px;border-style:solid;padding:2px;border-radius:50%;background-clip:content-box;margin-right:8px;z-index:1}form:not(.no-styles) input[type=radio]:checked{background-color:#444}form:not(.no-styles) select{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding-right:1.3em;appearance:none;position:relative;background-color:transparent !important;background-image:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-down' class='svg-inline--fa fa-chevron-down fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='currentColor' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'%3E%3C/path%3E%3C/svg%3E\") !important;background-repeat:no-repeat;background-size:1.8em 1em;background-position:right center;background-clip:border-box;-moz-background-clip:border-box;-webkit-background-clip:border-box;box-shadow:none}form:not(.no-styles) input[type=submit]{margin:4px 4px 4px 0;padding:0.75rem 1.5rem;-webkit-appearance:none;text-align:center;text-decoration:none;line-height:1.2;width:inherit}form:not(.no-styles) input[type=search]{-webkit-appearance:textfield}form:not(.no-styles) input[type=checkbox]{position:relative;-webkit-appearance:none;-moz-appearance:none;appearance:none;top:4px;width:20px;height:20px;border-width:2px;border-style:solid;padding:2px;background-clip:content-box;margin-right:8px}form:not(.no-styles) input[type=checkbox]:checked{background-color:#444}form:not(.no-styles) textarea{min-height:100px}bcgov-breadcrumb,.bcgov-breadcrumb{opacity:0;visibility:hidden}bcgov-breadcrumb.hydrated,.bcgov-breadcrumb.hydrated{opacity:1;visibility:visible;-webkit-transition:opacity 0.01s ease-in;-moz-transition:opacity 0.01s ease-in;-ms-transition:opacity 0.01s ease-in;-o-transition:opacity 0.01s ease-in;transition:opacity 0.01s ease-in}bcgov-breadcrumb,.bcgov-breadcrumb{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-justify-content:space-between;-ms-justify-content:space-between;justify-content:space-between;-ms-flex-pack:space-between;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center}bcgov-breadcrumb ol,.bcgov-breadcrumb ol{list-style:none;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-ms-flex-align:center;align-items:center;margin:0;padding:0;font-size:0.95rem}bcgov-breadcrumb ol li,.bcgov-breadcrumb ol li{display:inline;padding:0;margin:0}bcgov-breadcrumb ol li:after,.bcgov-breadcrumb ol li:after{content:\">\";padding:0 6px}bcgov-breadcrumb ol li:last-child:after,.bcgov-breadcrumb ol li:last-child:after{content:\"\"}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){bcgov-breadcrumb,.bcgov-breadcrumb{opacity:1;visibility:visible}}*:focus{outline-width:2px;outline-style:solid;outline-offset:1px;z-index:9999}.sr-only{width:1px;height:1px;overflow:hidden;text-indent:-10000px}";

/*
 Stencil Client Platform v4.44.2 | MIT Licensed | https://stenciljs.com
 */


// src/utils/get-prop-descriptor.ts
function getPropertyDescriptor(obj, memberName, getOnly) {
  const stopAt = typeof HTMLElement !== "undefined" ? HTMLElement.prototype : null;
  while (obj && obj !== stopAt) {
    const desc = Object.getOwnPropertyDescriptor(obj, memberName);
    if (desc && (!getOnly || desc.get)) return desc;
    obj = Object.getPrototypeOf(obj);
  }
  return void 0;
}

// src/utils/es2022-rewire-class-members.ts
var reWireGetterSetter = (instance, hostRef) => {
  var _a;
  const cmpMeta = hostRef.$cmpMeta$;
  const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
  members.map(([memberName, [memberFlags]]) => {
    if ((memberFlags & 31 /* Prop */ || memberFlags & 32 /* State */)) {
      const ogValue = instance[memberName];
      const ogDescriptor = getPropertyDescriptor(Object.getPrototypeOf(instance), memberName, true) || Object.getOwnPropertyDescriptor(instance, memberName);
      if (ogDescriptor) {
        Object.defineProperty(instance, memberName, {
          get() {
            return ogDescriptor.get.call(this);
          },
          set(newValue) {
            ogDescriptor.set.call(this, newValue);
          },
          configurable: true,
          enumerable: true
        });
      }
      if (hostRef.$instanceValues$.has(memberName)) {
        instance[memberName] = hostRef.$instanceValues$.get(memberName);
      } else if (ogValue !== void 0) {
        instance[memberName] = ogValue;
      }
    }
  });
};

// src/client/client-host-ref.ts
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  if (!hostRef) return;
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
  if (hostRef.$cmpMeta$.$flags$ & 512 /* hasModernPropertyDecls */ && (BUILD.state)) {
    reWireGetterSetter(lazyInstance, hostRef);
  }
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map(),
    $serializerValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  {
    hostRef.$fetchedCbList$ = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var failedLoadAttempts = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  var _a;
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId) ;
  if (module) {
    return module[exportName];
  }
  const retryCount = (_a = failedLoadAttempts.get(bundleId)) != null ? _a : 0;
  const cacheBustParams = [
    retryCount > 0 ? `s-retry=${retryCount}` : "",
    ""
  ].filter(Boolean).join("&");
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
  return import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${cacheBustParams ? "?" + cacheBustParams : ""}`
  ).then(
    (importedModule) => {
      {
        failedLoadAttempts.delete(bundleId);
        cmpModules.set(bundleId, importedModule);
      }
      return importedModule[exportName];
    },
    (e) => {
      failedLoadAttempts.set(bundleId, retryCount + 1);
      consoleError(e, hostRef.$hostElement$);
    }
  );
};
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var MAX_LAZY_LOAD_RETRIES = 3;
var LAZY_LOAD_RETRY_INTERVAL_MS = 1e3;
var win = typeof window !== "undefined" ? window : {};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsListenerOptions = /* @__PURE__ */ (() => {
  var _a;
  let supportsListenerOptions2 = false;
  try {
    (_a = win.document) == null ? void 0 : _a.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    if (!win.document.adoptedStyleSheets) {
      return false;
    }
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var supportsMutableAdoptedStyleSheets = supportsConstructableStylesheets ? /* @__PURE__ */ (() => !!win.document && Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets, "length").writable)() : false;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var scheduleFlush = () => {
  var _a;
  return ((_a = win.document) == null ? void 0 : _a.hidden) ? nextTick(flush) : plt.raf(flush);
};
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      scheduleFlush();
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      scheduleFlush();
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);

// src/runtime/asset-path.ts
var getAssetPath = (path) => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};

// src/utils/style.ts
function createStyleSheetIfNeededAndSupported(styles2) {
  if (!supportsConstructableStylesheets) return void 0;
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styles2);
  return sheet;
}

// src/utils/shadow-root.ts
var globalStyleSheet;
function createShadowRoot(cmpMeta) {
  var _a;
  const opts = { mode: "open" };
  const shadowRoot = this.attachShadow(opts);
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported(globalStyles)) != null ? _a : null;
  if (globalStyleSheet) {
    if (supportsMutableAdoptedStyleSheets) {
      shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
    } else {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, globalStyleSheet];
    }
  } else if (!supportsConstructableStylesheets) {
    const styleElm = document.createElement("style");
    styleElm.innerHTML = globalStyles;
    shadowRoot.prepend(styleElm);
  }
}
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = internalCall(elm, "childNodes");
  if (elm.tagName && elm.tagName.includes("-") && elm["s-cr"] && elm.tagName !== "SLOT-FB") {
    getHostSlotNodes(childNodes, elm.tagName).forEach((slotNode) => {
      if (slotNode.nodeType === 1 /* ElementNode */ && slotNode.tagName === "SLOT-FB") {
        if (getSlotChildSiblings(slotNode, getSlotName(slotNode), false).length) {
          slotNode.hidden = true;
        } else {
          slotNode.hidden = false;
        }
      }
    });
  }
  let i2 = 0;
  for (i2 = 0; i2 < childNodes.length; i2++) {
    const childNode = childNodes[i2];
    if (childNode.nodeType === 1 /* ElementNode */ && internalCall(childNode, "childNodes").length) {
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var getSlottedChildNodes = (childNodes) => {
  const result = [];
  for (let i2 = 0; i2 < childNodes.length; i2++) {
    const slottedNode = childNodes[i2]["s-nr"] || void 0;
    if (slottedNode && slottedNode.isConnected) {
      result.push(slottedNode);
    }
  }
  return result;
};
function getHostSlotNodes(childNodes, hostName, slotName) {
  let i2 = 0;
  let slottedNodes = [];
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && (!hostName || childNode["s-hn"] === hostName) && (slotName === void 0 || getSlotName(childNode) === slotName)) {
      slottedNodes.push(childNode);
      if (typeof slotName !== "undefined") return slottedNodes;
    }
    slottedNodes = [...slottedNodes, ...getHostSlotNodes(internalCall(childNode, "childNodes"), hostName, slotName)];
  }
  return slottedNodes;
}
var getSlotChildSiblings = (slot, slotName, includeSlot = true) => {
  const childNodes = [];
  if (includeSlot && slot["s-sr"] || !slot["s-sr"]) childNodes.push(slot);
  let node = slot;
  while (node = node.nextSibling) {
    if (getSlotName(node) === slotName && (includeSlot || !node["s-sr"])) childNodes.push(node);
  }
  return childNodes;
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var getSlotName = (node) => typeof node["s-sn"] === "string" ? node["s-sn"] : node.nodeType === 1 && node.getAttribute("slot") || void 0;
function patchSlotNode(node) {
  if (node.assignedElements || node.assignedNodes || !node["s-sr"]) return;
  const assignedFactory = (elementsOnly) => (function(opts) {
    const toReturn = [];
    const slotName = this["s-sn"];
    if (opts == null ? void 0 : opts.flatten) {
      console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
    }
    const parent = this["s-cr"].parentElement;
    const slottedNodes = parent.__childNodes ? parent.childNodes : getSlottedChildNodes(parent.childNodes);
    slottedNodes.forEach((n) => {
      if (slotName === getSlotName(n)) {
        toReturn.push(n);
      }
    });
    if (elementsOnly) {
      return toReturn.filter((n) => n.nodeType === 1 /* ElementNode */);
    }
    return toReturn;
  }).bind(node);
  node.assignedElements = assignedFactory(true);
  node.assignedNodes = assignedFactory(false);
}
function dispatchSlotChangeEvent(elm) {
  elm.dispatchEvent(new CustomEvent("slotchange", { bubbles: false, cancelable: false, composed: false }));
}
function findSlotFromSlottedNode(slottedNode, parentHost) {
  var _a;
  parentHost = parentHost || ((_a = slottedNode["s-ol"]) == null ? void 0 : _a.parentElement);
  if (!parentHost) return { slotNode: null, slotName: "" };
  const slotName = slottedNode["s-sn"] = getSlotName(slottedNode) || "";
  const childNodes = internalCall(parentHost, "childNodes");
  const slotNode = getHostSlotNodes(childNodes, parentHost.tagName, slotName)[0];
  return { slotNode, slotName };
}
function internalCall(node, method) {
  if ("__" + method in node) {
    const toReturn = node["__" + method];
    if (typeof toReturn !== "function") return toReturn;
    return toReturn.bind(node);
  } else {
    if (typeof node[method] !== "function") return node[method];
    return node[method].bind(node);
  }
}
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/runtime/styles.ts
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/runtime/vdom/h.ts
var h = (nodeName, vnodeData, ...children) => {
  if (typeof nodeName === "string") {
    nodeName = transformTag(nodeName);
  }
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        } else if (typeof nodeName !== "function" && child.$flags$ === void 0) {
          {
            consoleError("Invalid vNode child");
          }
          continue;
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    // Normalize undefined to null to prevent rendering "undefined" as text
    $text$: text != null ? text : null,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;

// src/runtime/parse-property-value.ts
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (propType & 2 /* Number */) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$hostElement$ ;
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement(elm, memberName);
  let ln = memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    {
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ; else if (memberName === "ref") {
    if (newValue) {
      queueRefAttachment(newValue, elm);
    }
  } else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
    if (memberName[2] === "-") {
      memberName = memberName.slice(3);
    } else if (isMemberInElement(win, ln)) {
      memberName = ln.slice(2);
    } else {
      memberName = ln[2] + memberName.slice(3);
    }
    if (oldValue || newValue) {
      const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
      memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, capture);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, capture);
      }
    }
  } else if (memberName[0] === "a" && memberName.startsWith("attr:")) {
    const propName = memberName.slice(5);
    let attrName;
    {
      const hostRef = getHostRef(elm);
      if (hostRef && hostRef.$cmpMeta$ && hostRef.$cmpMeta$.$members$) {
        const memberMeta = hostRef.$cmpMeta$.$members$[propName];
        if (memberMeta && memberMeta[1]) {
          attrName = memberMeta[1];
        }
      }
    }
    if (!attrName) {
      attrName = propName.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(attrName) === "") {
        elm.removeAttribute(attrName);
      }
    } else {
      elm.setAttribute(attrName, newValue === true ? "" : newValue);
    }
    return;
  } else if (memberName[0] === "p" && memberName.startsWith("prop:")) {
    const propName = memberName.slice(5);
    try {
      elm[propName] = newValue;
    } catch (e) {
    }
    return;
  } else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] !== n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {
      }
    }
    let xlink = false;
    {
      if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
        memberName = ln;
        xlink = true;
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "" || flags & 4 /* isHost */ && !isEnumeratedAttribute(memberName)) {
        if (xlink) {
          elm.removeAttributeNS(XLINK_NS, memberName);
        } else {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      if (xlink) {
        elm.setAttributeNS(XLINK_NS, memberName, newValue);
      } else {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var ENUMERATED_ATTRIBUTES = /* @__PURE__ */ new Set(["draggable", "contenteditable", "spellcheck"]);
var isEnumeratedAttribute = (attrName) => ENUMERATED_ATTRIBUTES.has(attrName) || attrName.startsWith("aria-");
var parseClassListRegex = /\s/;
var parseClassList = (value) => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(
          elm,
          memberName,
          oldVnodeAttrs[memberName],
          void 0,
          isSvgMode2,
          newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(
      elm,
      memberName,
      oldVnodeAttrs[memberName],
      newVnodeAttrs[memberName],
      isSvgMode2,
      newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var refCallbacksToRemove = [];
var refCallbacksToAttach = [];
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2 /* isSlotFallback */
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1 /* isSlotReference */
      );
    }
  }
  if (newVNode2.$text$ != null) {
    elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = win.document.createTextNode("");
    {
      updateElement(null, newVNode2, isSvgMode);
    }
  } else {
    if (!win.document) {
      throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM.");
    }
    elm = newVNode2.$elm$ = win.document.createElement(
      !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$
    );
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (newVNode2.$children$) {
      const appendTarget = newVNode2.$tag$ === "template" ? elm.content : elm;
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          appendTarget.appendChild(childNode);
        }
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      patchSlotNode(elm);
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        relocateToHostRoot(oldParentVNode.$elm$);
      }
    }
  }
  return elm;
};
var relocateToHostRoot = (parentElm) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const host = parentElm.closest(hostTagName.toLowerCase());
  if (host != null) {
    const contentRefNode = Array.from(host.__childNodes || host.childNodes).find(
      (ref) => ref["s-cr"]
    );
    const childNodeArray = Array.from(
      parentElm.__childNodes || parentElm.childNodes
    );
    for (const childNode of contentRefNode ? childNodeArray.reverse() : childNodeArray) {
      if (childNode["s-sh"] != null) {
        insertBefore(host, childNode, contentRefNode != null ? contentRefNode : null);
        childNode["s-sh"] = void 0;
        checkSlotRelocate = true;
      }
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.__childNodes || parentElm.childNodes);
  if (parentElm["s-sr"]) {
    let node = parentElm;
    while (node = node.nextSibling) {
      if (node && node["s-sn"] === parentElm["s-sn"] && node["s-sh"] === hostTagName) {
        oldSlotChildNodes.push(node);
      }
    }
  }
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(referenceNode(childNode).parentNode, childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  if (parentVNode.$tag$ === "template") {
    containerElm = containerElm.content;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before) );
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  const containerElm = newVNode2.$tag$ === "template" ? parentElm.content : parentElm;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(containerElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(containerElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(
            referenceNode(oldStartVnode.$elm$).parentNode,
            node,
            referenceNode(oldStartVnode.$elm$)
          );
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => node && node["s-ol"] || node;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text == null) {
    {
      if (tag === "slot" && !useNativeShadowDom) {
        if (oldVNode.$name$ !== newVNode2.$name$) {
          newVNode2.$elm$["s-sn"] = newVNode2.$name$ || "";
          relocateToHostRoot(newVNode2.$elm$.parentElement);
        }
      }
      updateElement(oldVNode, newVNode2, isSvgMode);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else ;
  } else if ((defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  const children = elm.__childNodes || elm.childNodes;
  for (const childNode of children) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.__childNodes || node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && // let an exact named-slot match override a stale default-slot claim. Skip this for
        // `slotName === ''` itself - a matched default node's cached `s-sn` is `''` too, which
        // would trivially "match" on every re-render and force pointless re-insertion.
        (!node["s-sh"] || node["s-sh"] !== childNode["s-hn"] || slotName !== "" && getSlotName(node) === slotName)) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var nullifyVNodeRefs = (vNode) => {
  {
    if (vNode.$attrs$ && vNode.$attrs$.ref) {
      refCallbacksToRemove.push(() => vNode.$attrs$.ref(null));
    }
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var queueRefAttachment = (refCallback, elm) => {
  {
    refCallbacksToAttach.push(() => refCallback(elm));
  }
};
var flushQueuedRefCallbacks = () => {
  {
    refCallbacksToRemove.forEach((cb) => cb());
    refCallbacksToRemove.length = 0;
    refCallbacksToAttach.forEach((cb) => cb());
    refCallbacksToAttach.length = 0;
  }
};
var insertBefore = (parent, newNode, reference, isInitialLoad) => {
  {
    if (typeof newNode["s-sn"] === "string") {
      parent.insertBefore(newNode, reference);
      const { slotNode } = findSlotFromSlottedNode(newNode);
      if (slotNode && !isInitialLoad) dispatchSlotChangeEvent(slotNode);
      return newNode;
    }
  }
  if ((parent == null ? void 0 : parent.__insertBefore)) {
    return parent.__insertBefore(newNode, reference);
  } else {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d, _e;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  useNativeShadowDom = !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && !(cmpMeta.$flags$ & 128 /* shadowNeedsScopedCss */);
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"] && win.document) {
          const orgLocationNode = win.document.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(
            nodeToRelocate.parentNode,
            nodeToRelocate["s-ol"] = orgLocationNode,
            nodeToRelocate,
            isInitialLoad
          );
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (nodeToRelocate.nodeType === 1 /* ElementNode */ && isInitialLoad) {
          nodeToRelocate["s-ih"] = (_a = nodeToRelocate.hidden) != null ? _a : false;
        }
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          if (insertBeforeNode && insertBeforeNode.nodeType === 1 /* ElementNode */) {
            let orgLocationNode = (_b = nodeToRelocate["s-ol"]) == null ? void 0 : _b.previousSibling;
            while (orgLocationNode) {
              let refNode = (_c = orgLocationNode["s-nr"]) != null ? _c : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === (refNode.__parentNode || refNode.parentNode)) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          const parent = nodeToRelocate.__parentNode || nodeToRelocate.parentNode;
          const nextSibling = nodeToRelocate.__nextSibling || nodeToRelocate.nextSibling;
          if (!insertBeforeNode && parentNodeRef !== parent || nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode, isInitialLoad);
              if (nodeToRelocate.nodeType === 8 /* CommentNode */ && nodeToRelocate.nodeValue.startsWith("s-nt-")) {
                const textNode = win.document.createTextNode(nodeToRelocate.nodeValue.replace(/^s-nt-/, ""));
                textNode["s-hn"] = nodeToRelocate["s-hn"];
                textNode["s-sn"] = nodeToRelocate["s-sn"];
                textNode["s-sh"] = nodeToRelocate["s-sh"];
                textNode["s-sr"] = nodeToRelocate["s-sr"];
                textNode["s-ol"] = nodeToRelocate["s-ol"];
                textNode["s-ol"]["s-nr"] = textNode;
                insertBefore(nodeToRelocate.parentNode, textNode, nodeToRelocate, isInitialLoad);
                nodeToRelocate.parentNode.removeChild(nodeToRelocate);
              }
              if (nodeToRelocate.nodeType === 1 /* ElementNode */ && nodeToRelocate.tagName !== "SLOT-FB") {
                nodeToRelocate.hidden = (_d = nodeToRelocate["s-ih"]) != null ? _d : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](slotRefNode);
        } else if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
          nodeToRelocate.hidden = true;
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= -2 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  if (!useNativeShadowDom && !(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && hostElm["s-cr"]) {
    const children = rootVnode.$elm$.__childNodes || rootVnode.$elm$.childNodes;
    for (const childNode of children) {
      if (childNode["s-hn"] !== hostTagName && !childNode["s-sh"]) {
        if (isInitialLoad && childNode["s-ih"] == null) {
          childNode["s-ih"] = (_e = childNode.hidden) != null ? _e : false;
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
          childNode.hidden = true;
        } else if (childNode.nodeType === 3 /* TextNode */ && !!childNode.nodeValue.trim()) {
          const textCommentNode = win.document.createComment("s-nt-" + childNode.nodeValue);
          textCommentNode["s-sn"] = childNode["s-sn"];
          insertBefore(childNode.parentNode, textCommentNode, childNode, isInitialLoad);
          childNode.parentNode.removeChild(childNode);
        }
      }
    }
  }
  contentRef = void 0;
  flushQueuedRefCallbacks();
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(
      new Promise(
        (r) => hostRef.$onRenderResolve$ = () => {
          ancestorComponent["s-p"].splice(index - 1, 1);
          r();
        }
      )
    );
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  if (isInitialLoad) {
    queueMicrotask(() => {
      dispatch();
    });
    return;
  }
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      if (hostRef.$deferredConnectedCallback$) {
        hostRef.$deferredConnectedCallback$ = false;
        safeCall(instance, "connectedCallback", void 0, elm);
      }
      {
        hostRef.$flags$ |= 256 /* isListenReady */;
        if (hostRef.$queuedListeners$) {
          hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event, elm));
          hostRef.$queuedListeners$ = void 0;
        }
      }
      if (hostRef.$fetchedCbList$.length) {
        hostRef.$fetchedCbList$.forEach((cb) => cb(elm));
      }
    }
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err) => {
  console.error(err);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate).catch(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render() ;
    {
      hostRef.$flags$ &= -17 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    safeCall(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var appDidLoad = (who) => {
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") ;
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    return;
  }
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`
    );
  }
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(
    newVal,
    cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (flags & 2 /* hasRendered */) {
      if (instance.componentShouldUpdate) {
        const shouldUpdate = instance.componentShouldUpdate(newVal, oldVal, propName);
        if (shouldUpdate === false && !(flags & 16 /* isQueuedForUpdate */)) {
          return;
        }
      }
      if (!(flags & 16 /* isQueuedForUpdate */)) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || BUILD.propChangeCallback) {
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = getPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (!ref) {
              return;
            }
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              }
              origSetter.apply(this, [
                parsePropertyValue(
                  newValue,
                  memberFlags)
              ]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$fetchedCbList$.push(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(
                  newValue,
                  memberFlags);
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$fetchedCbList$.push(() => {
                  setterSetVal();
                });
              }
            }
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          const hostRef = getHostRef(this);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          }
          if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (hostRef && flags2 && !(flags2 & 8 /* isConstructingInstance */) && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((watcher) => {
                const [[watchMethodName, watcherFlags]] = Object.entries(watcher);
                if (instance[watchMethodName] != null && (flags2 & 128 /* isWatchReady */ || watcherFlags & 1 /* Immediate */)) {
                  instance[watchMethodName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propFlags = members.find(([m]) => m === propName);
          const propMemberFlags = propFlags ? propFlags[1][0] : 0;
          const isBooleanTarget = propMemberFlags & 4 /* Boolean */;
          const isSpuriousBooleanRemoval = isBooleanTarget && newValue === null && this[propName] === void 0;
          if (isBooleanTarget) {
            newValue = newValue === null || newValue === "false" ? false : true;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          if (!isSpuriousBooleanRemoval && newValue != this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 31 /* HasAttribute */).map(([propName, m]) => {
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  var _a;
  let Cstr;
  try {
    if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
      hostRef.$flags$ |= 32 /* hasInitializedComponent */;
      hostRef.$flags$ &= -1025 /* hasFailedLoad */;
      const bundleId = cmpMeta.$lazyBundleId$;
      if (bundleId) {
        const CstrImport = loadModule(cmpMeta, hostRef);
        if (CstrImport && "then" in CstrImport) {
          const endLoad = uniqueTime();
          Cstr = await CstrImport;
          endLoad();
        } else {
          Cstr = CstrImport;
        }
        if (!Cstr) {
          hostRef.$flags$ &= -33 /* hasInitializedComponent */;
          hostRef.$loadRetryCount$ = ((_a = hostRef.$loadRetryCount$) != null ? _a : 0) + 1;
          if (hostRef.$loadRetryCount$ < MAX_LAZY_LOAD_RETRIES) {
            hostRef.$flags$ |= 1024 /* hasFailedLoad */;
          }
          throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
        }
        if (!Cstr.isProxied) {
          proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
          Cstr.isProxied = true;
        }
        const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
        {
          hostRef.$flags$ |= 8 /* isConstructingInstance */;
        }
        try {
          new Cstr(hostRef);
        } catch (e) {
          consoleError(e, elm);
        }
        {
          hostRef.$flags$ &= -9 /* isConstructingInstance */;
        }
        endNewInstance();
        const needsDeferredCallback = cmpMeta.$flags$ & 4 /* hasSlotRelocation */;
        if (!needsDeferredCallback) {
          fireConnectedCallback(hostRef.$lazyInstance$, elm);
        } else {
          hostRef.$deferredConnectedCallback$ = true;
        }
      } else {
        Cstr = elm.constructor;
        const cmpTag = elm.localName;
        customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
      }
    }
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent["s-rc"]) {
      ancestorComponent["s-rc"].push(schedule);
    } else {
      schedule();
    }
  } catch (e) {
    consoleError(e, elm);
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$onReadyResolve$ && !(hostRef.$flags$ & 1024 /* hasFailedLoad */)) {
      hostRef.$onReadyResolve$(elm);
    }
  }
};
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    if (!hostRef) {
      return;
    }
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      {
        if (// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && Object.prototype.hasOwnProperty.call(elm, memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef.$flags$ & 1024 /* hasFailedLoad */) {
        setTimeout(() => initializeComponent(elm, hostRef, cmpMeta), LAZY_LOAD_RETRY_INTERVAL_MS);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  if (!win.document) {
    return;
  }
  const contentRefElm = elm["s-cr"] = win.document.createComment(
    ""
  );
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance, elm) => {
  {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef == null ? void 0 : hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$, elm);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$, elm));
    }
  }
  if (rootAppliedStyles.has(elm)) {
    rootAppliedStyles.delete(elm);
  }
  if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
    rootAppliedStyles.delete(elm.shadowRoot);
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = win.document.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ win.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      const tagName = transformTag(cmpMeta.$tagName$);
      const HostElement = class extends HTMLElement {
        ["s-p"];
        ["s-rc"];
        hasRegisteredEventListeners = false;
        // StencilLazyHost
        constructor(self) {
          super(self);
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                createShadowRoot.call(self, cmpMeta);
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!hostRef) {
            return;
          }
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
          nextTick(() => {
            var _a3;
            const hostRef = getHostRef(this);
            if (!hostRef) {
              return;
            }
            const i2 = deferredConnectedCallbacks.findIndex((host) => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          var _a3;
          return (_a3 = getHostRef(this)) == null ? void 0 : _a3.$onReadyPromise$;
        }
      };
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners && win.document) {
    listeners.map(([flags, name, method]) => {
      const target = elm;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = (nonce) => plt.$nonce$ = nonce;
function transformTag(tag) {
  return tag;
}

export { Host as H, getElement as a, bootstrapLazy as b, getAssetPath as c, globalScripts as g, h, promiseResolve as p, registerInstance as r, setNonce as s };
