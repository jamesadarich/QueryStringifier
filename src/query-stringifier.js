function QueryString() {
    this.stringify = function () {
        var newQs,
            myself;

        newQs = [];
        myself = this;

        //Go through all properties and return them back to their stringy form
        Object.keys(myself).map(function (propertyName) {
            if (myself.hasOwnProperty(propertyName) && typeof myself[propertyName] !== 'function') {
                newQs.push(encodeURIComponent(propertyName) + '=' + encodeURIComponent(myself[propertyName]));
            }
        });

        return newQs.join('&');
    };
}

getQueryString = function () {

    //If there is a query string in the URI
    var queryString,
        queryStringObject,
        queryStringParts;

    queryString = document.location.href.split('?')[1];

    if (queryString) {
        queryStringObject = new QueryString();
        //Find all the parts of the query string and put them into properties
        queryStringParts = queryString.split('&');

        queryStringParts.map(function (queryStringPart) {
            queryStringObject[queryStringPart.split('=')[0]] = decodeURIComponent(queryStringPart.split('=')[1]);
        });

        return queryStringObject;
    }
}

window.location.queryString = getQueryString();
