import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import resumeTheme from '../theme';
import { useTheme, createStyles, makeStyles } from '@material-ui/core/styles';
import WorkExperience from './work-experience';
import Education from './education';
import { Fragment } from 'react';
import Skills from './skills';
import MarkedComponent from './marked-component';
import PersonalProject from './personal-project';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        jobTitle: {
            float: 'left'
        },
        company: {
            float: 'left'
        },
        sectionTitle: {
            fontWeight: 'bold',
            textTransform: 'uppercase',
            float: 'left',
            marginTop: theme.spacing(2),
            [theme.breakpoints.down('xs')]: {
                fontSize: '20px'
            }
        },
        work: {
            marginTop: '10px'
        },
        workExperience: {
            order: 1,
            [theme.breakpoints.down('xs')]: {
                order: 2
            },
//            "@media print": {
//                "&>*:nth-child(6)": {
//                    marginTop: '130px'
//                }
//            }
        },
        skills: {
            order: 2,
            [theme.breakpoints.down('xs')]: {
                marginLeft: '60px',
                order: 1
            }
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
            listStyle: 'circle',
        },
        personalProjects: {
            [theme.breakpoints.down('xs')]: {
                display: 'block'
            },
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            }
        },
        personalProjectsTitle: {
            [theme.breakpoints.down('xs')]: {
                display: 'block'
            },
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            }

        },
    }),
);


function ResumeBody({ resume, onResize }) {
    const theme = resumeTheme(useTheme());
    const classes = useStyles(theme);
    let workExperiences = resume.workExperiences
    const skillTitleVariant = 'h5';
    const sectionTitleVariant = 'h4';


    return (
        <Grid item container spacing={4} columns={{ sm: 3, md: 3, lg: 3 }} className={classes.work}>
            <Grid item xs={12} sm={6} md={6} lg={6} spacing={2} container direction='column' className={classes.workExperience}>
                <Grid item>
                    <MarkedComponent component={<Typography variant="h4" className={classes.sectionTitle}>
                        {resume.workExperienceTitle}
                    </Typography>} />

                </Grid>
                {workExperiences && workExperiences.map((work, i) => {
                    return (<Fragment key={i}>
                        <Grid item>
                            <WorkExperience resume={resume} data={work} onResize={onResize} />
                        </Grid>
                    </Fragment>)
                })}
                <Grid item className={classes.personalProjectsTitle}>
                    <MarkedComponent component={<Typography variant={skillTitleVariant} className={classes.sectionTitle}>
                        {resume.personalProjectsTitle}
                    </Typography>} />
                </Grid>
                <Grid item container spacing={3} className={classes.personalProjects}>
                    {resume.personalProjects && resume.personalProjects.map((project, i) => {
                        return <Fragment key={i}><Grid item><PersonalProject resume={resume} data={project} marked={true} /></Grid></Fragment>
                    })}
                </Grid>

                <Grid item>
                    <MarkedComponent component={<Typography variant="h4" className={classes.sectionTitle}>
                        {resume.educationTitle}
                    </Typography>} />
                </Grid>
                {resume.education && resume.education.map((data, i) => {
                    return <Fragment key={`edu-${i}`}><Grid item><Education data={data} /></Grid></Fragment>
                })}
            </Grid>
            <Grid item container xs={12} sm={6} md={6} lg={6} className={classes.skills} >
                <Skills resume={resume} />
            </Grid>
        </Grid>
    );
}

export default ResumeBody;
