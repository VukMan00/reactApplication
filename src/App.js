import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Songs from './components/Songs';

function App() {
  const songs = [
    {
      id:1,
      picture:"https://assets.vogue.com/photos/623b4f0174ede191983e2c76/master/pass/unnamed%20(3).jpg",
      title:"As It Was",
      artist:"Harry Styles",
      video:"https://www.youtube.com/watch?v=H5v3kku4y6Q"
    },
    {
      id:2,
      picture:"https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png",
      title:"Heat Waves",
      artist:"Glass Animals",
      video:"https://www.youtube.com/watch?v=mRD0-GxqHVo"
    },
    {
      id:3,
      picture:"https://i.pinimg.com/564x/4f/d9/94/4fd994c3e084d26f9e5df370a59506b6.jpg",
      title:"STAY(With Justin Bieber)",
      artist:"The Kid LAROI, Justin Bieber",
      video:"https://www.youtube.com/watch?v=kTJczUoc26U"
    },
    {
      id:4,
      picture:"https://cdns-images.dzcdn.net/images/cover/b29d1070377b784384c2456093f96a66/350x350.jpg",
      title:"Me Porto Bonito",
      artist:"Bad Bunny, Chencho Corleone",
      video:"https://www.youtube.com/watch?v=ZRnp5vwF5yA"
    },
    {
      id:5,
      picture:"https://i1.sndcdn.com/artworks-7fc67veDdEbOU2Qz-tRkjOQ-t500x500.jpg",
      title:"Titi Me Pregunto",
      artist:"Bad Bunny",
      video:"https://www.youtube.com/watch?v=SIeoZmBG2ks"
    },
    {
      id:6,
      picture:"https://i.scdn.co/image/ab67616d0000b27322777bafb1bf63160d98dfe0",
      title:"Cold Heart-PNAU Remix",
      artist:"Elthon John, Dua Lipa, PNAU",
      video:"https://www.youtube.com/watch?v=qod03PVTLqk"
    },
    {
      id:7,
      picture:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0cd265130636097.61842df318d10.jpg",
      title:"Enemy",
      artist:"Imagine Dragons",
      video:"https://www.youtube.com/watch?v=D9G1VOjN_84"
    },
    {
      id:8,
      picture:"https://i.scdn.co/image/ab67616d0000b27330ecb91ac7c199e78c1abe9f",
      title:"Quevedo:Bzrp",
      artist:"Bizarrap, Quevedo",
      video:"https://www.youtube.com/watch?v=A_g3lMcWVy0"
    },
    {
      id:9,
      picture:"https://i.scdn.co/image/ab67616d0000b27303a9fed15143b6ae96c8ff90",
      title:"Ojitos Lindos",
      artist:"Bad bunny, Bomba Estereo",
      video:"https://www.youtube.com/watch?v=DmimUfo8UrU"
    },
    {
      id:10,
      picture:"https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/06/Kate-Bush-1.jpg",
      title:"Running Up That Hill",
      artist:"Kate Bush",
      video:"https://www.youtube.com/watch?v=wp43OdtAAkM"
    }
  ]
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='description'>
        <h1 className='desc'>Top Tracks of 2022</h1>
      </div>
      <Songs songs = {songs}/>
    </div>
  );
}

export default App;
