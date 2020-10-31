import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px auto 0 auto;
  border-bottom: 1px solid #BDBDBD;
  width: 80%;
  padding: 1rem 3.5rem;
  transform: scale(.95);
  transition: .2s;

  &:focus-within {
    transform: scale(1);
  }
`
export const Bar = styled.input`
  font-size: 2.3rem;
  font-weight: 300;
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  margin-right: 4.5rem;
  text-transform: capitalize;
  padding: 0 2rem 0 2rem;

  &::-webkit-input-placeholder {
    text-align: center;
  }
`
export const ButtonBar = styled.button`
  outline: none;
  border: none;
  background: transparent;
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;
  cursor: pointer;
  padding: .1rem;

  @media (max-width: 31.25em) {
    width: 2.2rem;
    height: 2.2rem;
  }

  & > svg {
    height: 100%;
    width: 100%;
    transform-origin: right;
    
    & > path {
      transition: .6s;
    }

    &:hover > path {
      fill: #333;
    }
  }

  &:hover svg {
    animation: shake .3s infinite linear;
  }

  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(2deg);
    }
  }
`