import React from "react";
import ChooseType from "./ChooseType";

class Search extends React.Component {

    state = {
        search: "",
        type: ""
    }


    changeSearch = (value) => {
        this.setState({search: value})
    }


    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }



    handleChooseType = (event) => {
        this.setState({type: event.target.value});
        this.props.searchMovies(this.state.search, event.target.value)
    }



    render() {
        return (
            <div className="row search">
                    <div className="input-field">
                        <input
                            onChange={(e) => this.changeSearch(e.target.value, this.state.type)}
                            onKeyUp={this.handleKey}
                            value={this.state.search}
                            placeholder="Search"
                            id="search"
                            type="search"
                            className="validate"
                        />
                        <button className="searchButton" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
                        <ChooseType state={this.state} handleChooseType={this.handleChooseType}/>
                </div>
            </div>
        )
    }
}


export default Search;