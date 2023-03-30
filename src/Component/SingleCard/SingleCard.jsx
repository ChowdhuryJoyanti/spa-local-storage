import React from 'react';

const SingleCard = ({movie}) => {
    // const {movie} = props;
    // console.log(movie);
    return (
        <div className="movie-card card  text-center w-100 m-auto col-md-6">
        <div className="movie-poster w-50 m-auto">
            <img className='w-75' src={movie.poster} alt="" />
            <h3>{movie.movieName}</h3>
            <p>{movie.description}</p>
                 <div className="timeAndRating d-felx justify-content-around">
                    <p>Watch Time:{movie.watchTime}</p>
                    <p>Rating:{movie.imdRating}</p>
                 </div>
                 <button className='btn btn-info'>Book Now</button>
        </div>
    </div>
    );
};

export default SingleCard;