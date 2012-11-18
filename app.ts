declare var $, HTML, HEAD, TITLE, STYLE, BODY, H1;

function opacity(pct) {
    return {opacity: String(pct / 100), filter: "alpha(opacity=" + pct + ")"}
  }

  HTML({lang: "en"},
    HEAD(
      TITLE("Welcome to domo"),
      STYLE({type: "text/css"},
        STYLE.on("body", {textAlign: "center", fontSize: 50}),
        STYLE.on("h1", opacity(50), {background: "#000", color: "#fff"})
      )
    ),

    BODY(H1("Welcome to domo"))
  )


  $.couch.allDbs({
      success : function(dbs) {
        dbs.forEach(function(db) {
          $("#databases").append('<li><a href="/_utils/database.html?'+db+'">'+db+'</a></li>');
        });
      }
    });