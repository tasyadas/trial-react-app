import React, {useContext, useEffect} from "react";
import { Card, Divider, Col, Row } from 'antd';
import { GameContext } from "../context/GameContext"
import { useHistory } from "react-router-dom";


const { Meta } = Card;


const handleText = (params) => {
  if (params === undefined || params === null) {
      return ''
  } else {
      return params.slice(0, 10) + '...'
  }
}

function App() {

  const {games, gameEdit} = useContext(GameContext)
  const history = useHistory()

  return (
    <>
      <Divider orientation="left">Data Game</Divider>

      <div className="site-card-wrapper">
        <Row gutter={16}>
        {games.length && (
        <> 
          {games.map( res => {
            return (
              <>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img src={`${res.image_url}`} />}
                  onClick={() => { 
                    gameEdit(res.id) 
                    history.push(`/game/show/${res.id}`);
                  }}
                >
                  <Meta title={`${res.name}`} description={`${handleText(res.description)}`} />
                </Card>
              </Col>
              </>
            )
          })}
        </>)}
        </Row>
      </div>
      <button type="button" onClick={window.showBot}>Click to show</button>

    </>
  );
}

export default App;