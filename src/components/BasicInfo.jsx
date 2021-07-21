import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';




export const BasicInfos = styled.div`
  width:40rem;  
  background-color: #1B72BF;
  height : 15rem;
  text-align: left;
  padding: 10px;
  `;
  




export default function BasicInfo(){
    
    const [infos, setInfos] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
  /*  useEffect(() => {
        axios.get('http://localhost:4040/basic_infos')
        .then(res => {
            setInfos(res.data)
        })
        .catch((err) => setError(err))
    })  
    */
    useEffect(()=> {
        const getInfos = async () => {
            try {
                const infos = await axios.get('http://localhost:4040/infos')
                setInfos(infos.data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }

        }
        getInfos()
    }, [])
    console.log(infos)
   
    if(loading) return <div>loading...</div>
    console.log(infos)

    return(
        <>
        {
            error ? (
                <h1>error</h1>
            ) : (
                infos.length && (

                <div>
                   
                {
                    
                    infos.map((info, index) => {
                        return(
                            <BasicInfos key={index}>
                            <p>👋 {info.presentation}</p>
                            <p>📨 Si vous souhaitez me contacter c'est par ici : <a href={"mailto:" + info.email}>{info.email}</a></p>
                            <p>Actuellement je travaille à distance et à {info.city}</p>
                            
                        </BasicInfos>
                        )
                    
                })
                }
                
                </div>
                )
            )
        }
       
        </>
    )
}