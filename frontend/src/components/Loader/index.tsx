import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`

export const Loader = styled.div`
    padding: 10px;
    text-align: center;
    self-align: center;
    width: 100%;
    margin-left: 49%;
    border: 4px solid #00aa00;
    border-bottom-color: transparent;
    border-radius: 23px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
`