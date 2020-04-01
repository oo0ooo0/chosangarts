import React from 'react';
import Header from './Header';
import Home from './Home';
import Works from './Works';
import About from './About';
import Media from './Media';
import Contact from './Contact';
import Aa from './Aa';
import Footer from './Footer';
import GlobalStyle from './styles/GlobalStyle';
import { MainContainer } from './components/Containers';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LightgalleryProvider } from 'react-lightgallery';

import store from './services/store';

function App() {
  return (
    // Push for share to Chosang
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Route path={'/'} exact>
          <Home />
        </Route>

        <MainContainer>
          <Route path={'/about'} exact>
            <About />
          </Route>

          <Route path={'/work'} exact>
            <Works />
          </Route>

          <Route path={'/media'} exact>
            <Media />
          </Route>

          <Route path={'/contact'} exact>
            <Contact />
          </Route>

          <Route path={'/aa'} exact>
            <LightgalleryProvider
              lightgallerySettings={
                {
                  // settings: https://sachinchoolur.github.io/lightgallery.js/docs/api.html
                }
              }
              galleryClassName='my_custom_classname'
            >
              <Aa />
            </LightgalleryProvider>
          </Route>
        </MainContainer>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
