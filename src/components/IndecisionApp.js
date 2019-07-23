import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
        
    };

    handleDeleteOptions = () => {
        this.setState(()=> ({ options: [] }) );
    };
    handleDeleteOption = (optionToDelete)=> {
        console.log(optionToDelete);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return option!==optionToDelete; 
            })
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        this.setState(()=> ({selectedOption: this.state.options[randomNum]}));
    };
    handleAddOption = (option) =>{
        if(!option){
            return 'Enter a valid value to add item.';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'This option already exists.';   
        }
        this.setState((prevState)=> ({options: prevState.options.concat([option])}) );
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    };
    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options: options}));
            }
        } catch(e) {
            console.log('caught an error');
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);

        }
    }
    

    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer.";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options 
                        options={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions} 
                        handleAddOption = {this.handleDeleteOption}
                        handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        );
    }
}

export default IndecisionApp;