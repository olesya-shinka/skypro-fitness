import styled, { css } from 'styled-components'

export const HeaderMain = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 35px;
  gap: 20px;
  flex-wrap: wrap;
`

const commonButtonStyles = css`
  border-radius: 46px;
  cursor: pointer;
  font-weight: 400;
  transition: background-color 0.3s ease;
//   display: inline-block;
`

export const StyledSmallButton = styled.button`
  ${commonButtonStyles}
  padding: 5px 16px 7px;
  background-color: #140d40;
  font-size: 16px;
  line-height: 24px;
  color: #fff;

  &:hover {
    background-color: #2d1f79;
  }
  &:active {
    background-color: #3b29a1;
  }
`