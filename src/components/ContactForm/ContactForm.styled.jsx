import styled from "styled-components";


export const Form = styled.form`
      display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const Label = styled.label`
      font-weight: bold;
  margin-bottom: 5px;
 `

export const LabelName = styled.p`
  margin-top: 4px;
  margin-bottom: 4px;
`

export const Input = styled.input`
      padding: 10px;
  margin-bottom: 10px;
   border: 2px solid #ccc;
  border-radius: 4px;
`

export const Button = styled.button`
   background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px; 
  
  &:hover {
  background-color: #45a049;
}
`


// button {
//   background-color: #4CAF50;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 16px;
//   margin-top: 10px;
// }

// button:hover {
//   background-color: #45a049;
// }