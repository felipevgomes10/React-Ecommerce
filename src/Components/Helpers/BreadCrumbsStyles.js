import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const Progress = styled.span`
  display: block;
  height: 1.3px;
  width: 60%;
  background: #E8E8E8;

  ${props => props.green && css`
    width: 30%;
    background: #61CB46;
    position: absolute;
    top: 44%;
    left: 20%;
    transition: 1s;
  `}
`
export const GreenPoint = styled.span`
  display: flex;
  justify-content: center;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #E8E8E8;
  position: ${({ type }) => type ? type : 'initial' };
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transition: .3s;

  &::before {
    content: ${({ text }) => !text ? '' : text};
    display: block;
    flex-shrink: 0;
    transform: translateY(30px);
  }
`