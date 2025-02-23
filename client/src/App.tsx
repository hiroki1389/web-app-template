import { useState } from 'react'
import { Button, Typography, Container, Grid, Paper, Card, CardContent } from '@mui/material'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="lg">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" style={{ height: '40px', marginRight: '20px' }} />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" style={{ height: '40px' }} />
        </a>
      </div>

      <Typography variant="h3" gutterBottom>
        Vite + React + MUI Template
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5">Welcome to the Web App</Typography>
            <Typography variant="body1" paragraph>
              This is a simple template combining Vite, React, and Material-UI. You can use this as a starting point for your own projects.
            </Typography>
            <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
              Count is {count}
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5">More Information</Typography>
              <Typography variant="body2" paragraph>
                You can edit the source code of this project in <code>src/App.tsx</code> to see the changes live with hot module reloading.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <p>
          Click on the Vite and React logos to learn more.
        </p>
      </div>
    </Container>
  )
}

export default App