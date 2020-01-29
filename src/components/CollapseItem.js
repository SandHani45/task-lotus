import React from 'react'
import Typography from '@material-ui/core/Typography';
const CollapseItem = ({item}) =>(
  <div>
    {item.type ? <Typography>Type:{item.type}</Typography> : null}
    <Typography paragraph>Interest :{item.interest ? item.interest.map(item => <span>{`${item}  `} </span>) :null}</Typography> 
    <Typography paragraph>
      Location: {`${item.location.city}  ${item.location.state}  ${item.location.zip}` }
    </Typography>
  </div>
)

export default CollapseItem