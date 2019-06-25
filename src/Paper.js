import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


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
                    <Typography variant="subtitle1" color="textSecondary">
                      {this.props.date}
                    </Typography>
                    <Typography component="h6" variant="h6">
                      {this.props.body}
                    </Typography>

                    <div className="list">
                        <ul>
                          {this.props.details.map(detail => <li>{detail}</li>)}
                        </ul>
                      </div>

                    {/* <Typography variant="subtitle1" paragraph>
                      {this.props.details}
                    </Typography> */}

                          
                  </CardContent>
                </div>
              </Card>
        </div>
      )}
    }
