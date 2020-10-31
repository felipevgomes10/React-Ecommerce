import styled from 'styled-components'

export const MethodOption = styled.button` 
  background: #FFFFFF;
  border-radius: 10.8766px;
  width: 100%;
  height: 7.5rem;
  border: none;
  outline: none;
  font-size: 1.6rem;
  color: #A5A5A5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.1rem;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid #5DAC50;
    outline: none;
  }

  @media (max-width: 25em) {
    
    padding: 1.5rem;

    & img {
      margin-left: .5rem;
      max-width: 80%;
    }
  }
`