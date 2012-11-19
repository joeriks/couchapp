<strong>OK, this is a pretty odd way of creating applications. But this method met a few goals I had for rapid application creation:</strong>

1. Create it in Typescript only.
2. Use some kind of document database from client side javascript.
3. Run and debug locally.
4. Publish easily.

My application iterations looks like this:

1. Make code changes in Typescript.
2. Test it locally.
3. Publish to Github. Test it online.
4. Update one single file to the live web server.

<strong>The database is the web server</strong>

The web server is actually a Couchdb instance running on host Iriscouch (free for small usage). Couchdb is a document database that can host html, js and other web resources.

In my couchdb instance I have a database document named "test". And within that I have three file attachments:

* index.html
* couchapp.min.js
* github.html

index.html is the base html document that hosts my script, it looks like:

	<!doctype html>
	<html>
	  <script src="couchapp.min.js"></script>
	</html>

couchapp.min.js contains all my scripts in one minified bundle.

<strong>The file structure in Visual Studio</strong>

The bundled script contains (for now) jquery.js, jquery.couch.js, domo.js and my own scripts mymodule.js and app.js.

app.js uses domo.js to create html and styles. And it calls functionality in mymodule.js.

Both my own javascript files are compiled from Typescript. They are bundled on build in Visual Studio with the help of Web Essentials.

The couchapp.js.bundle looks like this

	<?xml version="1.0" encoding="utf-8"?>
	<bundle minify="true" runOnBuild="true">
	  <!--The order of the <file> elements determins the order of them when bundled.-->

	  <file>/lib/jquery.js</file>
	  <file>/lib/jquery.couch.js</file>
	  <file>/lib/domo.js</file>

	  <file>/scripts/mymodule.js</file>
	  <file>/scripts/app.js</file>
  
	</bundle>

When I have made a new version I need to manually upload the bundled js to iriscouch. However before I do that I can run the github.html from iriscouch, which runs the current script from my github repository. Github.html looks like this:

	<!doctype html>
	<html>
	  <script src="https://raw.github.com/joeriks/couchapp/master/couchapp.js"></script>
	</html>

You can see the application live at https://joeriks.iriscouch.com:6984/docs/test/index.html
And the "develop version" is at 
https://joeriks.iriscouch.com:6984/docs/test/github.html