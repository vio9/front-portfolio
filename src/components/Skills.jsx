import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


export const SkillsContainer = styled.div`
width:25rem;
background-color: #dce3ec;
padding: 10px;
text-align:left;
`;

export const SkillsBox = styled.div`
border: solid 0.2px #fff;
margin:9px;
padding:4px;
background-color: #e7e6e6;
`;

export default function Formation(){
const [skills, setSkills] = useState([])
const [error, setError] = useState(null)
const [loading, setLoading] = useState(true)


useEffect(() => {
    const getSkills = async () => {
        try {
            const skills = await axios.get('http://localhost:4040/skills')
            setSkills(skills.data)
        } catch(err) {
            setError(err)
        } finally {
            setLoading(false)
        }

    }
    getSkills()
}, [])
if(loading) return <div>loading...</div>
    return(
        <>
        {
            error ? (
                <h1>error</h1>
            ) : (
                skills.length && (
                    <SkillsContainer>
                        <h2>⚙️ Compétences</h2>
                        {
                            skills.map((skill, index) => {
                                return(
                                <SkillsBox key={index}>
                                    <h4>{skill.title}</h4>
                                    <p>{skill.description}</p>
                                </SkillsBox>
                                )
                            })
                        }
                    </SkillsContainer>
                )
            )
        }
        </>
    )
}