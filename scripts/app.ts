///<reference path="../defs/jquery.d.ts"/>
///<reference path="../defs/couch.d.ts"/>
///<reference path="../defs/domo.d.ts"/>
///<reference path="mymodule.ts"/>


function opacity(pct) {
    return { opacity: String(pct / 100), filter: "alpha(opacity=" + pct + ")" }
}

HTML({ lang: "en" },
  HEAD(
    TITLE("A sample of a typescript application within a couchdb"),
    STYLE({ type: "text/css" },
      STYLE.on("body", { textAlign: "center", fontSize: 50 }),
      STYLE.on("h1", opacity(50), { background: "#000", color: "#fff" })
    )
  ),

  BODY(
    H1("A sample of a typescript application within a couchdb"),
    DIV({ id: "databases" }),
    DIV(
        LABEL("name"),
        INPUT({ id: "name" })
        ),
    DIV(
        LABEL("value"),
        INPUT({ id: "value" })
        ),
    
    BUTTON({ id: "create" }, "Click to create new document"))
);

$("#create").click(() => {

    $.couch.login({ name: 'test', password: 'test' });
    $.couch.db("docs").saveDoc(
        {
            name: $("#name").val(),
            value: $("#value").val()
        }, {
            success: (data) => {
                alert("Saved as " + data.id);
            }
        });
});

/*
$.couch.allDbs({
    success: function (dbs) {
        dbs.forEach(function (db) {
            $("#databases").append('<li><a href="/_utils/database.html?' + db + '">' + db + '</a></li>');
        });
    }
});

*/
/* $.couch.signup({ name: 'test' }, "test"); */

