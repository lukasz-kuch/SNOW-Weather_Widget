function() {
    /* widget controller */
    var c = this;
    //after buttin clicked, client controller send info to serv3er side
    c.getDetails = function() {
        c.values = true;
        c.data.action = "getCity";
        c.server.update().then(function() {
            c.data.action = undefined;
        })
    }
}