import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { List, ListItem } from '@material-ui/core';
import resumeTheme from '../theme';
import { useTheme, createStyles, makeStyles } from '@material-ui/core/styles';
import CircleIcon from '@mui/icons-material/Circle';
import MarkedComponent from './marked-component';
import { Fragment } from 'react';
const useStyles = makeStyles((theme) =>
    createStyles({
        jobTitle: {
            float: 'left',
            fontWeight: 'bold'
        },
        company: {
            float: 'left'
        },
        workExperience: {
            marginRight: theme.spacing(3)
        },
        work: {
            marginTop: '10px'
        },
        workDate: {
            fontStyle: 'italic',
            float: 'left',
            color: theme.palette.success.main,
        },
        tasks: {
            fontStyle: 'italic',
            float: 'left',
            color: theme.palette.success.main,
        },
        taskList: {
            listStyleType: 'circle',
            marginBottom: theme.spacing(1)
        },
        taskListItem: {
            padding: '0'
        },
        techStack: {
            borderRadius: '10px',
            backgroundColor: theme.palette.primary.dark,
            float: 'left',
            padding: '1px 10px 1px 10px',
            margin: '3px 3px 3px 3px',
            color: 'white'
        }
    }),
);

function WorkExperience({ resume, data, onResize }) {
    const theme = resumeTheme(useTheme());
    const classes = useStyles(theme);
    const wpId = data.id;
    const Header = () => (
        <Grid item container direction='column'>
            <Grid item>
                <Typography variant="h6" className={classes.jobTitle}>
                    {data.jobTitle}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" className={classes.company}>
                    {data.company}
                </Typography>
            </Grid>
        </Grid>
    )
    const WorkDetails = () => (
        <Grid container direction='column'>
            <Grid item>
                <Typography variant="body1" align='left' className={classes.workDate}>
                    {data.from} - {data.to}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" align='left' className={classes.tasks}>
                    {resume.tasksTitle}
                </Typography>
            </Grid>
            <Grid item>
                <List className={classes.taskList} dense={true} disablePadding={true}>
                    {data.tasks && data.tasks.map((task, i) => (
                        <Fragment key={i}>
                            <ListItem className={classes.taskListItem} >
                                <CircleIcon sx={{ padding: '0 10px 0 0', margin: '0', fontSize: '8px', color: theme.palette.success.dark }} />
                                <Typography variant='body1'>{task}</Typography>
                            </ListItem>
                        </Fragment>
                    ))}
                </List>
                {data.techStack && data.techStack.map(techStack => (
                    <Fragment key={techStack}><Typography variant='body1' className={classes.techStack}>{techStack}</Typography></Fragment>
                ))}

            </Grid>
        </Grid>
    )

    return (
        <Grid item container xs={12} md={12} lg={12} direction='column' className={classes.workExperience}>
            <Grid item>
                <MarkedComponent component={<Header />} markerColor={theme.palette.success.main} />
            </Grid>
            <MarkedComponent component={<WorkDetails />} />
        </Grid>
    );
}

export default WorkExperience;
