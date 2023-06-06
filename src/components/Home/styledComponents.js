import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`
export const HomeContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
  }
`
export const SelectContainer = styled.select`
  width: 100%;
  height: 42px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 6px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    width: 55%;
  }
`
export const Options = styled.option`
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 420px;
    height: 500px;
    box-shadow: 0px 4px 8px 0px #bfbfbf;
    align-self: center;
  }
`
export const FailureImage = styled.img`
  width: 86%;
  height: 180px;
`
export const FailureHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #475569;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const FailureDescription = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: #475569;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const FailureButton = styled.button`
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 9px;
  padding-bottom: 9px;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  background-color: #328af2;
  cursor: pointer;
`
export const UnOrderListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
