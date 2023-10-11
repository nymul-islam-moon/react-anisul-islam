function Card1( props ) {
    const {name, desc} = props;
    return (<div>
        <h3> { name } </h3>
        <p> { desc } </p>
    </div>)
}

export default Card1;