import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


export const FormationContainer = styled.div`
width:25rem;
background-color: #AAB2BD;
padding: 10px;
text-align:left;

`;

export default function Formation(){
const [formations, setFormations] = useState([])
const [error, setError] = useState(null)
const [loading, setLoading] = useState(true)


useEffect(() => {
    const getFormations = async () => {
        try {
            const formations = await axios.get('http://localhost:4040/formation')
            setFormations(formations.data)
        } catch(err) {
            setError(err)
        } finally {
            setLoading(false)
        }

    }
    getFormations()
}, [])
if(loading) return <div>loading...</div>
    return(
        <>
        {
            error ? (
                <h1>error</h1>
            ) : (
                formations.length && (
                    <FormationContainer>
                           <h2>📖 Formation</h2>
                        {
                            formations.map((formation, index) => {
                                return(
                                <ul key={index}>
                                    <li>{formation.title}</li>
                                    <li>{formation.adress}</li>
                                    <li>{formation.period}</li>
                                    <li>{formation.school}</li>
                                </ul>
                                )
                            })
                        }
                    </FormationContainer>
                )
            )
        }
        </>
    )
}