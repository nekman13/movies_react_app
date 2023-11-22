import React from "react";
import Movies from "./Movies";
import Preloader from "./Preloader";
import Search from "./Search";


class Main extends React.Component {


    state = {
        movies: [],
        loading: true,

    };

    API_KEY = process.env.REACT_APP_API_KEY;


    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=matrix&`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err) => {
                console.error(err);
                this.setState({loading: false});
        } )
    }


    searchMovies = (str, type = "") => {
        if (str !== "") {
            this.setState({loading: true});
            fetch(`https://www.omdbapi.com/?apikey=7851dfcb&s=${str}&${type === "" ? "" : `type=${type}&`}`)
                .then(response => response.json())
                .then(data => this.setState({movies: data.Search, loading: false}));
        }
    }


    render() {
        return (
            <div>
                <Search searchMovies={this.searchMovies}/>
                {!this.state.loading ?
                    <div>
                        <Movies movies={this.state.movies}/>

                    </div>

                    : <Preloader/>}

            </div>

        )
    }
}


export default Main;