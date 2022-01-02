import './css/style.css';
import {Route} from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Visual from './components/main/Visual';

//sub
import About from './components/sub/About';
import Product from './components/sub/Product';
import Guide from './components/sub/Guide';
import Help from './components/sub/Help';
import Contact from './components/sub/Contact';
import Join from './components/sub/Join';

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/">
        <Visual />
        
      </Route>
      
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/product" component={Product}></Route>
      <Route exact path="/guide" component={Guide}></Route>
      <Route exact path="/help" component={Help}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/join" component={Join}></Route>

      <Footer />
    </div>
  );
}

export default App;
