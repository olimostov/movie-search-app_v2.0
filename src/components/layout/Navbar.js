import { makeStyles } from '@material-ui/core/styles';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { Theaters } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container
} from '@material-ui/core';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#FFBC59',
//       main: '#f9aa33',
//       dark: '#DD890B',
//       contrastText: '#AC6901'
//     },
//     secondary: {
//       light: '#4a6572',
//       main: '#344955',
//       dark: '#232f34',
//       contrastText: '#fff'
//     }
//   }
// });

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'inherit'
  },
  IconButton: {
    // marginRight: theme.spacing(2)
  },
  brandLogo: {
    fontSize: '60px',
    paddingRight: '10px'
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginRight: theme.spacing(2),
    textDecoration: 'none',
    color: 'inherit'
  },
  navigation: {}
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <ThemeProvider theme={theme}> */}
      <AppBar position='static'>
        <Container>
          <Toolbar>
            <Link to='/' className={classes.title}>
              <Button className={classes.title} color='inherit'>
                <MovieFilterIcon className={classes.brandLogo} />
                <Typography variant='h3'> Movie Finder</Typography>
              </Button>
            </Link>
            <Button size='large' className={classes.title} color='inherit'>
              Top 250
            </Button>
            <Button className={classes.title} color='inherit'>
              Log In
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      {/* </ThemeProvider> */}
    </div>
  );
};

export default Navbar;
