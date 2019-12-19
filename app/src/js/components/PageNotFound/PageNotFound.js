import React from 'react';
import { Link } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const PageNotFound = () => (
    <>
        <CssBaseline />
        <Container className="container center" fixed>
            <Typography variant="h3" noWrap>Oops, page not found</Typography>
            <iframe src="https://giphy.com/embed/R8ygnAs1Qsdr2" frameBorder="0" className="gif" allowFullScreen></iframe>
            <Button>
                <Link
                    to={{ pathname: '/' }}
                    className="link link-blue"
                >
                    Back to main page
                </Link>
            </Button>
        </Container>
    </>
);

export default PageNotFound;