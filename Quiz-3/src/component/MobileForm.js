import React, {useContext} from "react"
import { MobileContext } from "../context/mobileContext"
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from "react-router-dom";


const MobileForm = () =>{
    const history = useHistory()
    const {
        inputName,
        inputCategory,
        inputDesc,
        inputRelease,
        inputSize,
        inputPrice,
        inputRating,
        inputImg,
        inputIsAndroidApp,
        inputIsIOSApp,
        setInputName,
        setInputCategory,
        setInputDesc,
        setInputRelease,
        setInputSize,
        setInputPrice,
        setInputRating,
        setInputImg,
        setInputIsAndroidApp,
        setInputIsIOSApp,
        handleSubmit
    } = useContext(MobileContext)

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log(inputName);

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
                        name: ["category"],
                        value: inputCategory,
                    },
                    {
                        name: ["description"],
                        value: inputDesc,
                    },
                    {
                        name: ["release_year"],
                        value: inputRelease,
                    },
                    {
                        name: ["size"],
                        value: inputSize,
                    },
                    {
                        name: ["price"],
                        value: inputPrice,
                    },
                    {
                        name: ["rating"],
                        value: inputRating,
                    },
                    {
                        name: ["image_url"],
                        value: inputImg,
                    },
                    {
                        name: ["android"],
                        value: inputIsAndroidApp,
                    },
                    {
                        name: ["IOS"],
                        value: inputIsIOSApp,
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
                    rules={[{ required: true, message: 'Please input the mobile name!' }]}
                    value={inputName} 
                    onChange={(event) => {
                        setInputName(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: 'Please input the mobile category!' }]}
                    value={inputCategory} 
                    onChange={(event) => {
                        setInputCategory(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: "Please input mobile's description!" }]}
                    value={inputDesc} 
                    onChange={(event) => {
                        setInputDesc(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Release Year"
                    name="release_year"
                    rules={[{ required: true, message: "Please input mobile's Release Year!" }]}
                    value={inputRelease} 
                    onChange={(event) => {
                        setInputRelease(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Size(MB)"
                    name="size"
                    rules={[{ required: true, message: "Please input mobile's Size!" }]}
                    value={inputSize} 
                    onChange={(event) => {
                        setInputSize(event.target.value/1000)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: "Please input mobile's price!" }]}
                    value={inputPrice} 
                    onChange={(event) => {
                        setInputPrice(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Rating"
                    name="rating"
                    rules={[{ required: true, message: "Please input mobile's rating!" }]}
                    value={inputRating} 
                    onChange={(event) => {
                        setInputRating(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>
                <Form.Item
                    label="Image URL"
                    name="image_url"
                    rules={[{ required: true, message: "Please input mobile's Image URL!" }]}
                    value={inputImg} 
                    onChange={(event) => {
                        setInputImg(event.target.value)
                    }}
                >
                <Input />
                </Form.Item>

                <Form.Item name="android" valuePropName="checked" wrapperCol={{ offset: 2, span: 10 }}>
                <Checkbox value={inputIsAndroidApp} onChange={(event) => {
                    setInputIsAndroidApp(event.target.value)
                }}>Android</Checkbox>
                </Form.Item>

                <Form.Item name="IOS" valuePropName="checked" wrapperCol={{ offset: 2, span: 10 }}>
                <Checkbox value={inputIsIOSApp} onChange={(event) => {
                    setInputIsIOSApp(event.target.value)
                }}>IOS</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 2,
                    span: 10,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )

}

export default MobileForm