import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const StyledBox = styled(Box)({
  backgroundColor: '#f0f0f0',
  padding: '1rem'
});

function Contact() {
  return (
    <StyledBox>
      <h1>Contact Page</h1>
    </StyledBox>
  );
}

export default Contact;
