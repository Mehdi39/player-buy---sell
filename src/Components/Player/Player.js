import React from 'react';
import './Player.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Player = (props) => {
    const { name, salary, url } = props.playersInfo;
    const handleSelectBtn = props.handleSelectBtn;

    return (
        <div className="player">
            <div>
                <img src={url} alt="" />
            </div>
            <div>
            <h1>{name}</h1>
                <h4>${salary}</h4>
                <button className="btn btn-success" onClick={() => handleSelectBtn(props.playersInfo)}>Select</button>
            </div>
        </div>
    );
};

export default Player;