import NavBar from "./NavBar"
import Form from './Form'
import FormExp from "./FormExp";
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import styled from 'styled-components'
import { toast } from 'react-toastify';


// CSS partie réseaux sociaux
export const SocialContainer = styled.div`
  background-color:#f6f8fa;
  width:50rem;
  text-align: left;
  padding: 10px 10px 40px 10px;
  margin-left:100px;
  `;
  
export const ImageSocial = styled.img`
width:40px;
padding:5px;
`;  

// CSS partie experiences

export const ImageExp = styled.img`
width:200px;
padding:5px;
`;  

export const ExpBox = styled.div`
width:38rem;
height:25rem;
background-color:#fff;
border: 0.5px #e0dddd solid;
padding:10px;
margin-left:100px;
margin-top:20px;
margin-bottom:20px;
`;

export const AdminContainer = styled.div`
display:flex;
flex-direction: column;
`;

export default function Admin(){

    const [socials, setSocials] = useState([])
    const [experiences, setExperiences] = useState([])
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

    const getExperiences = async () => {
        try {
            const experiences = await axios.get('http://localhost:4040/experiences')
            setExperiences(experiences.data)
            console.log(experiences.data);
        } catch(err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }
 
    useEffect(()=> {
        getSocials();
    }, [])

    useEffect(() => {
        getExperiences()
    }, [])


    if(loading) return <div>loading...</div>

    const deleteItem = (id) => {
        axios.delete(`http://localhost:4040/socials/${id}`)
        .then((res) =>
          {console.log("Status :", res.status)
          getSocials()
         toast.success('social deleted olé')
    })
        .catch(err => {
          console.error('Something went bad', err)
          toast.error(`${err.message}`)
        })
      }


      const deleteItemExp = (id) => {
        axios.delete(`http://localhost:4040/experiences/${id}`)
        .then((res) =>
          {console.log("Status :", res.status)
          getExperiences()
         toast.success('experience supprimée olé')
    })
        .catch(err => {
          console.error('Something went bad', err)
          toast.error(`${err.message}`)
        })
      }

    return(
       
        <>
        <AdminContainer>
         
        <NavBar />
        <Form getSocials={getSocials}/>

        {
               socials.length && (

                <SocialContainer>
                     <h2> afficher et supprimer réseaux sociaux</h2>
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
        </AdminContainer>
        <FormExp getExperiences={getExperiences} />
        {
            experiences.length && (
                <div>
                    {
                        experiences.map((experience, index) => {
                            return(
                                <ExpBox key={index} id={experience.id}>
                                 <ImageExp src={experience.image} alt="image exp" />
                                 <p>{experience.title}</p>
                                 <p>{experience.subtitle}</p> 
                                 <p>{experience.entreprise}</p>
                                 <p>{experience.description}</p>
                                 <p>{experience.period}</p>
                                 <button onClick={() => {deleteItemExp(experience.id)}}>delete item</button>      
                                 </ExpBox>
                            )
                        })
                    }
                </div>
            )
        }
        </>
   

        
         )
    
}