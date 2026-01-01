import { Button, Container, TextField, Typography } from "@mui/material";

export function Login() {
    return (
      <Container maxWidth="sm" style={{ marginTop: '4rem' }}>

        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <TextField fullWidth label="E-mail" margin="normal"/>
        <TextField fullWidth label="Senha" type="password" margin="normal"/>
        <Button fullWidth variant="contained" style={{ marginTop: '1rem' }}>
          Entrar
        </Button>

      </Container>
    );
}
