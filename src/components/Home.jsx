import styled from 'styled-components';
import BasicInfo from './BasicInfo';
import Socials from './Socials';
import Formation from './Formation';
import Intro from './Intro';
import Skills from './Skills';
import Experiences from './Experiences';
import Projects from './Projects';
import Hobbies from './Hobbies';
import { devices } from '../style/GenericStyles';

export const UpContainer = styled.div`
@media ${devices.mobile} {
display:flex;
flex-direction: column-reverse;
}
@media ${devices.laptop} {
display:flex;
flex-direction: row;
}

`;

export const BasicContainer = styled.div`
display:flex;
flex-direction:column;
`;


export default function Home(){
    return(
        <>
          <Intro/>
          <UpContainer>
              <BasicContainer>
            <BasicInfo />
            <Socials />
            <Skills />
            <Formation />
            <Hobbies />
            </BasicContainer>
            <Experiences />
            <Projects />
            </UpContainer>
            
            </>
            
        
    )
}