import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';

import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from 'axios';

const notify = (msg) => toast(msg)




function Profile() {

    const [title, setTitle] = React.useState("")
    const [body, setBody] = React.useState('')
    const [userId, setUserId] = React.useState('')
    const [categoryId, setCategoryId] = React.useState('')

    const [categoryname, setCategoryName] = React.useState('')

    const [categorys, setCategorys] = React.useState([])

    const[user,setUser] = React.useState('')

    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            console.log(user);
            setUserId(user._id);
            setUser(user)
        }
    }, []);




    const createBlog = async () => {

        await axios.post('http://localhost:3000/createBlog', {
            title: title,
            body: body,
            userId: userId,
            categoryId: categoryId
        }).then((res) => {
            console.log(res.data.data)
            notify(res.data.msg)
        }).catch((err) => {
            console.log(err)
        })

    }




    const addCatgory = async () => {
        await axios.post('http://localhost:3000/createCategory', {
            categoryname: categoryname
        }).then((res) => {
            console.log(res)

        }).catch((err) => {
            console.log(err)
        })

    }

    const getCategorys = async () => {

        await axios.get('http://localhost:3000/getCategory').then((res) => {
            setCategorys(res.data.data)

        }).catch((err) => {
            console.log(err)
        })

    }

    React.useEffect(() => {
        getCategorys()

    }, [])



    return (
        <>
            <ToastContainer />
            <div className=' flex flex-col gap-10 justify-center items-center w-full ml-10 mb-96'>
                <div>
                    <Card className="w-96">
                        <CardHeader floated={false} className="h-80">
                            <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="ui/ux review check" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                {user.username}
                            </Typography>
                            <Typography color="blue-gray" className="font-medium" textGradient>
                                CEO / Co-Founder
                            </Typography>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 pt-2">
                            <Tooltip content="Like">
                                <Typography
                                    as="a"
                                    href="#facebook"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <i className="fab fa-facebook" />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#twitter"
                                    variant="lead"
                                    color="light-blue"
                                    textGradient
                                >
                                    <i className="fab fa-twitter" />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#instagram"
                                    variant="lead"
                                    color="purple"
                                    textGradient
                                >
                                    <i className="fab fa-instagram" />
                                </Typography>
                            </Tooltip>
                        </CardFooter>
                    </Card>
                </div>
                <div className='w-full flex justify-start font-bold'>
                    <h1>ADD BLOG</h1>
                </div>
                <div className=' flex flex-row items-start justify-start'>
                    <div className='flex flex-col gap-5'>
                        <div className="flex w-72 flex-col gap-6">
                            <Input onChange={(e) => { setTitle(e.target.value) }} variant="standard" label="title" placeholder="title" />
                        </div>
                        <div className="flex w-96 flex-col gap-6">
                            <Textarea onChange={(e) => { setBody(e.target.value) }} variant="standard" label="what do you think !" />
                        </div>
                    </div>
                    <div>
                        <div className="w-72 ">
                            <Select onChange={(value) => setCategoryId(value)} label="Select Category">
                                {categorys?.map((index, key) => {
                                    return (
                                        <Option key={key} value={index._id}>
                                            {index.categoryname}
                                        </Option>
                                    )
                                })}
                            </Select>
                        </div>
                    </div>
                </div>
                <div>
                    <Button onClick={createBlog}>POST</Button>
                </div>

                <div className='w-full flex justify-start font-bold'>
                    <h1>ADD CATEGORY</h1>
                </div>
                <div className="flex flex-row justify-between w-full">
                    <Input onChange={(e) => { setCategoryName(e.target.value) }} variant="standard" label="Category Name" placeholder="Standard" />
                    <Button onClick={addCatgory}>ADD</Button>

                </div>
            </div>
        </>
    )
}

export default Profile