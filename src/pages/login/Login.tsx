import { useState } from 'react'

import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    TextField,
    Typography,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'

import { Link } from 'react-router-dom'

import * as S from './Login.styles'
import Button from '@/components/button/Button'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <S.BackgroundWrapper>
            <S.ImageDiv>
                <TravelExploreIcon style={{ fontSize: 100 }} />
            </S.ImageDiv>
            <Paper elevation={3} style={{ background: '#f2f2f2', display: 'flex' }}>
                <S.LoginContainer>
                    <Typography component='h1' variant='h4'>Login</Typography>
                    <S.LoginForm>
                        <FormControl sx={{ m: 1, width: '25rem' }}>
                            <TextField id='email' label='Email' value={email} onChange={(e) => setEmail(e.target.value)}

                                       variant='outlined' />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25rem' }} variant='outlined'>
                            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
                            <OutlinedInput
                                id='outlined-adornment-password'
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge='end'
                                        >
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label='Password'
                            />
                        </FormControl>
                    </S.LoginForm>
                    <Button type='button' style={{ width: '400px' }}>Entrar</Button>
                    <Typography component={'span'} variant={'body2'} color='1A1A1E'>Não tem uma conta? <Link
                        to={'/register'}>Cadastre-se</Link></Typography>
                </S.LoginContainer>
            </Paper>
        </S.BackgroundWrapper>
    )
}

export default Login