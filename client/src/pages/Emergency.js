import React, { useState } from "react";
import { Container } from "react-bootstrap";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

 const Emergency = (props) => {
    return ( 
    <Container className="Emergency">
       <h1>Emergency Information</h1>
       <div>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>On Call International: <a href="tel:+1 978-651-9722">  +1 978-651-9722</a></Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          On Call International is the emergency assistance provider for UT System with an international network of medical and security professionals available any time to assist you. Contact their dedicated number for UT students abroad.  
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>U.S. Department of State Overseas Citizens Services: <a href="tel:001-202-501-4444"> 001-202-501-4444</a></Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Contact the Overseas Citizens Services in the case of an emergency abroad. The Overseas Citizens Office can assist you in the event that you are arrested or detained abroad, are robbed, or if you need to report the death or disappearance of a fellow U.S. citizen abroad.   
          </Typography>
        </AccordionDetails>
       </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>UTA Study Abroad Office: <a href="tel:001-817-272-1120"> 001-817-272-1120</a></Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The UTA Study Abroad Office remains available to you in an emergency 24 hours a day. We can be reached Monday through Friday, 8am to 5pm by calling us at this contact number.  
          </Typography>
        </AccordionDetails>
       </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>UTA Police: <a href="tel:001-817-272-3003"> 001-817-272-3003</a></Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you need immediate assistance outside of office hours, please call the UTA Police, and they will notify the Study Abroad Staff. 
          </Typography>
        </AccordionDetails>
       </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Contact the Tokyo Embassy: <a href="tel:03-3224-5000"> 03-3224-5000</a></Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Address: 1-10-5 AkasakaMinato-ku, Tokyo 107-8420 Japan 
          </Typography>
        </AccordionDetails>
       </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Contact Osaka Consulate: <a href="tel: 06-6315-5900">  06-6315-5900</a></Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Address:  2-11-5, Nishitenma,Kita-ku, Osaka 530-8543 Japan
          </Typography>
        </AccordionDetails>
       </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>In case of Earthquake/Tsunami/National Emergency</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To download the NHK World App, <Link href="https://www3.nhk.or.jp/nhkworld/en/app/" underline="none"> {'click here'}</Link>. Checkout the US Embassy website by<Link href="https://jp.usembassy.gov/services/emergency-preparedness-americans-japan/" underline="none"> {'clicking here'}</Link> to learn about safety tips.
          </Typography>
        </AccordionDetails>
       </Accordion>
       </div> 
       
    </Container> );
}
 
export default Emergency;