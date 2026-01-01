import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>

      <Typography>
        Bem-vindo! Você está logado.
      </Typography>

      <Button
        variant="outlined"
        style={{ marginTop: '2rem' }}
        onClick={() => navigate('/login')}
      >
        Logout
      </Button>
    </Container>
  );
}
