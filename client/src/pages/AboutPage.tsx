import { Container, Paper, Typography } from '@mui/material'

const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h3" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          This is an example of an about page. You can customize this page with information about your app, your team, or your company.
        </Typography>
        <Typography variant="body2">
          MUI allows you to easily create beautiful, responsive web applications with a powerful component library.
        </Typography>
      </Paper>
    </Container>
  )
}

export default AboutPage