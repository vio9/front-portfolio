import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


export const FormationContainer = styled.div`
width:25rem;
background-color: #d9dce0;
padding: 10px;
text-align:left;
`;

export const FormationBox = styled.div`
border: solid 0.2px #fff;
margin:9px;
padding:4px;
background-color: #e7e6e6;
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
                                <FormationBox key={index}>
                                    <strong>{formation.title}</strong>
                                    <p>{formation.adress}</p>
                                    <p>{formation.period}</p>
                                    <p>{formation.school}</p>
                                </FormationBox>
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