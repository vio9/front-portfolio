import styled from 'styled-components';

export const BasicFlex = styled.div`
display:flex;`


export const TitleRubrique = styled.h2`
margin-left:20px;
`;

const size = {
    mobile : '375px',
    tablet: '768px',
    laptop:'1024px',
    desktop:'2560px'
}

export const devices = {
    mobile : `(min-width: ${size.mobile})`,
    tablet : `(min-width: ${size.tablet})`,
    laptop : `(min-width: ${size.laptop})`,
    desktop : `(min-width: ${size.desktop})`,
}