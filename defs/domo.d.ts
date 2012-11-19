interface IDomoTag {

    (attributes?: Object, innerHtml?: string, ...childTag: any[]): ITag;
    (innerHtml?: string, ...childTag: any[]): ITag;
    (...childTag: any[]): ITag;
}

interface ICSS {
    (selector: string, ...childTag: any[]): any;
}

var
    A: IDomoTag, ABBR: IDomoTag, ACRONYM: IDomoTag, ADDRESS: IDomoTag, AREA: IDomoTag, ARTICLE: IDomoTag, ASIDE: IDomoTag, AUDIO: IDomoTag,
    B: IDomoTag, BDI: IDomoTag, BDO: IDomoTag, BIG: IDomoTag, BLOCKQUOTE: IDomoTag, BODY: IDomoTag, BR: IDomoTag, BUTTON: IDomoTag,
    CANVAS: IDomoTag, CAPTION: IDomoTag, CITE: IDomoTag, CODE: IDomoTag, COL: IDomoTag, COLGROUP: IDomoTag, COMMAND: IDomoTag,
    DATALIST: IDomoTag, DD: IDomoTag, DEL: IDomoTag, DETAILS: IDomoTag, DFN: IDomoTag, DIV: IDomoTag, DL: IDomoTag, DT: IDomoTag, EM: IDomoTag,
    EMBED: IDomoTag, FIELDSET: IDomoTag, FIGCAPTION: IDomoTag, FIGURE: IDomoTag, FOOTER: IDomoTag, FORM: IDomoTag, FRAME: IDomoTag,
    FRAMESET: IDomoTag, H1: IDomoTag, H2: IDomoTag, H3: IDomoTag, H4: IDomoTag, H5: IDomoTag, H6: IDomoTag, HEAD: IDomoTag, HEADER: IDomoTag,
    HGROUP: IDomoTag, HR: IDomoTag, HTML: IDomoTag, I: IDomoTag, IFRAME: IDomoTag, IMG: IDomoTag, INPUT: IDomoTag, INS: IDomoTag, KBD: IDomoTag,
    KEYGEN: IDomoTag, LABEL: IDomoTag, LEGEND: IDomoTag, LI: IDomoTag, LINK: IDomoTag, MAP: IDomoTag, MARK: IDomoTag, META: IDomoTag,
    METER: IDomoTag, NAV: IDomoTag, NOSCRIPT: IDomoTag, OBJECT: IDomoTag, OL: IDomoTag, OPTGROUP: IDomoTag, OPTION: IDomoTag,
    OUTPUT: IDomoTag, P: IDomoTag, PARAM: IDomoTag, PRE: IDomoTag, PROGRESS: IDomoTag, Q: IDomoTag, RP: IDomoTag, RT: IDomoTag, RUBY: IDomoTag,
    SAMP: IDomoTag, SCRIPT: IDomoTag, SECTION: IDomoTag, SELECT: IDomoTag, SMALL: IDomoTag, SOURCE: IDomoTag, SPAN: IDomoTag,
    SPLIT: IDomoTag, STRONG: IDomoTag, SUB: IDomoTag, SUMMARY: IDomoTag, SUP: IDomoTag, TABLE: IDomoTag, TBODY: IDomoTag,
    TD: IDomoTag, TEXTAREA: IDomoTag, TFOOT: IDomoTag, TH: IDomoTag, THEAD: IDomoTag, TIME: IDomoTag, TITLE: IDomoTag, TR: IDomoTag,
    TRACK: IDomoTag, TT: IDomoTag, UL: IDomoTag, VAR: IDomoTag, VIDEO: IDomoTag, WBR: IDomoTag;

interface Ion {
    (selector: string, attributes: Object, ...childStyle: Ion[]): any;
    (selector: string, ...attrs: any[]): any;
    (attributes: Object, innerHtml?: string, ...childTag: Function[]): any;
    (innerHtml?: string, ...childStyle: Function[]): any;

}
interface ITag {
    innerHTML: string;
    outerHTML: string;
}
interface ISTYLE {
    (attributes: Object, ...childStyle: any[]): ITag;
    on: Ion;
}
var STYLE: ISTYLE;

module domo {
    export function global(setGlobal: bool): domo;
}