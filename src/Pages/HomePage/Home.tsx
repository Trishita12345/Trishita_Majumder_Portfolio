import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { images } from '../../Assets/images';
import Header from '../../components/Header';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { motion } from "framer-motion";

const Home = () => {
    const theme = useTheme();
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const socialIconStyle = {
        fontSize: '18px',
        cursor: 'pointer',
        color: theme.palette.primary.light,
        ':hover': {
            color: '#FFFFFF'
        }
    }
    const [t] = useTranslation('common', { keyPrefix: 'home' })


    return (
        <>
            <Box
                id={'home'}
                sx={{
                    backgroundImage: `url(${images.BackgroundImage})`, position: 'relative',
                    overflow: 'clip',
                    [theme.breakpoints.up('md')]: {
                        height: '700px'
                    }
                }}
                pl={screenSizeDownMd ? 4 : 10} pr={screenSizeDownMd ? 4 : 15}
            >
                <img src={images.CrossIcon} width={screenSizeDownSm ? '60vw' : '100vw'}
                    style={{ position: 'absolute', top: 10, left: screenSizeDownSm ? 15 : 30, animation: 'rotation 17s linear infinite' }} />
                <img src={images.CornerImage} style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 200 }} />
                <Box style={{
                    position: 'absolute', top: 250,
                    left: screenSizeDownSm ? 20 : 50,
                }} display={'flex'} flexDirection={'column'} gap={2}>
                    <motion.div whileHover={{ scale: 1.6 }}>
                        <a href='https://www.facebook.com/trishita.majumder.562?mibextid=ZbWKwL' target={'_blank'}>
                            <AiFillFacebook style={{ ...socialIconStyle }} />
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.6 }}>
                        <a href='https://github.com/Trishita12345' target={'_blank'}>
                            <AiFillGithub style={socialIconStyle} />
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.6 }}>
                        <a href='https://www.linkedin.com/in/trishita-majumder-642b6a18b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target={'_blank'}>
                            <AiFillLinkedin style={socialIconStyle} />
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.6 }}>
                        <a href={'https://instagram.com/__myself_trishita74?igshid=OGQ5ZDc2ODk2ZA=='} target={'_blank'}>
                            <AiOutlineInstagram style={socialIconStyle} />
                        </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.6 }}>
                        <a href={'https://wa.me/+917584942147'} target={'_blank'}>
                            <BiLogoWhatsapp style={socialIconStyle} />
                        </a>
                    </motion.div>
                </Box>
                <Box display={'flex'} flexDirection={screenSizeDownMd ? 'column' : 'row'} justifyContent={screenSizeDownMd ? 'center' : 'space-between'}>
                    <Box display={'flex'} flexDirection={'column'} pl={8} alignItems={screenSizeDownMd ? 'center' : 'start'} flex={7} justifyContent={"center"}>
                        <Typography color={'#FFFFFF'} variant={screenSizeDownSm ? 'h4' : 'h3'} fontWeight={'bold'} whiteSpace={screenSizeDownSm ? 'normal' : 'nowrap'} textAlign={screenSizeDownMd ? 'center' : 'start'}>
                            {t('heading1')} <br /> Trishita Majumder <br /> {t('heading2')}
                        </Typography>
                        <Box display={'flex'} gap={2} mt={screenSizeDownMd ? 2 : 6} mb={6}
                            width={"100%"}
                            justifyContent={screenSizeDownMd ? "center" : "start"}
                            flexDirection={screenSizeDownSm ? 'column' : 'row'}
                        >
                            <Button color='secondary'
                                sx={{ textTransform: 'capitalize', px: 3, py: screenSizeDownSm ? 1.6 : 2 }}
                                variant='contained'
                                onClick={() => document.getElementById('followUs')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t('getInTouchText')}
                            </Button>
                            <Button color='secondary'
                                sx={{ textTransform: 'capitalize', px: 3, py: screenSizeDownSm ? 1.6 : 2 }} variant='contained'
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t('projectViewText')}
                            </Button>
                        </Box>
                    </Box>
                    <Box component={'img'} src={images.trishita} sx={{
                        placeSelf: 'center',
                        zIndex: 1000, height: '700px', [theme.breakpoints.down('md')]: {

                        }
                    }} />
                </Box >
            </Box >
        </>
    );
}

export default Home;