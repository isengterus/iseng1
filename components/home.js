import '../sass/main.scss'
import Header from '../components/header'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Section4 from '../components/section4'
import Maps from '../components/maps'

const Home = () => (
    <div>
        <Header/>
        <div className="home">
            <div className="container">
                <h1 className="display-4">Get work done faster<br/> and better with us !</h1>
                <button type="button" class="btn btn-outline-light btn-lg">Design-led transformation start here</button><br/>
                <a href="#"><i className="fas fa-chevron-down"/></a>
            </div>
        </div>
        <Section2/>
        <Section3/>
        <Section4/>
        <Maps/>
    </div>
)
export default Home