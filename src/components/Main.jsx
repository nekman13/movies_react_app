import React from "react";
import Movies from "./Movies";
import Preloader from "./Preloader";
import Footer from "../layout/Footer";
import Search from "./Search";
import ChooseType from "./ChooseType";


class Main extends React.Component {


    state = {
        movies: [],
        loading: true,

    };


    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=7851dfcb&s=matrix&")
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}));
    }

    searchMovies = (str, type = "") => {
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?apikey=7851dfcb&s=${str}&${type === "" ? "" : `type=${type}&`}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}));
    }


    render() {
        return (
            <div>
                <Search searchMovies={this.searchMovies}/>
                { !this.state.loading ?
                    <div>
                        <Movies movies={this.state.movies}/>

                    </div>

                    : <Preloader/>}

            </div>

        )
    }
}


export default Main;