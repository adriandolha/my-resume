import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Item from '@material-ui/core/Grid';
import { Avatar, Box, Link } from '@material-ui/core';
import me from '../static/images/me.jpeg'
import resumeTheme from '../theme';
import { useTheme, createStyles, makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect } from 'react';
import MarkedComponent from './marked-component'
const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },

        fullName: {
            float: 'left',
            fontFamily: 'sans-serif',
            color: theme.palette.primary.dark,
            [theme.breakpoints.down('xs')]: {
                fontSize: '25px',
              },
            // fontWeight: 'bold'
        },
        contactDetails: {
            [theme.breakpoints.down('xs')]: {
                marginLeft: '15px',
              },
        },
        contactDetail: {
            [theme.breakpoints.down('xs')]: {
                fontSize: '14px'
              },
        },
        myTitle: {
            color: theme.palette.success.main,
            [theme.breakpoints.down('xs')]: {
                fontSize: '20px',
              },
            // float: 'left'
        },
        myPicture: {
            height: 180,
            width: 180,
            borderColor: '#40b281',
            border: '5px solid',
            [theme.breakpoints.down('xs')]: {
                marginLeft: '60px',
              },
        },
        personalDetails: {
            marginBottom: '20px'
        },
        myDescription: {
            // width: 'auto',
            // fontFamily: 'Ubuntu !important',
            // paddingTop: '10px',
            // fontSize: '18px'
        },
        myLink: {
            color: 'black',
            fontSize: '18px',
            // fontFamily: 'Ubuntu !important'
        },
        myIcon: {
            padding: '0 10px 0 10px',
            color: theme.palette.primary.main,
            [theme.breakpoints.down('xs')]: {
                padding: '0 1px 0 1px'
              },
        }


    }),
);

function PersonalDetails({ resume, onResize }) {
    const theme = resumeTheme(useTheme());
    const classes = useStyles(theme);
    useEffect(() => {
        const setStyles = () => {
            const el = document.querySelector('.personal-details-header')
            const bounds = el && el.getBoundingClientRect()
            // onResize('personalDetails', bounds)
        }
        // window.addEventListener('resize', setStyles)
        setStyles()
    }, []);
    const Header = () => {
        return (
            <Grid item container direction='column' className='personal-details-header'>
                <Item>
                    <Typography variant="h3" component="h1" className={classes.fullName}>
                        {resume.personalDetails.name}
                    </Typography>
                </Item>
                <Item>
                    <Typography variant="h5" component="h6" className={classes.myTitle} >
                        {resume.personalDetails.jobTitle}
                    </Typography>
                </Item>
            </Grid>
        )
    }
    const Description = () => (
        <Typography variant="body1" align='left' className={classes.myDescription}>
            {resume.personalDetails.description} 
        </Typography>
    )

    return (
        <Grid item container spacing={3} columns={{ sm: 3, md: 3, lg: 3 }} className={classes.personalDetails}>
            <Grid item container xs={12} sm={5} md={5} lg={5} direction='column' >
                <Item>
                    <MarkedComponent component={<Header></Header>} markerColor={theme.palette.primary.main} />
                </Item>
                <Item>
                    <MarkedComponent component={<Description></Description>}  />
                </Item>
            </Grid>
            <Grid item container xs={12} sm={2} md={2} lg={2} justifyContent='center'>
                <Grid item><Avatar alt="" src={resume.personalDetails.picture} className={classes.myPicture} /></Grid>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} container direction='column' spacing={1} className={classes.contactDetails}>
                <Grid item container direction='row' justifyContent='flex-end' alignItems='center' columns={{ sm: 1, md: 2, lg: 2 }}>
                    <Typography variant='h6' className={classes.contactDetail}>{resume.personalDetails.contact.email}</Typography>
                    <EmailIcon className={classes.myIcon} />
                </Grid>
                <Grid item container direction='row' justifyContent='flex-end' alignItems='center' columns={{ sm: 1, md: 2, lg: 2 }}>
                    <Typography variant='h6' className={classes.contactDetail}>{resume.personalDetails.contact.phone}</Typography>
                    <PhoneIphoneIcon className={classes.myIcon} />
                </Grid>
                <Grid item container direction='row' justifyContent='flex-end' alignItems='center' columns={{ sm: 1, md: 2, lg: 2 }}>
                    <Typography variant='h6' className={classes.contactDetail}>{resume.personalDetails.contact.location}</Typography>
                    <LocationOnIcon className={classes.myIcon} />
                </Grid>
                <Grid item container direction='row' justifyContent='flex-end' alignItems='center'>
                    <Link href={resume.personalDetails.contact.linkedin.link} className={classes.myLink}>
                        <Typography variant='h6' className={classes.contactDetail}>{resume.personalDetails.contact.linkedin.placeholder}</Typography>
                    </Link>
                    <LinkedInIcon className={classes.myIcon} />
                </Grid>
                <Grid item container direction='row' justifyContent='flex-end' alignItems='center'>
                    <Link href={resume.personalDetails.contact.github.link} className={classes.myLink}>
                        <Typography variant='h6' className={classes.contactDetail}>{resume.personalDetails.contact.github.placeholder}</Typography>
                    </Link>
                    <GitHubIcon className={classes.myIcon} />
                </Grid>
            </Grid>
        </Grid>

    );
}

export default PersonalDetails;
