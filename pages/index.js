import {Component} from 'react';
import {withRouter} from 'next/router'

import Home from '../components/home'
import '../sass/main.scss';
import $ from 'jquery';

import GaWrapper from '../lib/GAWarp';

import { ParallaxProvider,Parallax } from 'react-scroll-parallax';


class Index extends Component{
 
    render(){
        return(
            <div>
                <Home/>
            </div>
        )
    }
}


export default withRouter(Index)