import styled from "styled-components";


export const ListWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`
export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    align-items: center;

`

export const Wrapper = styled.div`
    display: flex;
    gap: 4px;
`

export const Button = styled.button`
    cursor: pointer;
    background-color: inherit;
    border: none;

    svg {
        color: red;
    }
`

export const Text = styled.p`
    margin: 0;
    padding: 4px;
`