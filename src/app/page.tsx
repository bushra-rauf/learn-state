'use client'
import styled from "styled-components";
import  UserInput  from "@/components/UserInput";
import { screens } from "@/Utils/props";

const MainContainer = styled.main<{ $bgcolor: string}> `
flex-grow: 1;
display: flex;
flex-direction: column;
align-items: center;

`
const StyledBox = styled.div<{$boxBgcolor: string, $featured: string}> `
margin: 30px;
width: 100%;
max-width: 700px;
height: 800px;
background-color: ${props => props.$boxBgcolor};
box-shadow: ${props => props.$featured};
border-radius: 10px;

@media screen and ${screens.sm} {
max-width: 350px;
}
`
const StyledHeading = styled.h1<{$fontShadow: string, $featured: string} >`
font-size: 2rem;
text-shadow: ${props => props.$featured}
text-align: center;
text-decoration: underline;
text-decoration-thickness: 5px;
text-underline-offset: 10px;
  
`;

export default function Home(){
  const background = "radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)"
  const boxBackground = "white";
  const fontShadow = "4px 4px 2px rgba(0,0,0,0.6)"
  return (
    <MainContainer $bgcolor={background}>
      <StyledBox $boxBgcolor={boxBackground} $featured="-9px 9px 5px 0px rgba(0,0,0,0.75)">
         <StyledHeading $fontShadow={fontShadow} $featured={fontShadow}>Best practice!</StyledHeading> 
         <UserInput/>
      </StyledBox>
    </MainContainer>
  );
}
