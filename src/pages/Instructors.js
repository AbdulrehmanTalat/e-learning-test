
import React from "react";
import useInstructorsData from "../../src/components/hook/useInstructorsData";
import { Link } from "gatsby";
import { CardContent, CardMedia, Typography, Grid } from "@material-ui/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import style from './Instructors.module.css';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: 100,
  },
  media: {
    height: 140,
  },
});

export default function Instructors() {
  const instructors = useInstructorsData();
  const classes = useStyles();
  return (
    <div>
      <div className={style.Heading}>
          <h1 className={style.instructors_txt}>
            Our Instructors
          </h1>
          </div>
    <div className={style.inst_main}>
    <Grid container alignItems="center"
  justify="center" >
  <Grid item xs={9} md={10} lg={10} className={style.card_div}>
      {instructors.map((ins, index) => {

        return (
          <div className={style.cardsmain}>
          <Card className={style.root}>
          <CardActionArea>
            {/* <CardMedia
              className={classes.media}
              image={ins.picture.file.url}
              title="Contemplative Reptile"
            /> */}
            <div className={style.imgdiv}>
              <img src={ins.picture.file.url} className={style.imgs}/>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {ins.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {documentToReactComponents(ins.description.json)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <iframe
                width="560"
                height="315"
                src={ins.youTubeVideo}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
             
          </CardActions>
          <CardActions>
          <Link to={"/instructors/" + ins.slug}>
              <div className="learnMore">
                 Learn more
              </div>
              </Link>
          </CardActions>
        </Card>
        </div>
        );
      })}
      </Grid>
      </Grid>
    </div>
    </div>
  );
};

