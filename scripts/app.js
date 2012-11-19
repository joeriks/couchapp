
function opacity(pct) {
    return {
        opacity: String(pct / 100),
        filter: "alpha(opacity=" + pct + ")"
    };
}
HTML({
    lang: "en"
}, HEAD(TITLE("Welcome to domo v1"), STYLE({
    type: "text/css"
}, STYLE.on("body", {
    textAlign: "center",
    fontSize: 50
}), STYLE.on("h1", opacity(50), {
    background: "#000",
    color: "#fff"
}))), BODY(H1("Welcome to domo"), DIV({
    id: "databases"
})));
mymodule.yo("version 4");
$.couch.signup({
    name: 'test'
}, "test");
$.couch.login({
    name: 'test',
    password: 'test'
});
$.couch.db("foo").saveDoc({
    documentproperty: 'some value'
}, {
    success: function (data) {
        alert("Saved as " + data.id);
    }
});
