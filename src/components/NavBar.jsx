import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../style/GenericStyles';

export const NavContainer = styled.div`
width:100px;
margin:0;
display:flex;
`;

export const ButtonNav = styled.button`
@media ${devices.mobile} {
padding: 0.5em 3em;
border: 0.16em solid #6ab8e6;
box-sizing: border-box;
text-decoration:none;
margin:10px;
left:10px;
}

@media ${devices.laptop} {
padding: 0.5em 3em;
border: 0.16em solid #6ab8e6;
box-sizing: border-box;
text-decoration:none;
margin:10px;
left:10px;
}
`;

export const Linkk = styled(Link)`
color:#6ab8e6;
font-size:1.2em;
`

export default function NavBar(){

    return(
        <NavContainer>
            <ButtonNav><Linkk to="/">Home</Linkk></ButtonNav>
            <ButtonNav> <Linkk to='/Admin'>Admin</Linkk></ButtonNav>
            
        </NavContainer>
    )
}