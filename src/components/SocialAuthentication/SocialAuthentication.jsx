import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const buttonStyle = {
    fontSize: '10px',
    width: '100%',
    backgroundColor: '#240838'
}

const SocialAuthentication = () => {
    return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    sx={buttonStyle}
                >
                    Sign In by
                    <GoogleIcon sx={{ fontSize: '20px' }} />
                </Button>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    sx={buttonStyle}
                >
                    Sign In by
                    <FacebookOutlinedIcon sx={{ fontSize: '20px' }} />
                </Button>
            </Grid>
        </Grid>
    );
};

export default SocialAuthentication;