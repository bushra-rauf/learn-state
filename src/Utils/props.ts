export type HeaderProps = {
    background: string;
}
export type PageTitleProps = {
    title: string;
    titleBackground: string;
}

export type FooterProps = {
    background: boolean;
    title: string;
}

export interface HomePageProps  {
    background: string;
    boxBackground: string;
    fontShadow: string;
    
}

export interface FoamProps {
  userInput: string;
  count: number;
  previousText: string;
  verifyNumber: string;
  spaceCount: number;
  wordCount: number;
}

interface Breakpoints {
    sm: string,
    md: string
}

interface ScreensTypes {
    sm: string,
    md: string
}
const breakPoints: Breakpoints = {
    sm: "390px",
    md: "768px"
}

const screens:ScreensTypes = {
    sm: `(max-width: ${breakPoints.sm})`,
    md: `(min-width: ${breakPoints.md})`
}

export {screens}