import React, {useContext} from "react"
import { GameContext } from "../context/GameContext"
import { Form, Input, Button, Checkbox, InputNumber } from 'antd';


const GameForm = () => {
    const {
        inputName,
        inputGenre,
        inputSinglePlayer,
        inputMultiplayer,
        inputPlatform,
        inputRelease,
        inputImg,
        setInputName,
        setInputGenre,
        setInputSinglePlayer,
        setInputMultiplayer,
        setInputPlatform,
        setInputRelease,
        setInputImg,
        gameSubmit
    } = useContext(GameContext)

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
                        name: ["name"],
                        value: inputName,
                    },
                    {
                        name: ["genre"],
                        value: inputGenre,
                    },
                    {
                        name: ["singlePlayer"],
                        value: inputSinglePlayer,
                    },
                    {
                        name: ["multiPlayer"],
                        value: inputMultiplayer,
                    },
                    {
                        name: ["platform"],
                        value: inputPlatform,
                    },
                    {
                        name: ["release"],
                        value: inputRelease,
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
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please input the game's name!" }]}
                    value={inputName} 
                    onChange={(event) => {
                        setInputName(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Genre"
                    name="genre"
                    rules={[{ required: true, message: "Please input game's genre!" }]}
                    value={inputGenre} 
                    onChange={(event) => {
                        setInputGenre(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Platform"
                    name="platform"
                    rules={[{ required: true, message: "Please input game's platform!" }]}
                    value={inputPlatform} 
                    onChange={(event) => {
                        setInputPlatform(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Release"
                    name="release"
                    rules={[{ required: true, message: "Please input game's release!" }]}
                    value={inputRelease} 
                    onChange={(event) => {
                        setInputRelease(event.target.value)
                    }}
                >
                <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Image URL"
                    name="image_url"
                    rules={[{ required: true, message: "Please input game's Image URL!" }]}
                    value={inputImg} 
                    onChange={(event) => {
                        setInputImg(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>

                <Form.Item name="singlePlayer" valuePropName="checked" wrapperCol={{ offset: 2, span: 10 }}>
                <Checkbox value={inputSinglePlayer} onChange={() => {
                    setInputSinglePlayer(!inputSinglePlayer)
                }}>Single Player</Checkbox>
                </Form.Item>
                
                <Form.Item name="multiPlayer" valuePropName="checked" wrapperCol={{ offset: 2, span: 10 }}>
                <Checkbox value={inputMultiplayer} onChange={() => {
                    setInputMultiplayer(!inputMultiplayer)
                }}>Multi Player</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 2,
                    span: 10,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={gameSubmit}>
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )

}

export default GameForm