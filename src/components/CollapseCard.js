import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// componenets
import CollapseItem from './CollapseItem'

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor:'#c0b9b98a',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const CollapseCard = ({list}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card >
      <CardActions disableSpacing className={classes.card}>
      <Typography h4>{list.first_name + ' ' + list.last_name}</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CollapseItem item = {list}/>
          <Typography paragraph>
           Relationships:
          </Typography>
          <div style={{display: 'flex' ,justifyContent: 'space-between'}}>
            {list.relationships.map(item=>(
              <CollapseItem item = {item}/>
            ))}
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default CollapseCard