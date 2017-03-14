let PLAYERS;
PLAYERS = [
    {
        name: "Ashish Kr Goyal",
        score: 31,
    },
    {
        name: "Nupur Goyal",
        score: 56,
    },
    {
        name: "Richa Agarwal",
        score: 21,
    },
    /*{
        name: "Kritika Goyal",
        score: 38,
    },*/
    {
        name: "Akshita Agarwal",
        score: 55,
    },
    {
        name: "Charu Goyal",
        score: 45,
    },
];


function Stats(props) {
    let Player_Count;
    Player_Count = props.player.length;


    let Total_Score;
    Total_Score = 0;
    props.player.map(function (player,index) {
        Total_Score = Total_Score + props.player[index].score;
    });

    /*Here I May Use reduce() Method*/

    return(
        <div className="stats">
            <table>
                <tbody>         {/*//Must (tbody and thead)For Writing In ReactJS to remove virtual DOM confusion*/}
                <tr>
                    <td>Players:</td>
                    <td>{Player_Count}</td>
                </tr>

                <tr>
                    <td>Total Points:</td>
                    <td>{Total_Score}</td>
                </tr>
                </tbody>

            </table>
        </div>
    );
}
Stats.propTypes = {
    player: React.PropTypes.array.isRequired,
};


function Header(props) {
    return(
        <div className="header">
            {/*<Stats/>*/}
            <h1>{props.title}</h1>
           <Stats player={props.player}/>
        </div>
    );
}
Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    player: React.PropTypes.array.isRequired,
};


/*var Counter = React.createClass(
 {
 propTypes: {
 score: React.PropTypes.number.isRequired,
 },

 getInitialState: function () {
 return{
 score: 0,
 }
 },

 incrementScore: function () {
 this.setState(
 {
 score: (this.state.score + 1),
 }
 );
 },

 decrementScore: function () {
 this.setState(
 {
 score: (this.state.score - 1),
 }
 );
 },

 render: function () {
 return(
 <div className="counter">
 <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
 {/!* <div className="counter-score">{props.score}</div>*!/}
 <div className="counter-score">{this.state.score}</div>
 <button className="counter-action increment" onClick={this.incrementScore}> + </button>
 </div>
 );
 }
 }
 );*/


/*function Counter(props) {
 return(
 <div className="counter">
 <button className="counter-action decrement"> - </button>
 <div className="counter-score">{props.score}</div>
 <button className="counter-action increment"> + </button>
 </div>
 );
 }*/
/*Counter.propTypes = {
 score: React.PropTypes.number.isRequired,
 };*/

function Counter(props) {
    return(
        <div className="counter">
            <button className="counter-action decrement" onClick={function () {
                props.onChange(-1);
            }}> - </button>

            <div className="counter-score">{props.score}</div>  {/*It Is Valid For Function Props*/}

            {/*<div className="counter-score">{this.state.score}</div>*/} {/*It Is Valid For State*/}

            <button className="counter-action increment" onClick={function () {
                props.onChange(+1);
            }}> + </button>
        </div>
    );
}
Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func,
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
                <Counter score={props.score} onChange={props.onScoreChange}/>

            </div>
        </div>
    );
}
Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    onScoreChange: React.PropTypes.func,
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

var Application;
Application = React.createClass(
    {
        propTypes: {
            title: React.PropTypes.string.isRequired,
            player: React.PropTypes.arrayOf(React.PropTypes.shape(
                {
                    name: React.PropTypes.string.isRequired,
                    score: React.PropTypes.number.isRequired,
                }
            )).isRequired,
        },

        getDefaultProps: function () {
            return(
                {
                    title: "AshishProject",
                }
            );
        },

        getInitialState: function () {
            return(
                {
                    /*player: {PLAYERS},*/
                    player: this.props.player
                }
            );
        },

        onScoreChange: function (index,delta) {
            console.log('onScoreChange Has Been Triggered',index,delta);
            this.state.player[index].score = this.state.player[index].score + delta;
            this.setState(this.state)
        },

        render: function () {
            return(
                <div className="application">
                    {/*<div className="header">
                     <h1>{props.title}</h1>
                     </div>*/}

                    <Header title={this.props.title} player={this.props.player}/>

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
                        {/*<Player name="Ashish kr Goyal" score={35}/>*/}

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
                        {/*<Player name="Nupur Goyal" score={56}/>*/}

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
                        {/* <Player name="Richa Agarwal" score={13}/>*/}


                        {
                            this.props.player.map(function (player,index) {
                                return(
                                    <Player
                                        onScoreChange={function (delta) {
                                            this.onScoreChange(index,delta)
                                        }.bind(this)}
                                        name={player.name}
                                        score={player.score}
                                    />
                                );
                            }.bind(this))
                        }


                    </div>
                </div>
            );
        },


    }
);


/*function Application(props) {
 /!*return(
 <div>
 <h1>Ashish Kumar Goyal Lives In New Delhi-110051,India</h1>
 <p>152/c, 2nd floor, old anarkali, near preet vihar, Delhi-51</p>
 </div>
 );*!/

 return(
 <div className="application">
 {/!*<div className="header">
 <h1>{props.title}</h1>
 </div>*!/}

 <Header title={props.title}/>

 <div className="players">
 {/!*<div className="player">
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
 </div>*!/}
 {/!*<Player name="Ashish kr Goyal" score={35}/>*!/}

 {/!*<div className="player">
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
 </div>*!/}
 {/!*<Player name="Nupur Goyal" score={56}/>*!/}

 {/!*<div className="player">
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
 </div>*!/}
 {/!* <Player name="Richa Agarwal" score={13}/>*!/}


 {
 props.player.map(function (player) {
 return(
 <Player name={player.name} score={player.score}/>
 );
 })
 }


 </div>
 </div>
 );
 }*/

/*Application.propTypes = {
 title: React.propTypes.number.isRequired, //remind the capslock of propTypes And PropTypes
 };*/

/*Application.propTypes = {
 title: React.PropTypes.string.isRequired,
 player: React.PropTypes.arrayOf(React.PropTypes.shape(
 {
 name: React.PropTypes.string.isRequired,
 score: React.PropTypes.number.isRequired,
 }
 )).isRequired,
 };*/

/*Application.defaultProps = {
 title: "AshishProject",
 };*/

//ReactDOM.render(<h1>Ashish Kr Goyal Is A Student Of JIIT,Noida</h1>,document.getElementById('container'));
//ReactDOM.render(<Application/>,document.getElementById('container'));.

ReactDOM.render(<Application title="LeaderBoard" player={PLAYERS}/>,document.getElementById('container'));

/*
 ReactDOM.render(<Application/>,document.getElementById('container'));
 */
