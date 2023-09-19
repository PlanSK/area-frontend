import { Card, CardContent, Typography, CardActions, Button, Grid, Container } from '@mui/material';


export function MainCard() {
    return (
        <Container>
            <Grid container sx={{ margin: '1rem' }}>
                <Card sx={{ minWidth: 275, borderRadius: 5 }} variant='outlined'>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='outlined'>Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Container>
    );
}



