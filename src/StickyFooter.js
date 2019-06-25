import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Website last updated 6/23/2019'}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {'.'} */}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
          Feel free to reach out: caimjonathan@gmail.com
          </Typography>
          <MadeWithLove />
        </Container>
      </footer>
  );
}