import { useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components';


export const TitreForm = styled.h3`
width:30rem;
`;

export const FormSocial = styled.form`
width:80%;
display:flex;
justify-content: space-around;
align-items: center;

label{
    padding:10px;
    width:60px;
}
`;

export default function Form({getSocials}){

   const [datas, setDatas] = useState({name:'', link:''})
   const [loading, setLoading] = useState(true)

    const handleSubmit = async (e) => {
            e.preventDefault()

            try {
                setLoading(true)
                await axios.post('http://localhost:4040/socials',
                {...datas}
                )
                getSocials()
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
        <FormSocial onSubmit={handleSubmit}>
        <TitreForm>Formulaire d'ajout d'un nouveau réseau social : </TitreForm>
            <label>Nom réseau</label><input
            onChange={onChangeDatas}
            placeholder="name"
            type="text"
            name="name"
            id="input"
            required
        />
      <label>lien réseau</label><input type='text' name="link" id="input" placeholder="lien réseau"
      onChange={() => onChangeDatas} />

      <label>lien image</label><input type="text" name="image" placeholder="lien image" id="input" onChange={onChangeDatas} />
       <button type="submit" value="Submit">submit</button>
       
        </FormSocial>
    

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