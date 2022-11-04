function Pokemon(){
return(
    <div className="card">

    </div>
)
}

Pokemon.propTypes={
    pokemon: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        img:PropTypes.string.isRequired,

    })).isRequired
}