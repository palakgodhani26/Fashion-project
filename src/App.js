import './App.css';
import Header from './Components/Header/Header';
import { Route } from 'react-router-dom';
import Shop from './Container/Shop/Shop';
import Blog from './Container/Blog/Blog';
import Contact from './Container/Contact/Contact';
import { store } from '../src/Redux/Store';
import ToggleThemecontext from './Context/ThemeContext';
import Home from './Container/Home/Home ';

function App() {
  return (
    <>
    <ToggleThemecontext>
      <Header />
      {/* <Switch> */}
        <Route path={"/"} exact component={Home} />
        <Route path={"/shop"} exact component={Shop} />
        <Route path={"/blog"} exact component={Blog} />
        <Route path={"/contact"} exact component={Contact} />
        {/* <Route path={"/page"} exact component={Page} /> */}


      {/* </Switch> */}
    </ToggleThemecontext>
    </>

  );
}

export default App;
