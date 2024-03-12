import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ContentPage from './pages/ContentPage';
import { archive, archiveOutline, arrowDown, bag, bagAddOutline, calendar, calendarClear, calendarClearOutline, card, cardOutline, cart, chatbox, checkbox, checkboxOutline, checkmark, cloud, folder, headset, home, images, logoDropbox, logoFacebook, logoFirebase, logoInstagram, logoTumblr, logoVimeo, logoWordpress, logoYoutube, map, mapOutline, newspaper, notifications, pieChart, pin, pricetag, pricetagOutline, pricetagsOutline, radioButtonOff, stopwatch, stopwatchOutline, swapHorizontal, timer, water, wifi } from 'ionicons/icons';
import BadgedTabs from './pages/BadgedTabs';
import PlaceAutocomplete from './pages/PlaceAutocomplete';
import StripePayments from './pages/StripePayments';
import News from './pages/News';
import Restaurants from './pages/Restaurants';
import SwipeableCards from './pages/SwipeableCards';
import Tinder from './pages/Tinder';
import PopOverMenu from './pages/PopOverMenu';
import OAuth from './pages/OAuth';
import LocalStorage from './pages/LocalStorage';
import SQLite from './pages/SQLite';
import Events from './pages/Events';
import WordPress from './pages/WordPress';
import Drupal from './pages/Drupal';
import RSSFeeds from './pages/RSSFeeds';
import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';
import Galleries from './pages/Galleries';
import Position from './pages/Position';
import Charts from './pages/Charts';
import LiveRadio from './pages/LiveRadio';
import Youtube from './pages/Youtube';
import Vimeo from './pages/Vimeo';
import Facebook from './pages/Facebook';
import FacebookAlbums from './pages/FacebookAlbums';
import Instagram from './pages/Instagram';
import Tumblr from './pages/Tumblr';
import Flickr from './pages/Flickr';
import BlogSpot from './pages/BlogSpot';
import FireBase from './pages/FireBase';
import Map from './pages/Map';
import FeedBack from './pages/FeedBack';
import Ad from './pages/Ad';
import Push from './pages/Push';
import Element from './pages/Elements';
import RatingStars from './pages/FeedBack';
import Delete from './pages/delete';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Left</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem routerLink="/">
              <IonIcon slot="start" icon={home} />
              <span>Home</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/badgedtabs">
              <IonIcon slot="start" icon={pricetagsOutline} />
              <span>Badged tabs</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/placeauto">
              <IonIcon slot="start" icon={checkmark} />
              <span>Place autocomplete</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="/stripe">
              <IonIcon slot="start" icon={cardOutline} />
              <span>Stripe payments</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="news">
              <IonIcon slot="start" icon={newspaper} />
              <span>News</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="restaurant">
              <IonIcon slot="start" icon={home} />
              <span>Restaurant catalogue</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="swipeablecards">
              <IonIcon slot="start" icon={arrowDown} />
              <span>Swipable cards</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="tinder">
              <IonIcon slot="start" icon={swapHorizontal} />
              <span>Tinder cards</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="popovermenu">
              <IonIcon slot="start" icon={home} />
              <span>PopOver menu</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="oauth">
              <IonIcon slot="start" icon={radioButtonOff} />
              <span>OAuth</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="localstorage">
              <IonIcon slot="start" icon={folder} />
              <span>Local storage</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="sqlite">
              <IonIcon slot="start" icon={archiveOutline} />
              <span>SQLite</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="events">
              <IonIcon slot="start" icon={calendarClearOutline} />
              <span>Event</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="wordpress">
              <IonIcon slot="start" icon={logoWordpress} />
              <span>Wordpress</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="drupal">
              <IonIcon slot="start" icon={water} />
              <span>Drupal</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="rssfeeds">
              <IonIcon slot="start" icon={wifi} />
              <span>RSS feeds</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="products">
              <IonIcon slot="start" icon={bagAddOutline} />
              <span>Products</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="shoppingcart">
              <IonIcon slot="start" icon={cart} />
              <span>Shopping cart</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="galleries">
              <IonIcon slot="start" icon={images} />
              <span>Galleries</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="position">
              <IonIcon slot="start" icon={stopwatchOutline} />
              <span>Position</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="charts">
              <IonIcon slot="start" icon={pieChart} />
              <span>Charts</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="radio">
              <IonIcon slot="start" icon={headset} />
              <span>Live radio</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="youtube">
              <IonIcon slot="start" icon={logoYoutube} />
              <span>Youtube</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="vimeo">
              <IonIcon slot="start" icon={logoVimeo} />
              <span>Vimeo</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="facebook">
              <IonIcon slot="start" icon={logoFacebook} />
              <span>Facebook</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="fbalbums">
              <IonIcon slot="start" icon={logoFacebook} />
              <span>Facebook Albums</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="instagram">
              <IonIcon slot="start" icon={logoInstagram} />
              <span>Instagram</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="tumblr">
              <IonIcon slot="start" icon={logoTumblr} />
              <span>Tumblr</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="flickr">
              <IonIcon slot="start" icon={images} />
              <span>Flickr</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="blogspot">
              <IonIcon slot="start" icon={home} />
              <span>BlogSpot</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="firebase">
              <IonIcon slot="start" icon={logoFirebase} />
              <span>Firebase Chat</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="map">
              <IonIcon slot="start" icon={mapOutline} />
              <span>Map</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="feedback">
              <IonIcon slot="start" icon={chatbox} />
              <span>Feedbak</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="ad">
              <IonIcon slot="start" icon={cloud} />
              <span>Ad</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="push">
              <IonIcon slot="start" icon={notifications} />
              <span>Push</span>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle>
            <IonItem routerLink="elements">
              <IonIcon slot="start" icon={checkboxOutline} />
              <span>Elements</span>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
      <IonRouterOutlet id="main">
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/contentpage/:custID">
          <ContentPage />
        </Route>
        <Route exact path="/badgedtabs">
          <BadgedTabs />
        </Route>
        <Route exact path="/placeauto">
          <PlaceAutocomplete />
        </Route>
        <Route exact path="/stripe">
          <StripePayments />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/restaurant">
          <Restaurants />
        </Route>
        <Route exact path="/swipeablecards">
          <SwipeableCards />
        </Route>
        <Route exact path="/tinder">
          <Tinder />
        </Route>
        <Route exact path="/popovermenu">
          <PopOverMenu />
        </Route>
        <Route exact path="/oauth">
          <OAuth />
        </Route>
        <Route exact path="/localstorage">
          <LocalStorage />
        </Route>
        <Route exact path="/delete">
          <Delete />
        </Route>
        <Route exact path="/sqlite">
          <SQLite />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/wordpress">
          <WordPress />
        </Route>
        <Route exact path="/drupal">
          <Drupal />
        </Route>
        <Route exact path="/rssfeeds">
          <RSSFeeds />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/shoppingcart">
          <ShoppingCart />
        </Route>
        <Route exact path="/galleries">
          <Galleries />
        </Route>
        <Route exact path="/position">
          <Position />
        </Route>
        <Route exact path="/charts">
          <Charts />
        </Route>
        <Route exact path="/radio">
          <LiveRadio />
        </Route>
        <Route exact path="/youtube">
          <Youtube />
        </Route>
        <Route exact path="/vimeo">
          <Vimeo />
        </Route>
        <Route exact path="/facebook">
          <Facebook />
        </Route>
        <Route exact path="/fbalbums">
          <FacebookAlbums />
        </Route>
        <Route exact path="/instagram">
          <Instagram />
        </Route>
        <Route exact path="/tumblr">
          <Tumblr />
        </Route>
        <Route exact path="/flickr">
          <Flickr />
        </Route>
        <Route exact path="/blogspot">
          <BlogSpot />
        </Route>
        <Route exact path="/firebase">
          <FireBase />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
        <Route exact path="/feedback">
          <RatingStars />
        </Route>
        <Route exact path="/ad">
          <Ad />
        </Route>
        <Route exact path="/push">
          <Push />
        </Route>
        <Route exact path="/elements">
          <Element />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    <IonMenuButton style={{fontSize:"2em"}} />
  </IonApp>
);

export default App;
