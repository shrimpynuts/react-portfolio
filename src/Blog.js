import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import featuredPosts from './Projects';
import Box from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));
  

export default class Blog extends Component {
  
    render() {

        const classes = useStyles;
        
        return (
        <div className="grid">
        <CssBaseline />
          <Grid container spacing={5} className={classes.cardGrid}>
              {featuredPosts.map(post => (
                <Grid item key={post.title} xs={12} md={6}>
                  <CardActionArea component="a" href={post.url} target="_blank">
                    <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={post.image}
                          title="Click to view"
                        />
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            {post.title}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {post.date}
                          </Typography>
                          <Box fontSize={15}>
                            {post.description}
                          </Box>
                        </CardContent>
                      </div>
                    </Card>
                  </CardActionArea>
                </Grid>
              ))}
              </Grid>
        </div>
            )}
    }
