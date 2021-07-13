"use strict";

console.log('We are Running');

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options" : "no Options"
    )
);
var appRoot = document.getElementById('app');

var app = {
    name: 'Indecision App',
    subtitle: 'Put your life in a computer idk',
    options: ['one', 'two']
};

var user = {
    name: 'ABC',
    age: 123,
    location: 'USA'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
    return undefined;
}

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.name ? app.name : "memer"
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        "Age ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    getLocation(user.location)
);

//Create own templateTwo var JSX expression
//div
//  h1 -> name
//  p -> Age: age
// Location: cityname
//Render templateTwo instead of template.

ReactDOM.render(template2, appRoot);
