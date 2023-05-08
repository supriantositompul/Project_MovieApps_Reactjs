import logo from './logo.svg';
import './App.css'
import Navigation from "./components/Navigation"
import "./style/landingpage.css"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Hero from "./components/Hero"


function App() {
    return (
        <div>
            <div className='myBG border'>
                <Navigation />
                <Intro />
            </div>

            <div className='trending'>
                <Trending />
            </div>

            <div className='hero'>
                <Hero />
            </div>
        </div>

    );
}

export default App;