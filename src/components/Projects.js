import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Pdf from '../images/portfolio/DIVA/DivaTelecomHuddersfield.pdf';
import "../App.css";
import Particles from "./Particles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projectHeaderImg1 from "../images/portfolio/ECS/ECS_index.png";
import ECSImg1_1 from "../images/portfolio/ECS/websitehomemenu.png";
import ECSImg1_2 from "../images/portfolio/ECS/productrange.png";
import ECSImg1_3 from "../images/portfolio/ECS/spific-product-range.png";
import ECSImg1_4 from "../images/portfolio/ECS/mobilenav.png";
import ECSImg1_5 from "../images/portfolio/ECS/404-1.png";
import ECSImg1_6 from "../images/portfolio/ECS/dog.gif";

import projectHeaderImg2 from "../images/portfolio/DIVA/DIVA_homepagecake.jpg";
import DIVAImg2_1 from "../images/portfolio/DIVA/divaReport.jpg";
import DIVAImg2_2 from "../images/portfolio/DIVA/diva-telecom-international.jpg";

import projectHeaderImg3 from "../images/portfolio/GOL/GOLHeader.JPG";
import GOLImg3_1 from "../images/portfolio/GOL/GOL1.png";
import GOLImg3_2 from "../images/portfolio/GOL/GOL2.png";
import GOLImg3_3 from "../images/portfolio/GOL/GOL3.png";

import projectHeaderImg4 from "../images/portfolio/ESP/ESP_Dash.PNG";
import ESPImg4_1 from "../images/portfolio/ESP/vehicles.png";
import ESPImg4_2 from "../images/portfolio/ESP/Timesheet.PNG";
import ESPImg4_3 from "../images/portfolio/ESP/Action4Care_dash.png";
import ESPImg4_4 from "../images/portfolio/ESP/TeamPlan.PNG";
import ESPImg4_5 from "../images/portfolio/ESP/PermBuilder.PNG";
import ESPImg4_6 from "../images/portfolio/ESP/TeamPlanGantt.PNG";
import ESPImg4_7 from "../images/portfolio/ESP/Returns.PNG";
import ESPImg4_8 from "../images/portfolio/ESP/ProdReturns.PNG";
import ESPImg4_9 from "../images/portfolio/ESP/SiteDash.PNG";

import projectHeaderImg5 from "../images/portfolio/OneCall/onecallHome.png";

import projectHeaderImg6 from "../images/portfolio/RejDigital/vcc_home.png";
import RejDigitalImg5_1 from "../images/portfolio/RejDigital/surridge.png";
import RejDigitalImg5_2 from "../images/portfolio/RejDigital/PetVet.png";
import RejDigitalImg5_3 from "../images/portfolio/RejDigital/sanc.png";
import RejDigitalImg5_4 from "../images/portfolio/RejDigital/topspec.png";




const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#131426d6",
    margin: "0% 10% 0% 10%",
    borderRadius: "4px",
    border: "1px solid #131426d6",
    minHeight: "95.62vh",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Effective Consumable Solutions",
    description: `Transformed ECS's digital presence with a sleek, responsive landing page. Crafted from scratch using pure CSS3, HTML5, and powered by Magento backend. Elevating user experience and driving engagement.`,
    image: projectHeaderImg1,
    additonalImages: [
      projectHeaderImg1,
      ECSImg1_1,
      ECSImg1_2,
      ECSImg1_3,
      ECSImg1_4,
      ECSImg1_5,
      ECSImg1_6,
    ],
    icons: [
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt",
      "fa-brands fa-js",
      "fa-brands fa-magento"
    ],
    iconNames: [
      "HTML5",
      "CSS3",
      "Java Script",
      "Magento",
    ],
  },
  {
    name: "DIVA Telecom",
    description: `Empowered DIVA's workforce with a robust backend CMS, pivotal to daily operations in the telecommunications sector. Seamlessly bridged front and back-end functionalities as a full-stack developer. Leveraged Laravel to craft an intuitive interface, facilitating efficient task management and enhancing employee productivity.`,
    image: DIVAImg2_1,
    additonalImages: [
      projectHeaderImg2,
      DIVAImg2_1,
      DIVAImg2_2,
    ],
    live_demo_link: "diva",
    icons: [
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt",
      "fa-brands fa-js",
      "fa-brands fa-laravel",
      "fa-brands fa-bootstrap",
      "fa-brands fa-github",
    ],
    iconNames: [
      "HTML5",
      "CSS3",
      "Java Script",
      "Laravel",
      "Bootstrap",
      "Github",
    ],
  },
  {
    name: "Gaming Forum",
    description: `Oversaw the intricate mechanics of website operations while spearheading a pivotal project: the redesign of the landing page. Focused on captivating potential users with a contemporary aesthetic and seamless user experience. Leveraged innovative design principles to elevate the website's appeal and attract new players to the group.`,
    image: projectHeaderImg3,
    additonalImages: [
      projectHeaderImg3,
      GOLImg3_1,
      GOLImg3_2,
      GOLImg3_3,
    ],
    live_demo_link: "https://gol-clan.org",
    icons: [
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt",
      "fa-brands fa-js",
      "fa-brands fa-bootstrap",
      "fa-brands fa-wordpress"
    ],
    iconNames: [
      "HTML5",
      "CSS3",
      "Java Script",
      "Bootstrap",
      "Wordpress"
    ],
  },
  {
    name: "ESP Projects",
    description: `Co-Led the development efforts for the Laravel/Vue.js-based intranet system, unlocking its full potential and transitioning it into a scalable SaaS product primed for resale. Simultaneously, collaborated on crafting tailored Laravel applications for clients, integrating diverse APIs to meet unique business needs. Instrumental in expanding the company's software offerings and delivering tailored solutions to clients.`,
    image: projectHeaderImg4,
    additonalImages: [
      projectHeaderImg4,
      ESPImg4_1,
      ESPImg4_2,
      ESPImg4_3,
      ESPImg4_4,
      ESPImg4_5,
      ESPImg4_6,
      ESPImg4_7,
      ESPImg4_8,
      ESPImg4_9,
    ],
    icons: [
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt",
      "fa-brands fa-js",
      "fa-brands fa-laravel",
      "fa-brands fa-vuejs",
      "fa-brands fa-docker",
      "fa-brands fa-github",
      "fa-brands fa-gitlab",
      "fa-brands fa-linux",
      "fa-brands fa-cloudflare",
      "fa-brands fa-microsoft"
    ],
    iconNames: [
      "HTML5",
      "CSS3",
      "Java Script",
      "Laravel",
      "Vuejs",
      "Docker",
      "Github",
      "Gitlab",
      "Linux",
      "Cloudflare",
      "Microsoft Azure"
    ],
  },
  {
    name: "One Call Insurance",
    description: `Thrived as a member of a global team at OneCall, contributing as a full-stack developer. Led autonomous projects from inception to deployment, navigating complex requirements and collaborating seamlessly across borders. Facilitated productive meetings to align project goals and drive innovation, ensuring timely delivery of robust solutions that enhanced the company's digital infrastructure.`,
    image: projectHeaderImg5,
    additonalImages: [
      projectHeaderImg5,

    ],
    icons: [
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt",
      "fa-brands fa-js",
      "fa-brands fa-laravel",
      "fa-brands fa-vuejs",
      "fa-brands fa-docker",
      "fa-brands fa-github",
      "fa-brands fa-bitbucket",
      "fa-brands fa-linux",
    ],
    iconNames: [
      "HTML5",
      "CSS3",
      "Java Script",
      "Laravel",
      "Vuejs",
      "Docker",
      "Github",
      "BitBucket",
      "Linux",
      "Cloudflare",
    ],
  },
  {
    name: "Rejuvenate Digital",
    description: `Contributed as a full-stack developer at a digital agency specializing in e-commerce websites for mid to large companies, including renowned brands like Vintage Cash Cow. Focused primarily on backend development, handling APIs and database data retrieval, while also engaging in frontend tasks. Played a pivotal role in delivering robust and scalable e-commerce solutions that drove client success.`,
    image: projectHeaderImg6,
    additonalImages: [
      projectHeaderImg6,
      RejDigitalImg5_1,
      RejDigitalImg5_2,
      RejDigitalImg5_3,
      RejDigitalImg5_4
    ],
    icons: [
      "fa-brands fa-html5",
      "fa-brands fa-css3-alt",
      "fa-brands fa-js",
      "fa-brands fa-laravel",
      "fa-brands fa-vuejs",
      "fa-brands fa-bitbucket",
      "fa-brands fa-linux",
      "fa-brands fa-wordpress"
    ],
    iconNames: [
      "HTML5",
      "CSS3",
      "Java Script",
      "Laravel",
      "Vuejs",
      "BitBucket",
      "Linux",
      "Wordpress"
    ],
  },
];

const Portfolio = () => {
  const classes = useStyles();
  const [selectedCarousel, setSelectedCarousel] = useState(null);

  const openCloseCarousel = (id) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling
    });
    setSelectedCarousel(id, id);
  };

  return (
    <Box component="div" className={classes.mainContainer}>
      <Particles />
      <div className={`carousel-root ${selectedCarousel !== null ? 'active' : ''}`} style={{ display: selectedCarousel !== null ? 'flex' : 'none' }}>>
        {selectedCarousel !== null && (
          <div>
            <Carousel>

              {projects[selectedCarousel].additonalImages.map((img, i) => (
                <div key={i}>
                  <img src={img} alt={`Project ${selectedCarousel + 1} - Image ${i + 1}`} />
                </div>
              ))}
            </Carousel>
            <div className="carouselCloseButton" onClick={() => setSelectedCarousel(null)}>
              <CloseIcon />
            </div>
          </div>
        )}
      </div>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer} onClick={() => openCloseCarousel(i)}>
              <CardActionArea>
              <Typography variant="h5" gutterBottom align="center" >
                    {project.name}
                </Typography>
                <CardMedia
                  component="img"
                  alt={`Project ${i + 1}`}
                  height="140"
                  image={project.image}
                />
                {/*<CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>*/}
              </CardActionArea>
              <CardActions>
                {project.live_demo_link && project.live_demo_link !== 'diva' && (
                  <Button size="small" color="primary" target="_blank" href={project.live_demo_link}>
                    Live Demo
                  </Button>
                )}
                {project.live_demo_link === 'diva' && (
                  <Button size="small" color="primary" target="_blank" href={Pdf}>
                    Live Demo
                  </Button>
                )}
              </CardActions>
              {/*<Typography variant="h6" align="center" >
                    Tools Used
                </Typography>*/}
              <div className='containerflex'>
                {project.icons.map((icon, index) => (
                  <Tooltip key={index} title={project.iconNames[index]} arrow TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                    <IconButton>
                      <i className={`material-icons MuiIcon-root ${icon} flex-item`}></i>
                    </IconButton>
                  </Tooltip>
                ))}
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
