import React, { useState } from 'react';
import { Typography, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledHeading = styled(Typography)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4rem'
})
const StyledForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '700px',
    margin: 'auto',
    marginTop: '1rem',
});

const StyledTextField = styled(TextField)({
    marginBottom: '1rem',
});

const StyledSubmitButton = styled(Button)({
    marginTop: '2rem',
});

const ServiceProviderRegistration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
    };


    const handleTermsChecked = (event) => {
        setTermsChecked(event.target.checked);
    };
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:1337/registerServiceProvider', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    companyName,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                navigate('/login');
            } else {
                // Registration failed, handle accordingly (e.g., show error message, etc.)
                console.error('Registration failed');
            }
        } catch (error) {
            // Handle any other errors that occur during the request
            console.error(error);
        }
    };

    return (
        <div>
            <StyledHeading variant="h3">
                Service Provider Registration
            </StyledHeading>
            <StyledForm onSubmit={handleSubmit}>
                <StyledTextField
                    label="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                <StyledTextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <StyledTextField
                    label="Company Name"
                    value={companyName}
                    onChange={handleCompanyNameChange}
                    required
                />
                <StyledTextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <StyledTextField
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={termsChecked}
                            onChange={handleTermsChecked}
                            color="primary"
                        />
                    }
                    label="I agree to the terms and conditions."
                />
                <StyledSubmitButton variant="contained" color="primary" type="submit">
                    Register
                </StyledSubmitButton>
            </StyledForm>
        </div>
    );
};

export default ServiceProviderRegistration;
