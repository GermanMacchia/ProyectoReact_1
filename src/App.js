
import './assets/App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Peliculas from './components/Peliculas';

function App() {

    return (
        <div className="App">
            <Header />

            <Slider />

            <div className="Center">
                 
                <Peliculas />

                <Sidebar />
            
            <div class="clearfix"></div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
