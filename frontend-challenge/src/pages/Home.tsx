import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

export function Home() {
  const navigate = useNavigate();
  
  function handleLogout() {
    logout();
    navigate('/login');
  }
  

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
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Container>
  );
}
