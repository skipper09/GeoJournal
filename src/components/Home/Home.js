import React, { Component } from "react";
import Card from "../Card/Card";
import locationData from '../../locations.json';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        this.setState({
            locations: locationData.locations
        })
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae reiciendis beatae qui, accusantium quasi ipsa, voluptate dolorum ad debitis labore nihil voluptates deserunt! Repudiandae numquam minima tempore illum! Quidem consequatur cum dicta, tempore repellat ducimus expedita libero ab a quod distinctio, quasi in, iste odit doloribus ipsam! Ipsum doloribus itaque, vel nam at ducimus aperiam repudiandae, delectus, alias reprehenderit aliquid sapiente a. Facere, dolores officia! Rerum labore accusantium, numquam enim maxime ea officia voluptatibus totam voluptas a at eius laborum dignissimos cupiditate debitis dolorem ullam aperiam, quo error pariatur nemo? Rerum in odio voluptates error corporis quas facere excepturi modi.</p>
                <div id="card-holder">
                    {this.state.locations.map((object,i) => <Card location={object} key={i}/>)}
                </div>
            </div>
        );
    }
}

export default Home;