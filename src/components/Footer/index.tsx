'use client'
import styled from "styled-components"
import Image from "next/image"
import { FooterProps } from "@/Utils/props";
import { screens } from "@/Utils/props";

const StyledFooter = styled.footer<{$bdImage: boolean}>`
background-image: url("${props => props.$bdImage ? 'footerb.png' : ''}");
color: white;
font-size: 2rem;
padding: 16px;
display: flex;
align-items: center;
text-align: center;

img {
margin: 18px;
}

@media screen and  ${screens.sm}  {
font-size: 1.5rem;

img{
width: 70px;
height: 70px;
}

}
`;

const StyledFooterTitle = styled.div `

margin: auto;`

const Footer = ({background, title}:FooterProps ) => {
    return(
        <StyledFooter $bdImage={background}>
            <Image src= '/log.png' alt = 'logo' width={80} height= {80}/>
          <StyledFooterTitle>
            {title}
          </StyledFooterTitle>
        </StyledFooter>
    )
}

export default Footer