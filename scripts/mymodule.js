var mymodule;
(function (mymodule) {
    function yo(message) {
        alert(message);
    }
    mymodule.yo = yo;
})(mymodule || (mymodule = {}));

