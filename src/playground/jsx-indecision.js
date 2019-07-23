console.log('App.js is running!');

// JSX -  JavaScript XML

{/*comment in jsx */}

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
}


const clearOptions = ()=> {
    app.options = [];
    renderTemplate();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderTemplate = ()=> {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are the options.</p> : <p>No options.</p>}
            <button disabled={app.options.length==0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick = {clearOptions}>Clear All</button>
            {
                /*
                //[99,97,98]  //equivalent to {99}{98}{97}
                //[<p key="1">a</p>,<p key="2">b</p>,<p key="3">c</p>]  to render array of JSX
                numbers.map((number)=>{
                     return <p key={number}>Number: {number}</p>;
                })
                */
            }
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template,appRoot);
    
}

renderTemplate();