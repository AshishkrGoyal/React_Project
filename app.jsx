function Header(props) {
    return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

function Counter(props) {
    return(
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment"> + </button>
        </div>
    );
}
Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
};

function Player(props) {
    return(
        <div className="player">
            <div className="player-name">
                {/*Ashish kr Goyal*/}
                {props.name}
            </div>
            <div className="player-score">
                {/*<div className="counter">
                    <button className="counter-action decrement"> - </button>
                    <div className="counter-score">{props.score}</div>
                    <button className="counter-action increment"> + </button>
                </div>*/}
                <Counter score={props.score}/>
                
            </div>
        </div>
    );
}
Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
};

/*function Counter(props) {
    return(
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment"> + </button>
        </div>
    );
}
Counter.propTypes = {
  score: React.PropTypes.number.isRequired,  
};*/

function Application(props) {
    /*return(
        <div>
            <h1>Ashish Kumar Goyal Lives In New Delhi-110051,India</h1>
            <p>152/c, 2nd floor, old anarkali, near preet vihar, Delhi-51</p>
        </div>
    );*/

    return(
        <div className="application">
            {/*<div className="header">
                <h1>{props.title}</h1>
            </div>*/}

            <Header title={props.title}/>

            <div className="players">
                {/*<div className="player">
                    <div className="player-name">
                    Ashish kr Goyal
                    </div>
                    <div className="player-score">
                        <div className="counter">
                            <button className="counter-action decrement"> - </button>
                            <div className="counter-score">21</div>
                            <button className="counter-action increment"> + </button>
                        </div>
                    </div>
                </div>*/}
                <Player name="Ashish kr Goyal" score={35}/>

                {/*<div className="player">
                    <div className="player-name">
                        Nupur Goyal
                    </div>
                    <div className="player-score">
                        <div className="counter">
                            <button className="counter-action decrement"> - </button>
                            <div className="counter-score">34</div>
                            <button className="counter-action increment"> + </button>
                        </div>
                    </div>
                </div>*/}
                <Player name="Nupur Goyal" score={56}/>

                {/*<div className="player">
                    <div className="player-name">
                        Richa Agarwal
                    </div>
                    <div className="player-score">
                        <div className="counter">
                            <button className="counter-action decrement"> - </button>
                            <div className="counter-score">12</div>
                            <button className="counter-action increment"> + </button>
                        </div>
                    </div>
                </div>*/}
                <Player name="Richa Agarwal" score={13}/>
            </div>
        </div>
    );
}

/*Application.propTypes = {
    title: React.propTypes.number.isRequired,
};*/

Application.propTypes = {
    title: React.PropTypes.string.isRequired,
};

Application.defaultProps = {
    title: "AshishProject",
};

//ReactDOM.render(<h1>Ashish Kr Goyal Is A Student Of JIIT,Noida</h1>,document.getElementById('container'));
//ReactDOM.render(<Application/>,document.getElementById('container'));.

ReactDOM.render(<Application title="LeaderBoard"/>,document.getElementById('container'));

/*
ReactDOM.render(<Application/>,document.getElementById('container'));
*/
