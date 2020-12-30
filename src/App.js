import './App.css';
import { Container, Box, Paper, Typography, Grid, Button } from '@material-ui/core';

function App() {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Paper>
            <Box p={3}>
              <Typography variant="h6">Read Docs</Typography>
              <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam, eaque, officiis vitae ipsa autem labore libero commodi veniam sint, facilis quasi ad beatae error expedita. Magni fugit necessitatibus amet.
            </Typography>
              <Button >Read More</Button>
              <Button>Read More</Button>
            </Box>

          </Paper>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Paper>
            <Box p={3}>
              <Typography variant="h6">Read Docs</Typography>
              <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam, eaque, officiis vitae ipsa autem labore libero commodi veniam sint, facilis quasi ad beatae error expedita. Magni fugit necessitatibus amet.
            </Typography>
              <Button >Read More</Button>
              <Button>Read More</Button>
            </Box>

          </Paper>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Paper>
            <Box p={3}>
              <Typography variant="h6">Read Docs</Typography>
              <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam, eaque, officiis vitae ipsa autem labore libero commodi veniam sint, facilis quasi ad beatae error expedita. Magni fugit necessitatibus amet.
            </Typography>
              <Button >Read More</Button>
              <Button>Read More</Button>
            </Box>

          </Paper>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Paper>
            <Box p={3}>
              <Typography variant="h6">Read Docs</Typography>
              <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam, eaque, officiis vitae ipsa autem labore libero commodi veniam sint, facilis quasi ad beatae error expedita. Magni fugit necessitatibus amet.
            </Typography>
              <Button >Read More</Button>
              <Button>Read More</Button>
            </Box>

          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
