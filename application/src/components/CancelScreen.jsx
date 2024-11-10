import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material"

const CancelScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        height: "100%",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: "24rem",
          height: "26rem",
          padding: "2rem",
          marginBottom: "5rem",
          borderRadius: "1rem",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              color: "red",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Cancel Order
          </Typography>
          <Typography sx={{ marginBottom: "1.5rem", fontWeight: "700" }}>
            Ok fine... we get it.
          </Typography>
          <Divider sx={{ marginBottom: "2rem" }} />
          <Typography>
            What is your reason for cancelling? (Mandatory)
          </Typography>
          <TextField
            id="outlined-multiline-flexible"
            label="Share your feedback here..."
            multiline
            rows={4}
            sx={{ width: "100%", marginTop: "1rem" }}
          />
        </CardContent>
        <CardActions sx={{ marginTop: "1rem", justifyContent: "space-around" }}>
          <Button color="success" variant="contained" size="large">
            cancel
          </Button>
          <Button color="error" variant="contained" size="large">
            Yes, cancel it
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CancelScreen
