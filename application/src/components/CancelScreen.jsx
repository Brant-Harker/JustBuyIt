import {
  Button,
  Card,
  CardActions,
  CardContent,
  Input,
  InputLabel,
  Typography,
  FormControl,
} from "@mui/material";

const CancelScreen = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          sx={{
            color: "red",
          }}
        >
          Cancel Order
        </Typography>
        <Typography>Ok fine... we get it.</Typography>
        <FormControl>
          <InputLabel htmlFor="message"></InputLabel>
          <Input id="message" />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button color="danger">Yes, cancel it</Button>
      </CardActions>
    </Card>
  );
};

export default CancelScreen;
