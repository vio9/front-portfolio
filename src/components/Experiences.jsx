import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


export const ExpContainer = styled.div`
display:flex;
width:60%;
flex-direction: column;
text-align: left;
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
                        <h2>Expériences professionnelles</h2>
                        {
                            experiences.map((experience, index) => {
                                return(
                                <div key={index}>
                                    <h4>{experience.title}</h4>
                                    <p>{experience.entreprise}</p>
                                    <p>{experience.subtitle}</p>
                                    <p>{experience.description}</p>
                                    <p>{experience.period}</p>
                                </div>
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