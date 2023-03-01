import styled from '@emotion/styled'

export const BackgroundWrapper = styled.div`
  background: #153D50;
  height: 100vh;
  display: flex
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  width: 50vw;
  gap: 40px;

  a {
    font-weight: 600;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  gap: 20px
`

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
`

