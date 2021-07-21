import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TitleRubrique } from '../style/GenericStyles';


export const ExpContainer = styled.div`
display:flex;
flex-direction: column;
text-align: left;
background-color: #F2F2F2;
`;

export const ExpBox = styled.div`
width:38rem;
height:25rem;
background-color:#fff;
border: 0.5px #e0dddd solid;
padding:10px;
margin-left:20px;
margin-bottom:20px;
`;


export const ImageExp = styled.img`
width:300px;
display:block;
`;


export default function Experiences(){
    const [experiences, setExperiences] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const getExperiences = async () => {
            try {
                const experiences = await axios.get('http://localhost:4040/experiences')
                setExperiences(experiences.data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
    
        }
        getExperiences()
    }, [])
    if(loading) return <div>loading...</div>

    return(
        <>
        {
            error ? (
                <h1>error</h1>
            ) : (
                experiences.length && (
                    <ExpContainer>
                        <TitleRubrique>👩‍💻 Expériences professionnelles</TitleRubrique>
                        {
                            experiences.map((experience, index) => {
                                return(
                                <ExpBox key={index}>
                                     <ImageExp src={experience.image} alt="nespresso" />
                                    <h4>{experience.title}</h4>
                                    <p>{experience.entreprise}</p>
                                    <p>{experience.subtitle}</p>
                                    <p>{experience.description}</p>
                                    <p>{experience.period}</p>
                                   
                                </ExpBox>
                                )
                            })
                        }
                    </ExpContainer>
                )
            )
        }
        </>





    )
}