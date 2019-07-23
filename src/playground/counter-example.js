class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        try{
            const count = parseInt(localStorage.getItem("count"),10);
            console.log(count);
            if(!(isNaN(count))){
                this.setState(() => ({count}));
            }
        } catch(e) {

        }
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevState.count != this.state.count) {
            localStorage.setItem("count",this.state.count);
        }
    }
    handleAddOne(){
        this.setState((prevState)=> ({count: prevState.count+1})) ;  //arrow function syntax for just returning
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}



ReactDOM.render(<Counter />,document.getElementById('app'));
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// //console.log(templateTwo);

// //some html attributes get changed due to reserved keywords 
// //(google react dom elements for documentation)

// //JSX ignores booleans
// const appRoot = document.getElementById('app');




// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// };

// renderCounterApp();