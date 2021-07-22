import { useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Form(){

   const [datas, setDatas] = useState({name:'', link:''})
   const [loading, setLoading] = useState(true)

    const handleSubmit = async (e) => {
            e.preventDefault()

            try {
                setLoading(true)
                await axios.post('http://localhost:4040/socials',
                {...datas}
                )
                toast.success('le réseau social a bien été ajouté!')
            } catch(err) {
                console.log(err);
                toast.error(`${err.message}`)
                } finally {
                    setLoading(false)
                }
        }


    const onChangeDatas = (e) => {
        setDatas({
            ...datas,
            [e.target.name] : e.target.value
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
        <input
            onChange={onChangeDatas}
            placeholder="name"
            type="text"
            name="name"
            id="input"
            required
        />
      <label>Link</label>
      <input type='text' name="link" id="input"
      onChange={() => onChangeDatas} />
      <label>Lien image</label>
      <input type="text" name="image" id="input" onChange={onChangeDatas} />
       <button type="submit" value="Submit">submit</button>
       
        </form>
    

    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOn />
    </>
    )
}