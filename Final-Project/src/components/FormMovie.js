import React, {useContext} from "react"
import { MovieContext } from "../context/MovieContext"
import { Form, Input, Button, InputNumber } from 'antd';


const MovieForm = () => {
    const {
        inputTitle,
        inputDesc,
        inputYear,
        inputDuration,
        inputGenre,
        inputRating,
        inputReview,
        inputImg,
        setInputTitle,
        setInputDesc,
        setInputYear,
        setInputDuration,
        setInputGenre,
        setInputRating,
        setInputReview,
        setInputImg,
        movieSubmit
    } = useContext(MovieContext)

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <>
            <Form 
                name="basic"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 10 }}
                initialValues={{ remember: true }}
                fields={[
                    {
                        name: ["title"],
                        value: inputTitle,
                    },
                    {
                        name: ["description"],
                        value: inputDesc,
                    },
                    {
                        name: ["year"],
                        value: inputYear,
                    },
                    {
                        name: ["duration"],
                        value: inputDuration,
                    },
                    {
                        name: ["genre"],
                        value: inputGenre,
                    },
                    {
                        name: ["rating"],
                        value: inputRating,
                    },
                    {
                        name: ["review"],
                        value: inputReview,
                    },
                    {
                        name: ["image_url"],
                        value: inputImg,
                    }
                  ]}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{
                    padding: "20px"
                }}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input the movie title!' }]}
                    value={inputTitle} 
                    onChange={(event) => {
                        setInputTitle(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: "Please input movie's description!" }]}
                    value={inputDesc} 
                    onChange={(event) => {
                        setInputDesc(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Year"
                    name="year"
                    rules={[{ required: true, message: "Please input movie's Release Year!" }]}
                    value={inputYear} 
                    onChange={(event) => {
                        setInputYear(event.target.value)
                    }}
                >
                <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Duration"
                    name="duration"
                    rules={[{ required: true, message: "Please input movie's Duration!" }]}
                    value={inputDuration} 
                    onChange={(event) => {
                        setInputDuration(event.target.value)
                    }}
                >
                <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Genre"
                    name="genre"
                    rules={[{ required: true, message: "Please input movie's genre!" }]}
                    value={inputGenre} 
                    onChange={(event) => {
                        setInputGenre(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Rating"
                    name="rating"
                    rules={[{ required: true, message: "Please input movie's rating!" }]}
                    value={inputRating} 
                    onChange={(event) => {
                        setInputRating(event.target.value)
                    }}
                >
                <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Review"
                    name="review"
                    rules={[{ required: true, message: "Please input movie's review!" }]}
                    value={inputReview} 
                    onChange={(event) => {
                        setInputReview(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Image URL"
                    name="image_url"
                    rules={[{ required: true, message: "Please input movie's Image URL!" }]}
                    value={inputImg} 
                    onChange={(event) => {
                        setInputImg(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 2,
                    span: 10,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={movieSubmit}>
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )

}

export default MovieForm