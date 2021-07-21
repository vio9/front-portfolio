import { useState} from 'react';
import axios from 'axios';

export default function Form(){

   const [datas, setDatas] = useState({name:'', link:''})

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://localhost:4040/socials', {
            ...datas
        },
        {
            headers: {
                'content-type': 'text/json'
            }
        }
        )
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error)
        })

    }

    const onChangeDatas = (e) => {
        setDatas({
            ...datas,
            [e.target.name] : e.target.value
    })
    }

    console.log(datas)

    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
             <input
        
        onChange={onChangeDatas}
        placeholder="name"
        type="text"
        name="name"
        required
      />
      <label>Link</label>
      <input type='text' name="link" 
      onChange={onChangeDatas} />
       <button type="submit" value="Submit">submit</button>
        </form>
    )
}