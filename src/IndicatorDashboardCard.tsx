import { Card, CardContent, Badge, Chip, Typography, Grid, Divider, CardHeader, Avatar } from '@mui/material';
import { indigo, lightGreen, grey } from '@mui/material/colors';
import { SvgIconComponent } from '@mui/icons-material';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import PaidIcon from '@mui/icons-material/Paid';
import { v1 } from 'uuid';

export type IndicatorDashboardCardPropsType = {
    id: string
    icon: React.ReactElement<SvgIconComponent>
    title: string
    color: string
    indicatorNumber: number
    link: string
}

export function IndicatorDashboardCard() {
    return (
        <Card sx={{
            minWidth: 240,
            borderRadius: 3,
            border: 'solid 1px',
            borderColor: indigo[900],
            background: indigo[900]
        }}>
            <CardHeader title="Positive indicators" sx={{bgcolor: indigo[700]}} titleTypographyProps={{textAlign: "center"}}></CardHeader>
            <CardContent>
                <Grid container spacing={5}>
                    <Grid item>
                    <Chip icon={<CurrencyRubleIcon />} label="Earnings" sx={{ borderRadius: 2, fontSize: '1rem' }}/>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontStyle: 'italic', fontWeight: 'bold'}} variant='h5'>
                            30 000
                        </Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 1 }} />
                <Grid container spacing={5}>
                    <Grid item>
                    <Chip icon={<PaidIcon />} label="Workshifts" sx={{ borderRadius: 2, fontSize: '1rem' }}/>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontStyle: 'italic', fontWeight: 'bold'}} variant='h5'>
                            12
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}



