import React from "react";

import Section from "examples/HOC/Section";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import image1 from "examples/Sections/Mitra/Images/toko.jpg"
import image2 from "examples/Sections/Mitra/Images/toko.jpg"
import image1 from "examples/Sections/Mitra/Images/toko.jpg"

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      padding: '20px',
    },
    card: {
      maxWidth: 500,
    },
    media: {
      height: 200,
    },
  });
  
  const cards = [
    { id: 1, title: 'Card 1', description: 'This is card 1 description.',image: image1, link: '/page1' },
    { id: 2, title: 'Card 2', description: 'This is card 2 description.',image: '/path/to/image2.jpg', link: '/page2' },
    { id: 3, title: 'Card 3', description: 'This is card 3 description.',image: '/path/to/image3.jpg', link: '/page3' },
  ];
  
const Mitra = () => {
    const classes = useStyles();

    return (
    <Section id='mitra'>
      <div className={classes.root}>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card className={classes.card}>
              <Link to={card.link}>
                <CardActionArea>
                  <CardMedia
                  className={classes.media}
                  image={card.image}
                  title={card.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    </Section>
  );
}

export default Mitra;



