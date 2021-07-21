import styled from 'styled-components';
import fanfare3 from '../assets/fanfare3.jpg';
import fanfare1 from '../assets/fanfare1.jpg';

export const HobbiesContainer= styled.div`
  width:25rem;  
  background-color: #F5F7FA;
  text-align: left;
  padding: 10px;
  `;
  

export const Presentation = styled.p`
 font-size:1.2em;

  `;
  
export const ImageHobbie = styled.img`
width:350px;
height:250px;
margin:10px 0 10px 0;
`;


export default function Hobbies(){


    return(
        <>
            <HobbiesContainer> 
                <h3>Intérêts</h3>
                <Presentation>
                    Une activité qui permet de : voyager , faire de la musique et du sport :</Presentation> 
                    <strong> 🥁 La fanfare 🎺 </strong> 
                    <Presentation>
                    <ImageHobbie src={fanfare1} alt='fanfare 1' />
                    <ImageHobbie src={fanfare3} alt="fanfare" />
                   <button><a href="https://www.instagram.com/musestanguent/?hl=fr">Retrouvez nous par ici</a></button> 
                </Presentation>
                
            </HobbiesContainer>
       </>
    )
}     
    