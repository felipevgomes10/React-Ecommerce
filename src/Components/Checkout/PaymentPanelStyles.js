import styled from 'styled-components'

export const Container = styled.div`
  grid-row: ${({ rows }) => rows };
  grid-column: ${({ columns }) => columns };
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  color: #000000;

  & button[data-type]:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`
export const MethodHeader = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 2.1rem;
`