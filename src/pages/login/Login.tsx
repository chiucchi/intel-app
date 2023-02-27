import { Button, Paper, TextField, Typography } from '@mui/material'
import * as S from './Login.styles'

function Login() {
    return (
        <S.BackgroundWrapper>
            <S.ImageDiv>

            </S.ImageDiv>
            <Paper elevation={3} style={{ background: '#f2f2f2', display: 'flex' }}>
                <S.LoginContainer>
                    <Typography component='h1' variant='h4'>Login</Typography>
                    <S.LoginForm>
                        <TextField id='email' label='Email' variant='outlined' />
                        <TextField id='password' label='Password' variant='outlined' />
                        <Button variant='contained' style={{ width: '55%' }}>Login</Button>

                    </S.LoginForm>
                </S.LoginContainer>
            </Paper>
        </S.BackgroundWrapper>
    )
}

export default Login