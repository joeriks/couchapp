interface JQueryStatic {

    couch: Icouch;

}

interface Icouch {

    allDbs: any;
    signup(user_doc: { name: string; }, password: string, options?: Object);
    login(options: { name: string; password: string; });
    logout(options? );
    session(options? );
    db(name: string): Idb;
}

interface Idb {
    saveDoc(doc, options? );
    openDoc(docId, options, ajaxOptions);
}