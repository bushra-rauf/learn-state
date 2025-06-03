'use client'
import { PageTitleProps } from "@/Utils/props"
import styled from "styled-components"

const StyledPageTitle = styled.h1<{$titleBgcolor: string, $featured: string}>`
font-size: 3rem;
color: white;
text-align: center;
background-color: ${props => props.$titleBgcolor};
display: inline-block;
border: ${props => props.$featured};
border-radius: 50% 20% / 10% 40%;
padding : 10px 20px;
margin: auto;

@media screen and (max-width: 390px) {
font-size: 2rem;
padding: 8px;
}
`
const PageTitle = ({title, titleBackground}: PageTitleProps) => {
    return(
        <StyledPageTitle $titleBgcolor={titleBackground} $featured="2px solid grey">
            {title}
        </StyledPageTitle>
    )
}

export default PageTitle