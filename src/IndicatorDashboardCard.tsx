import { Card, CardContent, Chip, Typography, Divider, CardHeader } from '@mui/material';
import { indigo, grey, red } from '@mui/material/colors';
import { SvgIconComponent } from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2';


export type IndicatorDashboardCardPropsType = {
    id: string
    title: string
    isPositive: boolean
    indicatorsData: Array<{ id: string, title: string, icon: React.ReactElement<SvgIconComponent>, value: number | string }>
}

export function IndicatorDashboardCard(props: IndicatorDashboardCardPropsType) {
    return (
        <Card sx={{
            minWidth: 240,
            borderRadius: 3,
            border: 'solid 1px',
            borderColor: grey[900],
            background: props.isPositive ? indigo[900] : red[900]
        }} key={props.id}>
            <CardHeader
                title={props.title}
                sx={{ bgcolor: props.isPositive ? indigo[700] : red[700] }}
                titleTypographyProps={{ textAlign: "center" }}
            />
            <CardContent>
                {props.indicatorsData.map((item) =>
                    <>
                        <Grid container spacing={5}>
                            <Grid>
                                <Chip
                                    icon={item.icon}
                                    label={item.title}
                                    sx={{ borderRadius: 2, fontSize: '1rem' }}
                                />
                            </Grid>
                            <Grid sx={{textAlign: 'right'}} md>
                                <Typography sx={{ fontStyle: 'italic', fontWeight: 'bold' }} variant='h5'>
                                    {item.value}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 1 }} />
                    </>
                )}
            </CardContent>
        </Card>
    );
}



