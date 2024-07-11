import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const CustomCard = ({ title, error, subtitle, description, formContent, detail, linkTo, linkText, onButtonClick, buttonText, }) => {
    return (
        <>

            <Grid container alignItems={"center"}
                justifyContent={"space-evenly"}
            >
                <Grid item xs={12} sm={9} md={7}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {title}
                            </Typography>

                            {error && (
                                <Typography color="error">
                                    {error}
                                </Typography>
                            )}

                            <Typography variant="subtitle1">
                                {subtitle}
                            </Typography>

                            <Typography variant="body2">
                                {description}
                            </Typography>

                            <div>
                                {formContent}
                            </div>

                            <Typography variant="body2">
                                {detail}<Link to={linkTo}>{linkText}</Link>
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button onClick={onButtonClick} size="small">{buttonText}</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default CustomCard;