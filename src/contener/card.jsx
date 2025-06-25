import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Input, Modal } from 'antd';

const Card = () => {
    let api = "https://6821ee72b342dce8004c6739.mockapi.io/User"
    let [User, setUser] = useState([])
    async function get() {
        try {
            let res = await axios.get(api)
            setUser(res.data)
        } catch (error) {
            console.error(error);

        }
    }
    async function DeletUser(id) {
        try {
            await axios.delete(`${api}/${id}`)
            get()
        } catch (error) {
            console.error(error);

        }
    }
    async function ChecUser(el) {
        try {
            await axios.put(`${api}/${el.id}`, {
                ...el,
                status: !el.status
            })
            get()

        } catch (error) {
            console.error(error);

        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    let [Addname, setAddname] = useState("")
    let [Addlorem, setAddlorem] = useState("")
    let [Addstatus, setAddstatus] = useState("true")
    let [Addimg, setAddimg] = useState("")
    const [isModalEdit, setIsModalEdit] = useState(false);
    let [Editname, setEditname] = useState("")
    let [Editlorem, setEditlorem] = useState("")
    let [Editstatus, setEditstatus] = useState("true")
    let [Editimg, setEditimg] = useState("")
    let [idx, setidx] = useState(null)

    function OpenEdit(el) {
        setIsModalEdit(true)
        setEditname(el.name)
        setEditlorem(el.lorem)
        setEditstatus(el.status)
        setEditimg(el.avatar)
        setidx(el.id)
    }

    async function EditUser() {
        let Editnew = {
            name: Editname,
            lorem: Editlorem,
            status: Editstatus == "true",
            avatar: Editimg,
        }
        try {
            await axios.put(`${api}/${idx}`, Editnew)
            get()
            setIsModalEdit(false)
        } catch (error) {
            console.error(error);

        }
    }

    async function AddUser() {
        let newUser = {
            name: Addname,
            lorem: Addlorem,
            status: Addstatus == "true",
            avatar: Addimg,
        }
        try {
            await axios.post(api, newUser)
            get()
            setIsModalOpen(false);
            setAddname("")
            setAddlorem("")
            setAddimg("")
            setAddstatus("true")
        } catch (error) {
            console.error(error);

        }
    }


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setIsModalEdit(false)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsModalEdit(false)
    };

    function AddImg(e) {
        let file = e.target.files[0]
        if (file) {
            let imgUser = URL.createObjectURL(file)
            setAddimg(imgUser)
        }
    }
    function EditImg(e) {
        const file = e.target.files[0];
        if (file) {
            const imgUrl = URL.createObjectURL(file);
            setEditimg(imgUrl);
        }
    }

    let [Search, setsearch] = useState("")
    let [SelectAll, setSelectAll] = useState("")

    useEffect(() => {
        get()
    }, [])
    return (
        <div>
            <div className='lg:flex justify-around items-center my-[30px]'>
                <input className='lg:w-[40%] w-[80%] m-[20px] lg:m-0  p-[10px] border rounded-[5px]' value={Search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder='Search....' />
                <div className='flex justify-around items-center'>
                <select className='lg:w-[10%] border p-[10px] text-center rounded-[5px]' value={SelectAll} onChange={(e) => setSelectAll(e.target.value)}>
                    <option value="">All</option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
                <Button type="primary" onClick={showModal}>
                    ADD NEW USER
                </Button>
                </div>
            </div>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={AddUser}
                onCancel={handleCancel}
            >
                <Input value={Addname} onChange={(e) => setAddname(e.target.value)} placeholder='Name...'></Input> <br /> <br />
                <Input value={Addlorem} onChange={(e) => setAddlorem(e.target.value)} placeholder='Lorem...'></Input> <br /> <br />
                <Input onChange={AddImg} type='file'></Input> <br /> <br />
                <select value={Addstatus} onChange={(e) => setAddstatus(e.target.value)} >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
                <img src={Addimg} alt="" />
            </Modal>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalEdit}
                onOk={EditUser}
                onCancel={handleCancel}
            >
                <Input value={Editname} onChange={(e) => setEditname(e.target.value)} placeholder='Name...'></Input> <br /> <br />
                <Input value={Editlorem} onChange={(e) => setEditlorem(e.target.value)} placeholder='Lorem...'></Input> <br /> <br />
                <Input onChange={EditImg} type='file'></Input> <br /> <br />
                <select value={Editstatus} onChange={(e) => setEditstatus(e.target.value)} >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
                <img src={Editimg} alt="" />
            </Modal>
            <div className='box'>
                {User.filter(el => el.name.toLowerCase().includes(Search.toLowerCase())).filter(el => el.status.toString().includes(SelectAll)).map(el => {
                    return (
                        <div className='lg:w-[35%] w-[90%]  flex-shrink-0 p-[10px] border rounded-2xl'>
                            <div>
                                <img src={el.avatar} alt="" className='w-[50px] h-[50px] rounded-4xl my-[10px]' />
                                <div className='flex justify-between items-center'>
                                    <h1 className='font-black text-2xl'>{el.name}</h1>
                                    <div>

                                    <p className={`${el.status ? "text-blue-600 bg-blue-100 w-[100px] px-[20px] rounded-2xl" : "text-red-500 bg-red-100 w-[100px] px-[20px] rounded-2xl"}  my-[10px]`}>{el.status ? "Active" : "Inactive"}</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <p className='my-[10px]'>Decimus curo nisi corrupti pectus vitiosus suadeo absconditus ars fugit. Argentum suus angulus cito quibusdam textus triumphus textor calco. Rem clam substantia sequi trans aut aperiam torrens.</p>
                            <div className='flex justify-around'>
                                <input type="checkbox" checked={el.status} onClick={() => ChecUser(el)} />
                                <Button type="primary" danger onClick={() => DeletUser(el.id)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </Button>
                                <Button type="primary" onClick={() => OpenEdit(el)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>

                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card