import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const ErrorMessage = (props) => {
    const { message } = props.error;

    return (
        <>
            <CssBaseline />
            <Container className="container" fixed>
                <Typography className="notification" gutterBottom variant="h5" component="h2">
                    Error! {message}
                </Typography>
            </Container>
        </>
    );
}

export default ErrorMessage;
