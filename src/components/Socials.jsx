import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';



export const SocialContainer = styled.div`
  width:25rem;
  background-color:#E6E9ED;
  height : 10rem;
  text-align: left;
  padding: 10px;
  `;
  






export default function BasicInfo(){
    const [socials, setSocials] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
 
    useEffect(()=> {
        const getSocials = async () => {
            try {
                const socials = await axios.get('http://localhost:4040/socials')
                setSocials(socials.data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }

        }
        getSocials()
    }, [])
    console.log(socials)
   
    if(loading) return <div>loading...</div>
    

    return(
        <>
        {
            error ? (
                <h1>error</h1>
            ) : (
               socials.length && (

                <SocialContainer>
                {
                   socials.map((social, index) => {
                        return(
                            <div key={index}>
                        <a href={social.link}>{social.name}</a>
                    </div>
                        )
                    
                })
                }
                </SocialContainer>
                )
            )
        }
       
        </>
    )
}