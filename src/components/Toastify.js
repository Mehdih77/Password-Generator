import React, { useEffect } from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Toastify({type,message}) {

    useEffect(() => {
        if (message) {
            toast[type](message); // toast.error('message')
        }
    }, [message,type])

    return (
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>)
}

export default Toastify
