console.log('We are Running');



var template2 = (
<div>
    <h1>Indecision App</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "no Options"}</p>
</div>);
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
}

function getLocation(location) {
    if (location){
        return <p>Location: {location}</p>;
    }
    return undefined;
}

var template =(
    <div>
    <h1>{app.name ? app.name : "memer"}</h1>
    {user.age >= 18 && <p>Age {user.age}</p>}
    <p>{app.subtitle}</p>
    {getLocation(user.location)}
    </div>
);

//Create own templateTwo var JSX expression
//div
//  h1 -> name
//  p -> Age: age
// Location: cityname
//Render templateTwo instead of template.

ReactDOM.render(template2, appRoot);