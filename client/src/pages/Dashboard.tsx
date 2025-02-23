import { Container, Typography, Paper, Grid} from '@mui/material'

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5">Total Sales</Typography>
            <Typography variant="h6">$12,345</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5">Users</Typography>
            <Typography variant="h6">1,234</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5">Revenue</Typography>
            <Typography variant="h6">$8,910</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5">Orders</Typography>
            <Typography variant="h6">567</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard