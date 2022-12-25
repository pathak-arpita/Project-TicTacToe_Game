function Square (props) {
    return (
        <div className="squareContainer" {...props} >{props.x ? "X" :(props.o ?"O" :" ")}</div>
    )
}

export default Square;