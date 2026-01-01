import { Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/authService";

export function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleLogin() {
      try {
        setError('');

        const response = await login(email, password);

        localStorage.setItem('token', response.token);

        navigate('/home');
      } catch (err) {
        setError('E-mail ou senha inválidos');
      }
    }
    
    return (
      <Container maxWidth="sm" style={{ marginTop: '4rem' }}>

        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <TextField fullWidth label="E-mail" type="email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextField fullWidth label="Senha" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)}/>

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}

        <Button fullWidth variant="contained" style={{ marginTop: '1rem' }} onClick={handleLogin}>
          Entrar
        </Button>

      </Container>
    );
}
