import { Card, CardContent, Typography, CardActionArea, Divider, Badge, Avatar } from '@mui/material';
import { deepOrange, indigo, purple } from '@mui/material/colors';
import { SvgIconComponent } from '@mui/icons-material';

export type DashboardCardPropsType = {
    id: string
    icon: React.ReactElement<SvgIconComponent>
    title: string
    color: string
    actionCount: number
}

export function DashboardCard(props: DashboardCardPropsType) {
    return (
        <Card sx={{
            minWidth: 240,
            borderRadius: 5,
            border: 'solid 1px',
            borderColor: indigo[900],
            background: props.color
        }} variant='outlined'>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontStyle: 'italic' }}>
                        <Badge variant='dot' color="primary" invisible={!props.actionCount} sx={{ marginRight: '1rem' }}>
                            <Avatar sx={{ bgcolor: purple[200] }}>{props.icon}</Avatar>
                        </Badge>
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}



