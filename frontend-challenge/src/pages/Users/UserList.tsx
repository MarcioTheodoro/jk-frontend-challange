import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Pagination
} from '@mui/material';
import { getUsers } from '../../services/UserService';
import type { User } from '../../types/User';

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [rowsPerPage, _setRowsPerPage] = useState(4);

  const count = users.length;
  const pageCount = Math.ceil(count / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedUsers = users.slice(startIndex, endIndex);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  }

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar usuários');
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  if (loading) {
    return (
      <Container style={{ marginTop: '4rem', textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (users.length === 0) {
      return (
        <Container style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Typography variant="h6">Nenhum usuário encontrado.</Typography>
        </Container>
      );
  }

  return (
    <Container style={{ marginTop: '4rem' }}>
      <Typography variant="h4" gutterBottom>
        Lista de Usuários
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Tipo</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {displayedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
    </div>
    </Container>
  );
}
