import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TitleRubrique } from '../style/GenericStyles';

export const ProjectContainer = styled.div`
display:flex;
flex-direction: column;
text-align: left;
background-color: #F2F2F2;
`;

export const ProjectBox = styled.div`
width:35rem;
height:30rem;
background-color:#fff;
border: 0.5px #e0dddd solid;
padding:10px;
margin-left:20px;
margin-right:20px;
margin-bottom:20px;
`;


export const ImageExp = styled.img`
width:300px;
display:block;
`;


export default function Projects(){
    const [projects, setProjects] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const getProjects = async () => {
            try {
                const projects = await axios.get('http://localhost:4040/projects')
                setProjects(projects.data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
    
        }
        getProjects()
    }, [])
    if(loading) return <div>loading...</div>

    return(
        <>
        {
            error ? (
                <h1>error</h1>
            ) : (
                projects.length && (
                    <ProjectContainer>
                        <TitleRubrique>Projets Web </TitleRubrique>
                        {
                            projects.map((project, index) => {
                                return(
                                <ProjectBox key={index}>
                                     <ImageExp src={project.image} alt="logo" />
                                    <h4>{project.title}</h4>
                                    <p>Lien : <a href={project.link}>{project.link}</a></p>
                                    <p>{project.description}</p>
                                    <p>{project.period}</p>
                                   
                                </ProjectBox>
                                )
                            })
                        }
                    </ProjectContainer>
                )
            )
        }
        </>





    )
}