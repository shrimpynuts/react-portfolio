import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  cardDetails : {
    root: {
      padding: "100px",
    }
  }
}));
  

export default class PaperElement extends Component {
  
    render() {

        const classes = useStyles;
        
        return (
          <div className="paperDiv">
              <CssBaseline />
              <Card className={classes.card}>
                  <CardMedia
                    className={'paperImg'}
                    image={this.props.img}
                    title="Click to view"
                  />
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {this.props.org}
                    </Typography>
                    <Box variant="subtitle1" color="textSecondary">
                      {this.props.date}
                    </Box>
                    <Box component="h6" fontSize={8}>
                      {this.props.body}
                    </Box>

                    <div className="list">
                        <ul className="workList">
                          {this.props.details.map(detail => <li>{detail}</li>)}
                        </ul>
                      </div>
                  </CardContent>
                </div>
              </Card>
        </div>
      )}
    }
