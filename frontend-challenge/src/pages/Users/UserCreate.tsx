import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/UserService';

export function UserCreate() {
  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState<'individual' | 'business'>('individual');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit() {
    setError('');
    setSuccess('');

    try {
      const payload: any = {
        email,
        password,
        type
      };

      switch (type) {
        case 'individual':
          payload.name = name;
          payload.cpf = cpf;
          payload.birthDate = birthDate;
          break;
        
        case 'business':
          payload.fantasyName = fantasyName;
          payload.companyName = companyName;
          payload.cnpj = cnpj;
          payload.jobTitle = jobTitle;
          break;
      }

      if (email.trim() === '') {
        setError('O campo email é obrigatório')
        return;
      }

      if (password.length < 6) {
        setError('A senha deve conter no mínimo 6 dígitos')
        return;
      }

      switch (type) {
        case 'individual':
          if (name.trim() === '') {
            setError('o campo Nome é obrigatório')
            return;
          }

          if (cpf.trim() === '') {
            setError('o campo CPF é obrigatório')
            return;
          }

          if (birthDate.trim() === '') {
            setError('Selecionar uma data é obrigatório')
            return;
          }
          break;
        case 'business':
          if (fantasyName.trim() === '') {
            setError('O campo Nome Fantasia é obrigatório')
            return;
          }

          if (cnpj.trim() === '') {
            setError('O campo CNPJ é obrigatório')
            return;
          }
          break;
      }

      await createUser(payload);

      setSuccess('Usuário criado com sucesso');

      setTimeout(() => {
        navigate('/users');
      }, 1000);
    } catch (err) {
      setError('Erro ao criar usuário');
    }
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
      <Typography variant="h4" gutterBottom>
        Cadastro de Usuário
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="E-mail"
          type='email'
          value={email}
          onChange={(e) => {setEmail(e.target.value)
            setError('');
          }}
          fullWidth
          required
        />

        <TextField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)
            setError('');
          }}
          fullWidth
          required
        />

        <TextField
          select
          label="Tipo de Pessoa"
          value={type}
          onChange={(e) => setType(e.target.value as 'individual' | 'business')}
          fullWidth
        >
          <MenuItem value="individual">Pessoa Física</MenuItem>
          <MenuItem value="business">Pessoa Jurídica</MenuItem>
        </TextField>

        {type === 'individual' && (
          <>
            <Typography variant="subtitle1">
              Dados da Pessoa Física
            </Typography>

            <TextField
              label="Nome"
              value={name}
              onChange={(e) => {setName(e.target.value)
                setError('');
              }}
              fullWidth
              required
            />

            <TextField
              label="CPF"
              value={cpf}
              onChange={(e) => {setCpf(e.target.value)
                setError('');
              }}
              fullWidth
              required
            />

            <TextField
              label="Data de Nascimento"
              type="date"
              value={birthDate}
              onChange={(e) => {setBirthDate(e.target.value)
                setError('');
              }}
              InputLabelProps={{ shrink: true }}
              fullWidth
              required
            />
          </>
        )}

        {type === 'business' && (
          <>
            <Typography variant="subtitle1">
              Dados da Pessoa Jurídica
            </Typography>

            <TextField
              label="Nome Fantasia"
              value={fantasyName}
              onChange={(e) => {setFantasyName(e.target.value)
                setError('');
              }}
              fullWidth
              required
            />

            <TextField
              label="Razão Social"
              value={companyName}
              onChange={(e) => {setCompanyName(e.target.value)
                setError('');
              }}
              fullWidth
            />

            <TextField
              label="CNPJ"
              value={cnpj}
              onChange={(e) => {setCnpj(e.target.value)
                setError('');
              }}
              fullWidth
              required
            />

            <TextField
              label="Cargo"
              value={jobTitle}
              onChange={(e) => {setJobTitle(e.target.value)
                setError('');
              }}
              fullWidth
            />
          </>
        )}

        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <Button variant="contained" onClick={handleSubmit}>
          Cadastrar
        </Button>
        <Button variant="contained" onClick={() => navigate('/users')}>
          Voltar
        </Button>
      </Stack>
    </Container>
  );
}
