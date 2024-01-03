import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import Card from '../components/Card';
//import Content from './../components/Content';

const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Main() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
        <Card />
      <Box sx={{ marginTop: '20px', width: '70%' }}>
          <Header />
      </Box>
      <Box>
        <CustomBox>
            <div style={{width: "100px", height: "100px", border: "1px solid black"}}>
                {/* Content goes here */}
            </div>
        </CustomBox>
      </Box>
    </Box>
  );
}

export default Main;
