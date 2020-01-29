function() {
    /* widget controller */
    var c = this;

    c.getDetails = function() {
        c.values = true;
        c.data.action = "getCity";
        c.server.update().then(function() {
            c.data.action = undefined;
        })
    }
}