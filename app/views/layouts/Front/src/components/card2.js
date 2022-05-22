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

export default function MediaCard1() {
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
          image="https://cpb-us-w2.wpmucdn.com/web.sas.upenn.edu/dist/a/122/files/2016/06/sustainability-18185nl.jpg"
          alt=" Circular Economy "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Тест 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            кратко в подробностях кратко в подробностях кратко в подробностях
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            {" "}
            <Link to="/Test2">Пройти</Link>{" "}
          </Button>

          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickToOpen}
          >
            Подробнее
          </Button>
          <Dialog open={open} onClose={handleToClose}>
            <DialogTitle>{"Текст "}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <p>
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
                </p>
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
