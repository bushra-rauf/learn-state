'use client'
import styled from "styled-components"
import { useState, useEffect } from "react"
import { screens } from "@/Utils/props";

 const StyledInPutContainer = styled.div `
  width: 100%;
  max-width: 680px;
  margin: 50px 10px;
  padding: 24px;
  background: #f8f8f8;
  border-radius: 12px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  p {
    font-size: 1.3rem;
    margin: 0;
    color: #333;
    text-align: center;
  }

  input {
    padding: 10px 12px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    transition: border 0.2s ease;

    &:focus {
     border-color: #5b9df9;
    } 
  }

  button {
    margin-top: 8px;
    padding: 10px 16px;
    font-size: 1rem;
    background-color: #740787;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #490754;
    }
  }

 @media screen and  ${screens.sm}  {
  font-size: 1rem;
  margin: 40px auto;
  gap: 30px; // Reduce spacing 
  width: 100%;
  max-width: 340px;
  padding: 10px;
  
  p {
    font-size: 0.9rem; 
  }

  input {
    font-size: 0.9rem;
    padding: 8px;
  }

  button {
    font-size: 0.9rem;
    padding: 8px 12px;
    
  }
}

`;
    
const Foam = () => {
    const [userInput, setUserInput] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const [previousText, setPrevioustext] = useState<string>('');
    const [verifyNumber, setVerifyNumber] = useState<string>('');
    const [spaceCount, setSpaceCount] = useState<number>(0);
    const [wordCount, setWordCount] = useState<number>(0);

    //localStorage
    useEffect (()=> {
        localStorage.clear();
    },[])

    useEffect(() => {   // loading from localStorage
        const storedUserInput = localStorage.getItem('userInput');
        const storedCount = localStorage.getItem('count');
        const storedPreviousText = localStorage.getItem('previousText');
        const storedWordCount = localStorage.getItem('wordCount');
        const storedSpaceCount = localStorage.getItem('spaceCount');

        if (storedUserInput) setUserInput(JSON.parse(storedUserInput));
        if (storedCount) setCount(JSON.parse(storedCount));
        if (storedPreviousText) setPrevioustext(JSON.parse(storedPreviousText));
        if (storedWordCount) setWordCount(JSON.parse(storedWordCount));
        if (storedSpaceCount) setSpaceCount(JSON.parse(storedSpaceCount));
 
    }, []);

    useEffect(() => {  // save data to localStorage
         localStorage.setItem('userInput', JSON.stringify(userInput));
         localStorage.setItem('count',JSON.stringify(count));
         localStorage.setItem('previousText', JSON.stringify(previousText));
         localStorage.setItem('wordCount', JSON.stringify(wordCount));
         localStorage.setItem('spaceCount', JSON.stringify(spaceCount));
    }, [userInput, count, previousText, wordCount, spaceCount]);   

    const handleClick = () => {
        if(userInput !== '') {
          setPrevioustext(userInput) // Save last entered text before clearing
        }
          setUserInput('') // clear the input field  
          setCount(0); // Reset count
          setWordCount(0) //reset wordcount
    }

    const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value)
        setCount(`${e.target.value.replace(/\s+/g, '')}`.length) // remove spaces and count 
        setWordCount(`${e.target.value}` === '' ? 0 : `${e.target.value}`.split(/\s+/).filter( word => word.length > 0).length)
    } 

    useEffect(()=>{
        if(previousText.length > 0) {
          setVerifyNumber(`${previousText.replace(/\s+/g, '')}`.length % 2 === 0 ? "It's a Even number" : "It's a Odd number")
        } 
        else {
            setVerifyNumber('');
        }
    },[previousText])

    useEffect(()=> {    // counting the spaces 
        const trimmed = previousText.trim();   // trim removes the starting and at the end spaces 
        let count = 0
        for (let i = 1; i < trimmed.length - 1; i++){  // as the starting space is removed the initialiser starting from 1(to count a space and we want to -1 from the length of previousText to find out the middle spacing if there is any between characters)
            if(trimmed[i] === ' '){  // if i on '' empty index count ++
                count += 1   
            }
        }
        setSpaceCount(count)          
    },[previousText])

    return(
        <StyledInPutContainer>
            <p> How many characters in input Field count : {count}</p>
            <input type='text' value={userInput} placeholder="Enter Text"onChange={updateInput}/>  {/* // here the inputs value is bound with the state userInput */}
            <button onClick={handleClick}>Clear Field</button> 
             <p>present characters : {userInput}</p>
             <p>How many words in input field : {wordCount} </p>
             <p>Previous characters was : {previousText}</p>
             <p>The previous characters was in the field count : {`${previousText.replace(/\s+/g, '')}`.length}</p>
            { verifyNumber && <p>The previous count is even or odd : {verifyNumber}</p>}
             <p>How many spaces removed in the previous characters count : {spaceCount}</p>
        </StyledInPutContainer>
    )
}
export default Foam


