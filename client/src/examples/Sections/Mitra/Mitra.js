import React from "react";

import Section from "examples/HOC/Section";
import Navbar from "examples/Navbars/DefaultNavbar";
import Footer from "examples/Footer";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      padding: '20px',
    },
    card: {
      maxWidth: 345,
    },
  });
  
  const cards = [
    { id: 1, title: 'Card 1', description: 'This is card 1 description.', link: '/page1' },
    { id: 2, title: 'Card 2', description: 'This is card 2 description.', link: '/page2' },
    { id: 3, title: 'Card 3', description: 'This is card 3 description.', link: '/page3' },
  ];
  
const Mitra = () => {
    const classes = useStyles();

    return (
    <Section id='mitra'>
      <Navbar />
      <div className={classes.root}>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card className={classes.card}>
              <Link to={card.link}>
                <CardActionArea>
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
      <Footer/>
    </Section>
  );
};

export default Mitra;
