import axios from 'axios'
import React from 'react'
import { Avatar } from "@material-tailwind/react";



import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";


function Home() {


  const [blogs, setBlogs] = React.useState([])
  const [user,setUser] = React.useState('')
  

  const getBlogs = async () => {
    await axios.get('http://localhost:3000/getBlogs').then((res) => {
      setBlogs(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const getUser = async (id) =>{
    await axios.get(`http://localhost:3000/getUser/${id}`).then((res)=>{
      setUser(res.data.data)
      console.log(user)
    }).catch((err)=>{
      console.log(err)
    })
  }

  React.useEffect(() => {
    getBlogs()
  }, [])


  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((index, key) => {
          getUser(index.userId)
          return (<>
          <div key={key}>
          <Card className="max-w-[24rem] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="ui/ux review check"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  {index.title}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                  {index.body}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <div className='flex flex-row items-center justify-between w-[40%]'>
                <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
              <Typography className="font-normal">{user}</Typography>
                </div>
                <Typography className="font-normal">January 10</Typography>
              </CardFooter>
            </Card>
          </div>
          </>)
        })}
      </div>
    </div>
  )
}

export default Home