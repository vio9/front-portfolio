import styled from 'styled-components';
import BasicInfo from './BasicInfo';
import Socials from './Socials';
import Formation from './Formation';
import Intro from './Intro';
import Skills from './Skills';
import Experiences from './Experiences';


export const UpContainer = styled.div`
display:flex;
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
            </BasicContainer>
            <Experiences />
            </UpContainer>
            <Formation />
            </>
            
        
    )
}