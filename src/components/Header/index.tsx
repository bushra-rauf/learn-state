'use client'
import { HeaderProps } from "@/Utils/props"
import PageTitle from "../PageTitle"
import Image from "next/image"
import styled from "styled-components"
import { screens } from "@/Utils/props"

const StyledHeader = styled.header<{$bgImage: string}> `
background-image: url(${props => props.$bgImage});
padding: 24px;
display: flex;
align-items: center;
//   height: 150px;  /* Add a fixed height for the header */
//   width: 100%;  /* Ensure it takes up full width */
//   background-size: cover;

img {
margin: 10px;}

@media screen and  ${screens.sm}  {
font-size: 2rem;

img {
width: 70px;
height: 70px;}
}
`;

const Header = ({background}: HeaderProps )  => {
    return(
        <StyledHeader $bgImage={background}>
            <Image src='/log.png' alt='logo' width={80} height={80}/>
            <PageTitle title='Welcome to Learn-state' titleBackground="black"/>
        </StyledHeader>
    )
}

export default Header