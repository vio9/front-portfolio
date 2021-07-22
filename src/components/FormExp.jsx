import axios from "axios"
import { toast } from "react-toastify"
import { useState } from "react"
import styled from "styled-components";

export const Formulaire = styled.form`
    display: flex;
    flex-direction: column;
    width: 45rem;
    text-align: left;
    padding:50px;
    margin-left:100px;
    margin-top:20px;
    background-color:#f6f8fa;
    border: 1px solid #e9e9e9;
`;

export const TitreForm = styled.h3`
width:30rem;

label{
    padding:10px;
    width:60px;
}
`;

export default function FormExp({getExperiences}){

    const [datas, setDatas] = useState({title:'', entreprise:'', subtitle:'',period:'', image:'' })
    const [loading, setLoading] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            setLoading(true)
            await axios.post('http://localhost:4040/experiences',
            {...datas})
            getExperiences()
            toast.success('une nouvelle experience pro a été ajoutée !')
        } catch(err) {
            console.log(err);
            toast.error(`${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    const onChangeDatas = (e) => {
        setDatas({...datas, [e.target.name] : e.target.value})
    }

    return(
        <>
           <Formulaire onSubmit={handleSubmit}>
        <TitreForm>Ajouter une nouvelle expérience : </TitreForm>
            <label>titre</label><input
            onChange={onChangeDatas}
            placeholder="titre"
            type="text"
            name="title"
            id="input"
            required
        />
      <label>entreprise</label><input type='text' name="entreprise" id="input" placeholder="entreprise"
      onChange={() => onChangeDatas} />

      <label>sous titre</label><input type="text" name="subtitle" placeholder="subtitle" id="input" onChange={onChangeDatas} />

       <label>description</label><textarea name="description" placeholder="description" id="input" onChange={onChangeDatas} />
       
       <label>dates</label><input type="text" name="period" placeholder="dates" id="input" onChange={onChangeDatas} />

       <label>lien image</label><input type="text" name="image" placeholder="lien image" id="input" onChange={onChangeDatas} />
       <button type="submit" value="Submit">submit</button>
       
        </Formulaire>
        </>
    )
}