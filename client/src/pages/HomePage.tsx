import { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Paper } from '@mui/material';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const HomePage = () => {
  const [count, setCount] = useState(0);

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

      <Typography variant="h3" align="center" gutterBottom>
        Welcome to the Home Page
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

        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5">Card 1</Typography>
              <Typography variant="body2">
                This is a card component. You can add your content here.
              </Typography>
              <Button variant="contained" color="primary">Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5">Card 2</Typography>
              <Typography variant="body2">
                This is another card. You can add more sections like this.
              </Typography>
              <Button variant="contained" color="secondary">Get Started</Button>
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
  );
};

export default HomePage;