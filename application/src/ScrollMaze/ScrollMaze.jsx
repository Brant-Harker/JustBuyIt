import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2'

function ScrollMaze() {

  return (
    <Box>
      <Grid container columns={50} style={{width: 10000, height: 500 }}>
        <Grid size={47} style={{backgroundColor: 'red'}}>
          <p>Welcome to Hell!</p>
        </Grid>
        <Grid size={1} style={{ maxHeight: 500, overflow: 'auto', backgroundColor: 'green'}}>
          <p style={{marginBottom: 1000}}>Getting warmer!</p>
          <Grid container style={{backgroundColor: 'purple'}}>
            <Grid size={12} style={{width: 10000, overflow: 'auto',}}>
              <p>asshole</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ScrollMaze;