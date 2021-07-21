import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export const SocialContainer = styled.div`
  width:25rem;
  background-color:#E6E9ED;
  height : 16rem;
  text-align: left;
  padding: 10px 10px 40px 10px;
  `;
  
export const ImageSocial = styled.img`
width:40px;
padding:5px;
`;  

export default function Socials(){
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
    

  /*  const deleteItem = () => {
        axios.delete(`http://localhost:4040/socials/${id}`)
        .then((res) =>
          console.log("Status :", res.status),
         
        )
        .catch(err => {
          console.error('Something went bad', err)
          
        })
      }

*/

    return(
        <>
        {
            error ? (
                <h1>error</h1>
            ) : (
               socials.length && (

                <SocialContainer>
                     <h2>#️⃣ Réseaux sociaux</h2>
                {
                   socials.map((social, index) => {
                        return(
                        <div
                             key={index}
                             id={social.id}>
                            <ImageSocial src={social.image} alt="logo social" />    
                            <p><a href={social.link}>{social.name}</a></p>
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