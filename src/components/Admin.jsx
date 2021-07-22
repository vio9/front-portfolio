import NavBar from "./NavBar"
import Form from './Form'
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import styled from 'styled-components'
import { toast } from 'react-toastify';

export const SocialContainer = styled.div`
  width:25rem;
  background-color:#E6E9ED;
  text-align: left;
  padding: 10px 10px 40px 10px;
  `;
  
export const ImageSocial = styled.img`
width:40px;
padding:5px;
`;  

export default function Admin(){
    const [socials, setSocials] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const getSocials = async () => {
        try {
            const socials = await axios.get('http://localhost:4040/socials')
            setSocials(socials.data)
            console.log(socials.data);
        } catch(err) {
            setError(err)
        } finally {
            setLoading(false)
        }

    }
 
    useEffect(()=> {
        getSocials();
    }, [])


    if(loading) return <div>loading...</div>

    const deleteItem = (id) => {
        axios.delete(`http://localhost:4040/socials/${id}`)
        .then((res) =>
          console.log("Status :", res.status),
         toast.success('social deleted olé')
        )
        .catch(err => {
          console.error('Something went bad', err)
          toast.error(`${err.message}`)
        })
      }

    return(
       

        <>
         
        <NavBar />
        <h2>Formulaire d'ajout d'un nouveau réseau social : </h2>
        <Form />
        {
               socials.length && (

                <SocialContainer>
                     <h2> supprimer ou modifier les réseaux sociaux</h2>
                {
                   socials.map((social, index) => {
                        return(
                        <div
                             key={index}
                             id={social.id}>
                            <ImageSocial src={social.image} alt="logo social" />    
                            <p><a href={social.link}>{social.name}</a></p>
                            <button onClick={() => {deleteItem(social.id)}}>delete item</button>
                           
                        </div>
                      
                        )
                })
                }
                
                </SocialContainer>
                )
            
        }
    
    )

        </>
    )
}