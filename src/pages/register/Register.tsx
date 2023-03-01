import { useState } from 'react'

import {
    Box,
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

import { Link, useNavigate } from 'react-router-dom'

import * as S from './Register.styles'
import Button from '@/components/button/Button'


function Register() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    const navigate = useNavigate()

    return (
        <S.BackgroundWrapper>
            <S.ImageDiv>
                <TravelExploreIcon style={{ fontSize: 100 }} />
            </S.ImageDiv>
            <Paper elevation={3} style={{ background: '#f2f2f2', display: 'flex' }}>
                <S.RegisterContainer>
                    <Typography component='h1' variant='h4'>Cadastro</Typography>
                    <Box sx={{ width: '25rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Box sx={{ display: 'flex', gap: '16px' }}>
                            <TextField id='name' label='Nome' value={name} onChange={(e) => setName(e.target.value)} />
                            <TextField id='lastName' label='Sobrenome' value={lastName}
                                       onChange={(e) => setLastName(e.target.value)} /></Box>
                        <TextField id='phone' label='Telefone' value={phone}
                                   onChange={(e) => setPhone(e.target.value)} />
                        <TextField id='address' label='Cidade' value={city}
                                   onChange={(e) => setCity(e.target.value)} />

                        <TextField id='email' label='Email institucional' value={email}
                                   onChange={(e) => setEmail(e.target.value)}

                                   variant='outlined' />
                        <FormControl variant='outlined'>
                            <InputLabel htmlFor='outlined-adornment-password'>Senha</InputLabel>
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
                    </Box>
                    <Button type='button' style={{ width: '400px' }} onClick={() => navigate('/')}>Cadastrar</Button>
                    <Typography component={'span'} variant={'body2'} color='1A1A1E'>Já possui uma conta? <Link
                        to={'/login'}>Entre</Link></Typography>
                </S.RegisterContainer>
            </Paper>
        </S.BackgroundWrapper>
    )
}

export default Register