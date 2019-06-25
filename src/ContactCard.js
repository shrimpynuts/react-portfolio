import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import pdf from './files/Jonathan-Cai-Resume.pdf';
import { SocialIcon } from 'react-social-icons';


const useStyles = makeStyles(theme => ({
    sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
    marginTop: theme.spacing(3),
    },
    footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    },
}));


export default class ContactCard extends Component { 

    render() {
        const classes = useStyles;

        return (
                <Paper elevation={1} className="cont">
                    <CssBaseline />
                    <div className="contact-text">
                    <Typography>
                        <p>
                            <SocialIcon target="_blank" url="https://www.linkedin.com/in/jonathan-cai/" /> {"                "}
                        </p>
                        <p>
                            <SocialIcon target="_blank" url="https://github.com/jonathancai11" /> {"                "}
                        </p>
                        <p>
                            <SocialIcon target="_blank" url="mailto:caimjonathan@gmail.com" /> {"                "}
                        </p>
                        <p>
                            <SocialIcon target="_blank" url="https://medium.com/@caimjonathan" /> {"                "}
                        </p>
                        <p>
                            <SocialIcon target="_blank" url={pdf} /> {"                "}
                        </p>
                    </Typography>
                    </div>
                </Paper>
            )
    }
}