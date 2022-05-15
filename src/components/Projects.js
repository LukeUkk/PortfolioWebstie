import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import $ from 'jquery'; 
import "../App.css";

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
import CloseIcon from '@material-ui/icons/Close';
import Pdf from '../images/portfolio/DIVA/DivaTelecomHuddersfield.pdf';


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


import projectHeaderImg3 from "../images/portfolio/GOL/GOLHome.JPG";



import projectHeaderImg4 from "../images/portfolio/ESP/ESP_Dash.PNG";
import ESPImg4_1 from "../images/portfolio/ESP/vehicles.png";
import ESPImg4_2 from "../images/portfolio/ESP/Timesheet.PNG";
import ESPImg4_3 from "../images/portfolio/ESP/Action4Care_dash.png";
import ESPImg4_4 from "../images/portfolio/ESP/TeamPlan.PNG";
import ESPImg4_5 from "../images/portfolio/ESP/PermBuilder.PNG";
import ESPImg4_6 from "../images/portfolio/ESP/TeamPlanGantt.PNG";
import ESPImg4_7 from "../images/portfolio/ESP/Returns.PNG";
import ESPImg4_8 from "../images/portfolio/ESP/ProdReturns.PNG";


import projectHeaderImg6 from "../images/react.png";
import Particles from "./Particles";
import { green, red } from '@material-ui/core/colors';
import { Icon } from '@material-ui/core';


/* This code could be alot better but yeah react....*/ 



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
    description: `The Above is showing the landing page that I redesigned and developed for ECS. This was made using pure css3-alt & HTML5 with a reactive design, backend was Majento.`,
    image: projectHeaderImg1,
    additonalImages: [
        projectHeaderImg6,
    ],
    icons: [
      "fa-brands fa-css3-alt",
      "fa-brands fa-html5",
      "fa-brands fa-magento"
    ]
  },
  {
    name: "DIVA Telecom",
    description: `The above is the home page of the management system I created for DIVA, the page shows important things to be actioned.
    The home page includes a change log where employees can see what changes have been made and if it affects anything they use so they are aware. This site was made using Laravel.`,
    image: projectHeaderImg2,
    live_demo_link: "diva",
    icons: [
      "fa-brands fa-css3-alt",
      "fa-brands fa-html5",
      "fa-brands fa-laravel",
      "fa-brands fa-bootstrap",
      "fa-brands fa-github",
    ]
    // ideal way is to have additonalImages in here ******
  },
  {
    name: "Gaming Forum",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: projectHeaderImg3,
    live_demo_link: "https://gol-clan.org",
    icons: [
      "fa-brands fa-css3-alt",
      "fa-brands fa-html5",
      "fa-brands fa-bootstrap",
      "fa-brands fa-wordpress-simple"
    ]
  },
  {
    name: "ESP Projects",
    description: `My role: what i worked on and how it helped the company`,
    image: projectHeaderImg4,
    icons: [
      "fa-brands fa-css3-alt",
      "fa-brands fa-html5",
      "fa-brands fa-laravel",
      "fa-brands fa-vuejs",
      "fa-brands fa-docker",
      "fa-brands fa-github",
      "fa-brands fa-gitlab",
      "fa-brands fa-linux",
      "fa-brands fa-cloudflare",
    ]
  },

];

const EcsAdditonalImages = [
    projectHeaderImg1,
    ECSImg1_1,
    ECSImg1_2,
    ECSImg1_3,
    ECSImg1_4,
    ECSImg1_5,
    ECSImg1_6,
];


const DivaAdditonalImages = [
  projectHeaderImg2,
  DIVAImg2_1,
  DIVAImg2_2,

];

const GOLAdditonalImages = [
  projectHeaderImg3,
];

const ESPAdditonalImages = [
  projectHeaderImg4,
  ESPImg4_1,
  ESPImg4_2,
  ESPImg4_3,
  ESPImg4_4,
  ESPImg4_5,
  ESPImg4_6,
  ESPImg4_7,
  ESPImg4_8,
];


var cardID = null;
function openCloseCarousel(e) {
  e.preventDefault();

  if (e.target.id != '') {  
    cardID = e.target.id;
  }
  
  var carousel = $('#carousel_'+cardID);
  var carouselParent = carousel.closest('.carousel-root');

  if(carouselParent.css("display") == "none"  && cardID != 'carousel_') {
    carouselParent.show();
    $('.carouselCloseButton').show();
  } else {
    carouselParent.hide();
    $('.carouselCloseButton').hide();
  }
}
class CloseButton extends Component {
  render() {
    return <div className="carouselCloseButton" onClick={openCloseCarousel}><CloseIcon/> </div>;
  }
}

// For each carousel / For each slide
class ECSCarousel extends Component {
  render() {
      return (
        
        //projects.map((project, i) => (
          <Carousel>
            {EcsAdditonalImages.map((img, i) => (
              <div key={i} id="carousel_0">
                  <img  key={img} src={img}  alt="Project 1"/>
                  <p className="legend">Legend 1</p>
              </div>
            ))}
          </Carousel>
        //))
      );
  }
};

class DIVACarousel extends Component {
  render() {
      return (
          <Carousel>
            {DivaAdditonalImages.map((img, i) => (
              <div key={i}  id="carousel_1">
                  <img  key={img} src={img}  alt="Project 2"/>
                  <p className="legend">Legend 1</p>
              </div>
            ))}
          </Carousel>
      );
  }
};

class GOLCarousel extends Component {
  render() {
      return (
          <Carousel>
            {GOLAdditonalImages.map((img, i) => (
              <div key={i}  id="carousel_2">
                  <img  key={img} src={img}  alt="Project 3"/>
                  <p className="legend">Legend 1</p>
              </div>
            ))}
          </Carousel>
      );
  }
};

class ESPCarousel extends Component {
  render() {
      return (
          <Carousel>
            {ESPAdditonalImages.map((img, i) => (
              <div key={i}  id="carousel_3">
                  <img  key={img} src={img}  alt="Project 4"/>
                  <p className="legend">1</p>
              </div>
            ))}
          </Carousel>
      );
  }
};

/* ICONS */
class ECSIcons extends Component {
  render() {
      return (
        <div className='containerflex'>
          {projects[0].icons.map((ecsicons, i) => (
            <i key={i} className={`material-icons MuiIcon-root ${ecsicons} flex-item`}></i>
          ))}
        </div>
      );
  }
};
class DIVAIcons extends Component {
  render() {
      return (
        <div className='containerflex'>
          {projects[1].icons.map((divaicons, i) => (
            <i key={i} className={`material-icons MuiIcon-root ${divaicons} flex-item`}></i>
          ))}
        </div>
      );
  }
};
class GOLIcons extends Component {
  render() {
      return (
        <div className='containerflex'>
          {projects[2].icons.map((golicons, i) => (
            <i key={i} className={`material-icons MuiIcon-root ${golicons} flex-item`}></i>
          ))}
        </div>
      );
  }
};
console.log(projects);
class ESPIcons extends Component {
  render() {
      return (
        <div className='containerflex'>
          {projects[3].icons.map((espicons, i) => (
            <i key={i} className={`material-icons MuiIcon-root ${espicons} flex-item`}></i>
          ))}
        </div>
      );
  }
};



// TODO make 4x DemoCaraousel class or a for loop like below
// in each have photo of websites
// Call 4x DemoCarousel Below 
// Use css to hide all carousel 
// Then on click a project show relevent DemoCarousel
const Portfolio = () => {
  const classes = useStyles();
  
  return (

    <Box component="div" className={classes.mainContainer}>
      <Particles />
      <ECSCarousel />
      <DIVACarousel />
      <GOLCarousel />
      <ESPCarousel />
      <CloseButton />
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (

          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  id={i}
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                  onClick={openCloseCarousel}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {(
                    (project.live_demo_link && project.live_demo_link != 'diva') 
                      ? 
                    <Button size="small" color="primary" target="_blank" href={project.live_demo_link} >
                      Live Demo
                    </Button> 
                    : 
                    ''

                )}
                {(
                  (project.live_demo_link == 'diva') ?
                    <Button size="small" color="primary" target="_blank" href={Pdf} >
                      Live Demo
                    </Button>
                    : 
                    ''
                )}
              </CardActions>

              {(project.name == 'Effective Consumable Solutions') ? (
                <ECSIcons />
              ):''}
              {(project.name == 'DIVA Telecom') ? (
                <DIVAIcons />
              ):''}
              {(project.name == 'Gaming Forum') ? (
                <GOLIcons />
              ):''}
              {(project.name == 'ESP Projects') ? (
                <ESPIcons />
              ):''}
              <div class="MuiCardActions-root MuiCardActions-spacing"></div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    
  );
};


export default Portfolio;

