import styled from 'styled-components';
import { BasicFlex } from '../style/GenericStyles';
import land from '../assets/land.jpg';
import NavBar from '../components/NavBar';

export const IntroContainer = styled(BasicFlex)`
width:100%;
height:20rem;
background-image: url(${land});
background-size: 100%;
background-repeat:no-repeat;
margin:0;
padding-top:100px;
color:#fff;
font-size: 3em;
transition: 0.5s filter linear;
flex-direction:column;  
&:hover {
    background-image: url(${land});
    filter: grayscale(50%);
}
    
`;

export default function Intro(){
    return(
        <IntroContainer>
        <pre><code>Violaine Ernotte / ✨ </code></pre>
        <pre><code>Développeur Web junior / 💻</code></pre>
        <NavBar />
        </IntroContainer>
    )
    }