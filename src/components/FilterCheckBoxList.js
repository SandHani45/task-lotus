import React, {Component} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class FilterCheckBoxList extends Component {
    state = {
      checked: []
    }
    // handleToggle function for renderList
      handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if(currentIndex === -1){
            newChecked.push(value)
        } else{
            newChecked.splice(currentIndex,1)
        }

        this.setState({
            checked: newChecked
        },()=>{
            this.props.handleFilters(newChecked)
        })

      } 
  // renderList function
  renderList = () => (
    this.props.list ?
        this.props.list.map((value)=>(
            <FormControlLabel key={value.toString()}
            control={
              <Checkbox onChange={this.handleToggle(value)} checked={this.state.checked.indexOf(value) !== -1} />
            }
            label={value}
          />
        ))
    :null
  )

  render(){
    return (
      <FormGroup row>
        {this.renderList()}
      </FormGroup>
    );
  }
}