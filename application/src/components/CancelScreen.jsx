import {
  Button,
  Card,
  CardActions,
  CardContent,
  Input,
  InputLabel,
  Typography,
  FormControl,
} from "@mui/material"

const CancelScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card variant="outlined" sx={{ maxWidth: 400, padding: 2 }}>
        <CardContent>
          <Typography
            sx={{
              color: "red",
              fontSize: 24,
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Cancel Order
          </Typography>
          <Typography sx={{ mb: 2 }}>Ok fine... we get it.</Typography>
          <FormControl fullWidth>
            <InputLabel htmlFor="message">Message</InputLabel>
            <Input id="message" />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button color="error" variant="contained" fullWidth>
            Yes, cancel it
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CancelScreen
