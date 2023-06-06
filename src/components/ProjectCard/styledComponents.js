import styled from 'styled-components'

export const ProjectCardItem = styled.li`
  width: 100%;
  margin-bottom: 25px;
  box-shadow: 0px 4px 8px 0px #bfbfbf;
  border-radius: 10px;
  height: 260px;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 280px;
  }
`
export const ProjectImage = styled.img`
  width: 100%;
  height: 70%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
export const ProjectName = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding-left: 25px;
`
