import * as React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@mui/material";

import {
  Dialog,
  DialogContentText,
  DialogTitle,
  DialogActions,
  DialogContent
} from "@material-ui/core";

export default function MediaCard() {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <span>
        <CardMedia
          component="img"
          height="140"
          style={{ height: 100 }}
          image=" https://www.3csoftware.com/wp-content/uploads/2020/01/iStock-1072111648.jpg"
          alt=" Digital transformation "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Тест 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            кратко в подробностях кратко в подробностях кратко в подробностях
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            {" "}
            <Link to="/Test">Пройти</Link>{" "}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickToOpen}
          >
            Подробнее
          </Button>
          <Dialog open={open} onClose={handleToClose}>
            <DialogTitle>{"Digital transformation"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                в подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях в подробностях в подробностях в
                подробностях в подробностях
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleToClose} color="primary" autoFocus>
                Назад
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </span>
    </Card>
  );
}
