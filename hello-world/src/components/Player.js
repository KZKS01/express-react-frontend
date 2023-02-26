function Player(props){
    //console.log(props);
    return(
        <div>
            <h2>Player {props.whichPlayer}</h2>
            <h3>Wins: {props.wins}</h3>
        </div>
    );
}

export default Player;