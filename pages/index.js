import {Component} from 'react';
import {withRouter} from 'next/router'

import '../sass/main.scss';
import $ from 'jquery';

import GaWrapper from '../lib/GAWarp';

import { ParallaxProvider,Parallax } from 'react-scroll-parallax';


class Index extends Component{
 
    render(){
        return(
            <div className="test">
               <h1>test</h1>
               <h2>teh botol sosro </h2>
            </div>
        )
    }
}


export default withRouter(Index)