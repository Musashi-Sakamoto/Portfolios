import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { AppBar, Button, makeStyles, Toolbar, Typography, Box, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

type Props = {
  title?: string,
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Portfolio
          </Typography>

          <Button color="inherit">
            <Link href="/">
              <a style={{ color: 'white' }}>
                <Typography color="inherit">Home</Typography>
              </a>
            </Link>
          </Button>

          <Button color="inherit">
            <Link href="/about">
              <a style={{ color: 'white' }}>
                <Typography color="inherit">About</Typography>
              </a>
            </Link>
          </Button>

          <Button color="inherit">
            <Link href="/users">
              <a style={{ color: 'white' }}>
                <Typography color="inherit">Users</Typography>
              </a>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false}>
        <Box marginTop={8} width={800} marginRight="auto" marginLeft="auto">
          {children}
        </Box>
      </Container>
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
