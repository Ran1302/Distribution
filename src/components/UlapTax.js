import { Box, Grid, Link, Typography, makeStyles, useTheme, useMediaQuery, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    image: {
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
        [theme.breakpoints.up('md')]: {
            width: "50%",
        },
        height: "auto",
    },
    tagline: {
        color: theme.palette.text.primary,
        fontWeight: 700,
        [theme.breakpoints.down('md')]: {
            fontSize: "1.3rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "3rem",
        },
        "& span": {
            color: theme.palette.primary.main,
        }
    },
    ulaptax: {
        fontWeight: 700,
        [theme.breakpoints.up('lg')]: {
            fontSize: "4rem",
        },
        color: theme.palette.text.primary,
        "& span": {
            color: theme.palette.primary.contrastText,
        }
    },
    content: {
        // fontWeight: 700,
        [theme.breakpoints.down('md')]: {
            fontSize: ".75rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "1.2rem",
            width: "68%",
        },
        padding: "0 .5rem",
        color: theme.palette.primary.contrastText,
    },
    gradientBackground: {
        width: '100%',
        height: '120vh',
        background: 'linear-gradient(180deg, #FF7704, #FFF)',
        transform: 'skewY(-25deg)',
        zIndex: -1,
        position: 'absolute',
        [theme.breakpoints.down('md')]: {
            top: '50%',
        },
        [theme.breakpoints.up('md')]: {
            top: '60%',
        },
        left: "0%",
        padding: "0 0 0 0",
    },
    scheduleDemo: {
        backgroundColor: '#FAFAFA',
        fontWeight: 700,
        textTransform: 'uppercase',
        borderRadius: "50px",
        fontSize: 12,
        padding: ".5rem 1rem",
        [theme.breakpoints.up('lg')]: {
            fontSize: 16,
            padding: ".8rem 1.75rem",
        },
        "&:hover": {
            backgroundColor: "#FF7704",
            color: "#FAFAFA",
        },
    }
}))

const UlapTax = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isXs = useMediaQuery("(max-width:600px)");


    useEffect(() => {
        console.log(isXs);
        document.body.style.overflow = "hidden";
    })


    return (
        <>
            {isXs ? <Box sx={{
                position: "relative",
                height: "100vh",
                overflow: "hidden",
                padding: "0 2.5rem",
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Box >
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}>
                                <img src="/images/UlapTaxHeroPageIcon.png" alt="UlapBiz" className={classes.image} />
                            </Box>
                            <Box>
                                <Typography align='center' variant="h3" className={classes.tagline}>
                                    Resolving Tax Troubles <br />
                                    with <span>Expert Precision</span>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: ".5rem",
                        }}>
                            <img src="/images/UlapTaxIcon.png" alt="UlapTax" className={classes.image} style={{ width: "40%" }} />
                            <Typography variant='h2' align='center' className={classes.ulaptax}>
                                Ulap<span>Tax</span>
                            </Typography>
                            <Typography component={"p"} align='center' className={classes.content}>
                                Designed with integrated Philippine tax features on income tax, business tax, with holding taxes,  and mandatory compliance reports.
                            </Typography>
                            <Link component={RouterLink} to="/ulaptax" underline="none" variant='h5' className={classes.scheduleDemo}>
                                Schedule a Demo
                            </Link>
                        </Box >
                    </Grid>
                </Grid>
                <Box className={classes.gradientBackground}>

                </Box>
            </Box> :
                <Container>
                    <Grid container >
                        <Grid item sm={12}>
                            <Box sx={{
                                height: "20vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "end",
                            }}>
                                <Typography align='center' variant="h3" className={classes.tagline}>
                                    Resolving Tax Troubles <br />
                                    with <span>Expert Precision</span>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={12}>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: ".5rem",
                                height: "60vh",
                                // padding: "0 4.5rem",
                            }}>
                                <Grid item sm={6}>
                                    <Box sx={{
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                        <img src="/images/UlapTaxHeroPageIcon.png" alt="UlapBiz" className={classes.image} style={{ width: "100%" }} />
                                    </Box>
                                </Grid>
                                <Grid item sm={6}>
                                    <Box sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: ".5rem",

                                    }}>
                                        <img src="/images/UlapTaxIcon.png" alt="UlapTax" className={classes.image} style={{ width: "40%" }} />
                                        <Typography variant='h1' align='center' className={classes.ulaptax}>
                                            Ulap<span>Tax</span>
                                        </Typography>
                                        <Typography component={"p"} align='center' className={classes.content}>
                                            Designed with integrated Philippine tax features on income tax, business tax, with holding taxes,  and mandatory compliance reports.
                                        </Typography>
                                        <Link component={RouterLink} to="/ulaptax" underline="none" variant='h5' className={classes.scheduleDemo}>
                                            Schedule a Demo
                                        </Link>
                                    </Box>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>


                    <Box className={classes.gradientBackground}>

                    </Box>
                </Container >
            }
        </>
    )
}

export default UlapTax