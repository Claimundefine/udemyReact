console.log('We are Running');



var appRoot = document.getElementById('app');


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
    <h1>A</h1>
    </div>
);

//Create own templateTwo var JSX expression
//div
//  h1 -> name
//  p -> Age: age
// Location: cityname
//Render templateTwo instead of template.

const multiplier = {
    numbers: [1,2,3,4],
    multiplyby: 4,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyby);
    }
};

var meme = <h1>Indecision App</h1>

let count = 0;

const addOne = () => {
    count++;
    console.log("Added One");
    renderCounterApp();
};

const templateTwo = (
    <div>
    <h1> Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={addOne}>-11</button>
    </div>
);

const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1> Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={addOne}>-11</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

let app = {
    name: 'Indecision App',
    subtitle: 'Put your life in a computer idk',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    render();

    console.log("form submitted");
}


const template1 = (
    <div>
    <h1>Indecision</h1>
    <p>{app.options.length>0 ? " yes ": "no options"}</p>
    <p>{app.options.length}</p>
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option"></input>
    <button>Add Option</button>
    </form>
    </div>
);

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}



const render = () => {
    const template1 = (
        <div>
        <h1>Indecision</h1>
        <p>{app.options.length>0 ? " yes ": "no options"}</p>
        <button disabled ={app.options.length <1} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
        {
            app.options.map((option) => {
            return <li key={option}>{option}</li>;
            })
        }
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
        </form>
        </div>
    );

    ReactDOM.render(template1, appRoot);
};

//TODO: uncomment
render();

// let a = false;

// const changeA = () => {
//     a = !a;
//     renderVisibility();
// }

// const renderVisibility = () => {
//     const template3 = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={changeA}>{a ? 'Hide details' : 'Show details'}
//         </button>
//         <p>{a ? "Details" : undefined}</p>
//         </div>
//     );

//     ReactDOM.render(template3, appRoot);
// };

// renderVisibility();