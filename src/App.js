import React from 'react';
import Header from './Header';
import Works from './Works';
import WorkDetail from './components/WorkDetail';
import About from './About';
import Media from './Media';
import MediaDetail from './components/MediaDetail';
import Add from './Add';
import Footer from './Footer';
import GlobalStyle from './styles/GlobalStyle';
import { MainContainer } from './components/Containers';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './services/store';
import { LightgalleryProvider } from 'react-lightgallery';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />

        <MainContainer>
          <Route path={'/about'} exact>
            <About />
          </Route>

          <Route path={'/'} exact>
            <Works />
          </Route>

          <Route path={'/media'} exact>
            <Media />
          </Route>

          <Route path={'/add'} exact>
            <LightgalleryProvider
              lightgallerySettings={
                {
                  // settings: https://sachinchoolur.github.io/lightgallery.js/docs/api.html
                }
              }
              galleryClassName='my_custom_classname'
            >
              <Add />
            </LightgalleryProvider>
          </Route>

          <Route path={'/work/:id'}>
            <WorkDetail />
          </Route>

          <Route path={'/media/:id'}>
            <MediaDetail />
          </Route>
        </MainContainer>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
