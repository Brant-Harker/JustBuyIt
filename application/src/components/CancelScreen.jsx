import { Button, Card, CardActions, CardContent } from "@mui/material";

const CancelScreen = () => {
  return (
    <Card variant="outlined">
      <CardContent></CardContent>
      <CardActions>
        <Button color="danger">Cancel Order</Button>
      </CardActions>
    </Card>
  );
};

export default CancelScreen;
