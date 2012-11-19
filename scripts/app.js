
function opacity(pct) {
    return {
        opacity: String(pct / 100),
        filter: "alpha(opacity=" + pct + ")"
    };
}
HTML({
    lang: "en"
}, HEAD(TITLE("A sample of a typescript application within a couchdb"), STYLE({
    type: "text/css"
}, STYLE.on("body", {
    textAlign: "center",
    fontSize: 50
}), STYLE.on("h1", opacity(50), {
    background: "#000",
    color: "#fff"
}))), BODY(H1("A sample of a typescript application within a couchdb"), DIV({
    id: "databases"
}), BUTTON({
    id: "create"
}, "Click to create new document")));
$("#create").click(function () {
    $.couch.login({
        name: 'test',
        password: 'test'
    });
    $.couch.db("docs").saveDoc({
        documentproperty: 'some value'
    }, {
        success: function (data) {
            alert("Saved as " + data.id);
        }
    });
});
