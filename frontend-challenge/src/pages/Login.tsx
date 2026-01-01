import { Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    function handleLogin() {
      navigate('/home');
    }
    
    return (
      <Container maxWidth="sm" style={{ marginTop: '4rem' }}>

        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <TextField fullWidth label="E-mail" margin="normal"/>
        <TextField fullWidth label="Senha" type="password" margin="normal"/>
        <Button fullWidth variant="contained" style={{ marginTop: '1rem' }} onClick={handleLogin}>
          Entrar
        </Button>

      </Container>
    );
}
