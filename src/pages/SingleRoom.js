import React, {Component} from "react";
import defaultBcg from '../images/room-1.jpeg';
import Background from '../components/Background';
import Banner from '../components/Banner';
import{ Link } from 'react-router-dom';
import {RoomContext} from '../context';
import StyledBackground from '../components/StyledBackground';
export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {
            slug : this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    // componentDidMount(){}
    render (){
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (
            <div className="error">  
            <h3>no such room could be found...</h3>
            <Link to="/rooms" className="btn-primary">back to rooms
            </Link>
            </div>
        );    
    } 
    const {name, description, capacity,size,price,extras, breakfast,pets,images} = room;
        return (
            <StyledBackground img={images[0]}>
                <Banner title={`${name} room`}>
                <Link to='/rooms' className='btn-primary'>
                    back to rooms
                </Link>   
                </Banner>
            </StyledBackground>
        );
    }
}