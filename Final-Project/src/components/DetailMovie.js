import React, {useContext} from "react";
import { Card, Divider, Col } from 'antd';
import { MovieContext } from "../context/MovieContext"


const DetailMovie = () => {
    const {
        inputTitle,
        inputDesc,
        inputYear,
        inputDuration,
        inputGenre,
        inputRating,
        inputReview,
        inputImg
    } = useContext(MovieContext)

    return (
        <>
            <Divider orientation="left">
                <h1>{inputTitle} Movie</h1>
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
                <strong>Year</strong> : {inputYear}
            </p>
            <p>
                <strong>Duration</strong> : {inputDuration}
            </p>
            <p>
                <strong>Genre</strong> : {inputGenre}
            </p>
            <p>
                <strong>Synopsis</strong> : {inputDesc}
            </p>
            <p>
                <strong>Rating</strong> : {inputRating}
            </p>
            <p>
                <strong>Review</strong> : {inputReview}
            </p>
            </div>
        </>
    )
}

export default DetailMovie;