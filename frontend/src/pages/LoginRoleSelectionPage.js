import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, slideIn } from '../utils/motion'

const RootContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem',
});

const HeadingTypography = styled(Typography)({
    textAlign: 'center',
    marginBottom: '3rem',
    marginTop: '1rem',
});

const PromptTypography = styled(Typography)({
    textAlign: 'center',
    marginBottom: '2rem',
    marginTop: '2rem',
});

const CardContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '2rem',

    '@media (max-width: 1024px)': {
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '1rem',
    },
});

const CustomCard = styled(Card)({
    width: '100%',
    maxWidth: '300px',
    margin: '1rem',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.1)',
        outline: '2px solid blue',
    },
});

const RoleText = styled(Typography)({
    textAlign: 'center',
    marginTop: '1rem',
});

const RoleSelectionPage = () => {
    const navigate = useNavigate();

    const handleRoleSelection = (role) => {
        if (role === 'serviceprovider') {
            navigate('/serviceproviderlogin');
        } else if (role === 'user') {
            navigate('/userlogin');
        }
    };

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <RootContainer>
                <motion.div variants={slideIn("up", "tween", 0, 1)}>
                    <HeadingTypography variant="h2" component="h1">
                        Role Selection
                    </HeadingTypography>
                </motion.div>
                <CardContainer>
                    <motion.div variants={fadeIn("right", "tween", 0.3, 1)}>
                        <CustomCard onClick={() => handleRoleSelection('serviceprovider')}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Service Provider"
                                    height="300"
                                    image="/assets/images/avatars/teacher.jpg"
                                />
                                <RoleText variant="h5" component="h2">
                                    Service Provider 
                                </RoleText>
                            </CardActionArea>
                        </CustomCard>
                    </motion.div>
                    <motion.div variants={fadeIn("left", "tween", 0.3, 1)}>
                        <CustomCard onClick={() => handleRoleSelection('user')}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="User"
                                    height="300"
                                    image="/assets/images/avatars/advisor.jpg"
                                />
                                <RoleText variant="h5" component="h2">
                                    User
                                </RoleText>
                            </CardActionArea>
                        </CustomCard>
                    </motion.div>
                </CardContainer>
                <motion.div variants={slideIn("up", "tween", 0, 1)}>
                    <PromptTypography variant="h3" component="h1">
                        Please select a role to continue
                    </PromptTypography>
                </motion.div>
            </RootContainer>
        </motion.div>
    );
};

export default RoleSelectionPage;
