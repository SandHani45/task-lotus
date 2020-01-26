import React, { Component } from "react";
import { connect } from "react-redux";
import {getCurrentProfile , filterSearchList} from './../actions/profileAction'
// Components
import FilterCheckBoxList from './../components/FilterCheckBoxList'
import CollapseCard from './../components/CollapseCard'
// Material
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
class Home extends Component {
    constructor(){
        super()
        this.state= {
            relationshipFilter : false,
            search:''
        }
    }
    componentDidMount() {
        this.props.getCurrentProfile();
      }
    handleChange = () => {
        this.setState({
            relationshipFilter:!this.state.relationshipFilter
        },() => this.props.filterSearchList(this.state.relationshipFilter, this.state.search))
        //console.log(this.state.checkedB)
        //this.props.filterSearchList(event.target.value)
    }
    inputSearch = event => {
        this.setState({
            relationshipFilter:this.state.relationshipFilter,
            search:event.target.value
        },() => this.props.filterSearchList(this.state.relationshipFilter, this.state.search))
    }
  render() {
    const { profile } = this.props.profile;
    let dashboardContant;
    if (profile === null) {
        dashboardContant = <CircularProgress />;
    }else{
        dashboardContant = profile.map(item => {
           return (
            <CollapseCard name ={item.first_name}/>
           )
        })
    }
    return (
        <React.Fragment>
            <Container maxWidth="">
                <Grid container>
                    <Grid item xs={12}>
                        <h3>People</h3>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}  className="rightBorderColour">
                        <h4>Filter by internet</h4>
                        <FormControlLabel
                            label="Include Relationship"
                            className="reversFlex"
                            control={
                            <Switch
                                checked={this.state.checkedB}
                                onChange={this.handleChange}
                                value="relationshipFilter"
                                color="primary"
                            />
                            }
                        />
                        <FilterCheckBoxList />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h4>Search </h4>
                        <TextField id="outlined-basic" fullWidth  variant="outlined" onChange={this.inputSearch}/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      {dashboardContant}  
                    </Grid>
                </Grid>
            </Container>
      </React.Fragment>
    );
  } 
}

const mapStateToProps = state => ({
    profile: state.profile
  });
  export default connect(
    mapStateToProps,
    {   getCurrentProfile, 
        filterSearchList 
    }
)(Home);