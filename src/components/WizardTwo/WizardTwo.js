import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCity } from '../../ducks/reducer';

class WizardTwo extends Component {
    render(){
        const { updateCity } = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">
            
                <p>In what city will the property be located?</p><br />
                    
                        <input placeholder="city name" type="text" onChange={(e) => updateCity(e.target.value)}/>
                
                    <Link to="/wThree"><button className="wTwo-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
//we are connecting the function onto the props object so that we can invoke it as an event handler
// write exactly what you are bringing from state instead of returning all of state.
// if you are not explicit you don't know if you are getting the value from the reducer or a parent component
// writing is as following versus (state) => state.
function mapStateToProps(state) {
    const {city} = state;
    return {
        city
    };
}
// dispatch to reducer, this is the middleman. This invokes the reducer
export default connect(mapStateToProps, {updateCity})(WizardTwo);