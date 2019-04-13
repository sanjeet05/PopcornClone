import React, { Component } from 'react';
import ListView from './ListView';

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = { movieList: [] };
    }
    componentDidUpdate() {
        const {page, type} = this.props;
        fetch(`https://tv-v2.api-fetch.website/${type}/${page}`)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({movieList: result});
            },
            (error) => {
            console.log(error);
            }
        )
    }
    render() {
        let movieList = this.state.movieList;
        if (movieList && movieList.length) {
            let sortedMovieList = [];
            for (var i=0; i<movieList.length/4;i=i+4) {
                let rowMovieList = [];
                for (var j=i; j<i+4; j++){
                    rowMovieList.push(movieList[j]);
                }
                sortedMovieList.push(rowMovieList);
            }
            return (
                <div className=" teal lighten-2 row">
                    <div >
                    {
                        sortedMovieList.map((movieArrayList, key) => {
                            return <ListView key={key} id={key} array={movieArrayList} />
                        })
                    }           
                    </div>
                </div>
            )
        }
        return (
            <h3> Sorry, No movies found..!!</h3>
        )
    }
}

export default MainView;