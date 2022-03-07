import React, {useContext} from "react";
import { Card, Divider, Col, Row } from 'antd';
import { MovieContext } from "../context/MovieContext"
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

  const {movies, movieEdit} = useContext(MovieContext)
  const history = useHistory()

  return (
    <>
      <Divider orientation="left">Data Movie</Divider>

      <div className="site-card-wrapper">
        <Row gutter={16}>
        {movies.length && (
        <> 
          {movies.map( res => {
            return (
              <>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img src={`${res.image_url}`} />}
                  onClick={() => { 
                    movieEdit(res.id) 
                    history.push(`/movie/show/${res.id}`);
                  }}
                >
                  <Meta title={`${res.title}`} description={`${handleText(res.description)}`} />
                </Card>
              </Col>
              </>
            )
          })}
        </>)}
        </Row>
      </div>
    </>
  );
}

export default App;