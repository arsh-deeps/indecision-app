class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            flag: true,
            buttontext: 'Show Details',
            text: null
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            let btext = 'Show Details';
            let ttext = null;
            if(prevState.flag){
                btext = 'Hide Details';
                ttext = <p>Magic, is it? Muhahaha...</p>;
            }
            return {
                text: ttext,
                buttontext: btext,
                flag: !prevState.flag
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.buttontext}</button>
                {this.state.text}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />,document.getElementById('app'));

// let app = {
//     toggledText : 'Sample text',
//     flag : false
// }

// const toggleText = () => {
//     if(app.flag == true)
//         app.flag = false;
//     else
//         app.flag = true;
//     render();
// }

// const render = () => {

//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleText}>{app.flag ? 'Hide details' : 'Show details'}</button>
//             { app.flag ? <p>{app.toggledText}</p> : undefined  }
//         </div>
//     );

//     ReactDOM.render(template,document.getElementById('app'));
// }

// render();


