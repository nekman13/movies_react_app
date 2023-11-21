function Movie(props) {
    const {
        Title: title,
        Year: year,
        Poster: poster,
        Type: type
    } = props;


    return (
        <div className="card movie">
            <div className="card-image">
                {poster === "N/A" ?
                    <img src="https://placehold.co/375x563?text=Изображение не найдено"/>
                    :
                    <img src={poster}/>}
            </div>

            <span className="card-title">{title}</span>
            <div className="card-content">
                <p>{type} {year}</p>
            </div>
        </div>
    )
}


export default Movie;


