import React, {useContext} from "react";
import { Card, Divider, Col } from 'antd';
import { GameContext } from "../context/GameContext"


const DetailGame = () => {
    const {
        inputName,
        inputGenre,
        inputSinglePlayer,
        inputMultiplayer,
        inputPlatform,
        inputRelease,
        inputImg
    } = useContext(GameContext)

    return (
        <>
            <Divider orientation="left">
                <h1>{inputName} Game</h1>
            </Divider>
            <Col span={12}>
            <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img src={inputImg} />}
                >
            </Card>
            </Col>
            <div style={{marginTop: "20px"}}>
            <p>
                <strong>Release</strong> : {inputRelease}
            </p>
            <p>
                <strong>Single Player</strong> : {inputSinglePlayer}
            </p>
            <p>
                <strong>Multi Player</strong> : {inputMultiplayer}
            </p>
            <p>
                <strong>Genre</strong> : {inputGenre}
            </p>
            <p>
                <strong>Platform</strong> : {inputPlatform}
            </p>
            </div>
        </>
    )
}

export default DetailGame;