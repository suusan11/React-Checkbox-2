import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CheckBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selection: ['first']
        };
    }

    handleChange(event) {
        console.log(this.state.selection);
        var selection = this.state.selection;
        var position = selection.indexOf(event.target.value);
        if (position === -1) {
            selection.push(event.target.value);
        } else {
            selection.splice(position, 1);
        }
        this.setState({selection: selection});
        console.log(this.state);
    };

    render() {
        return(
            <div>いくつでも選んでください
                <div><input
                    type='checkbox'
                    value='first'
                    checked={this.state.selection.indexOf('first') !== -1}
                    onChange={this.handleChange.bind(this)}
                />最初の選択肢</div>
                <div><input
                    type='checkbox'
                    value='secound'
                    checked={this.state.selection.indexOf('second') !== -1}
                    onChange={this.handleChange.bind(this)}
                />二番目の選択肢</div>
                <div><input
                    type='checkbox'
                    value='third'
                    checked={this.state.selection.indexOf('third') !== -1}
                    onChange={this.handleChange.bind(this)}
                />三番目の選択肢</div>
            </div>
        );
    }
}

export default CheckBox;