import './App.css';
import NavBar from './components/NavBar';
import Songs from './components/Songs';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayList from './components/PlayList';
import SongDescription from './components/SongDescription';



function App() {
  const[numberPlayList,setPlayListNumber] = useState(0);
  const[songsInPlayList,setSongsInPlayList] = useState([]);
  const [songs] = useState([
    {
      id:1,
      picture:"https://assets.vogue.com/photos/623b4f0174ede191983e2c76/master/pass/unnamed%20(3).jpg",
      title:"As It Was",
      artist:"Harry Styles",
      video:"https://www.youtube.com/embed/H5v3kku4y6Q",
      audio: "./audio/asItWas.mp3",
      descritpion: "'As It Was' is a song by British singer Harry Styles, released through Erskine and Columbia Records on 1 April 2022 as the lead single from his third studio album, Harry's House (2022). The song was written by Style's alongside the songs producers Kid Harpoon and Tyler Johnson. 'As It Was' received positive reviews from critics and entered at the top of the UK Singles Chart, becoming Style's second number-one single after Sign of the Times in April 2017. 'As It Was' spent ten weeks at the top of the UK Singles Chart, becoming the longest-running number-one and best-selling single of 2022 in his home country. It also became his second number one single in the US, the song spent 15 weeks atop the Billboard Hot 100, becoming the longest-running US number one by a UK act and the fourth-longest-running number one in the charts history. 'As It Was' topped the charts in 35 countries, including Australia, Austria, Belgium, Canada, Croatia, Denmark, France, Germany, Greece, Ireland, Lithuania, the Netherlands, New Zealand, Singapore and Sweden."
      + "\n" + " Harry Styles announced the title of his third studio album as Harry's House on 23 March 2022, unveiling its artwork, a 40-second trailer and the album's release date as 20 May 2022. Five days later, he announced the title of its lead single as 'As It Was', along with pictures of him in a 'sequined, sleeveless red outfit' and its release date as 1 April 2022. Simultaneously, posters bearing the lyrics 'It's not the same as it was' and a picture of Styles sitting on a big ball appeared in various cities. He released a teaser of the music video on 30 March, which included an 'energetic drum beat' and a 'sunny electric guitar riff', and depicted him in a red jumpsuit spinning in circles atop a motorised turntable.",
      amount:0
    },
    {
      id:2,
      picture:"https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png",
      title:"Heat Waves",
      artist:"Glass Animals",
      video:"https://www.youtube.com/embed/mRD0-GxqHVo",
      audio: "./audio/heatWaves.mp3",
      descritpion: "'Heat Waves' is a song by British experimental rock band Glass Animals, released as a single from their third studio album Dreamland on 29 June 2020. A sleeper hit, it is the band's signature song and biggest hit single to date. In addition to reaching number five on the UK Singles Chart and being a top-five hit in several other European countries, it reached number one in Australia, Canada, Lithuania, Switzerland and the United States, where it topped the Billboard Hot 100 for five weeks in early 2022 after a record-breaking 59-week climb to number one. At 91 weeks, it is the longest charting song on the Hot 100 of all time, surpassing 'Blinding Lights' by The Weeknd.[4] By September 2022, the song had accumulated more than two billion streams on Spotify. At the 2022 Brit Awards, 'Heat Waves' was nominated for Best British Single. As of December 2022, Heat Waves is still featured in Spotify's Top 50 Global charts. It is the first song to remain in the top charts even after more than 2 years of its release.",
      amount:0
    },
    {
      id:3,
      picture:"https://i.pinimg.com/564x/4f/d9/94/4fd994c3e084d26f9e5df370a59506b6.jpg",
      title:"STAY(With Justin Bieber)",
      artist:"The Kid LAROI, Justin Bieber",
      video:"https://www.youtube.com/embed/kTJczUoc26U",
      audio: "./audio/stay.mp3",
      descritpion: "'Stay' is a song by Australian rapper and singer the Kid Laroi and Canadian singer Justin Bieber. It was released through Grade A Productions and Columbia Records on 9 July 2021, as the lead single (sixth overall) from Laroi's reloaded mixtape, F*ck Love 3: Over You. Laroi and Bieber wrote the song with Haan, FnZ members Finatik & Zac, and producers Cashmere Cat, Charlie Puth, Omer Fedi, and Blake Slatkin. The song marks the second collaboration between the two artists, following Bieber's song, 'Unstable', a track from his sixth studio album, Justice."
      + "'Stay' peaked at number one on the Billboard Hot 100, becoming Laroi's first chart-topping song and Bieber's eighth. The song additionally topped the Billboard Global 200. Furthermore, it reached number one in 21 other countries, including their respective natives Australia and Canada, along with Germany, the Netherlands, New Zealand, Norway, South Korea, and Sweden. It also peaked within the top ten in 18 other countries. It is the fastest song to reach the milestone of two billion streams on Spotify. At the 2021 ARIA Music Awards, the song won the ARIA Award for Best Pop Release, which resulted in Laroi and Bieber both winning the ARIA Award for Best Artist. At the APRA Music Awards of 2022, the song won the award for Song of the Year.",
      amount:0
    },
    {
      id:4,
      picture:"https://cdns-images.dzcdn.net/images/cover/b29d1070377b784384c2456093f96a66/350x350.jpg",
      title:"Me Porto Bonito",
      artist:"Bad Bunny, Chencho Corleone",
      video:"https://www.youtube.com/embed/saGYMhApaH8",
      audio: "./audio/mePortoBonito.mp3",
      descritpion: "'Stay' is a song by Australian rapper and singer the Kid Laroi and Canadian singer Justin Bieber. It was released through Grade A Productions and Columbia Records on 9 July 2021, as the lead single (sixth overall) from Laroi's reloaded mixtape, F*ck Love 3: Over You. Laroi and Bieber wrote the song with Haan, FnZ members Finatik & Zac, and producers Cashmere Cat, Charlie Puth, Omer Fedi, and Blake Slatkin. The song marks the second collaboration between the two artists, following Bieber's song, 'Unstable', a track from his sixth studio album, Justice."
      + "\n" + "'Stay' peaked at number one on the Billboard Hot 100, becoming Laroi's first chart-topping song and Bieber's eighth. The song additionally topped the Billboard Global 200. Furthermore, it reached number one in 21 other countries, including their respective natives Australia and Canada, along with Germany, the Netherlands, New Zealand, Norway, South Korea, and Sweden. It also peaked within the top ten in 18 other countries. It is the fastest song to reach the milestone of two billion streams on Spotify. At the 2021 ARIA Music Awards, the song won the ARIA Award for Best Pop Release, which resulted in Laroi and Bieber both winning the ARIA Award for Best Artist.[1] At the APRA Music Awards of 2022, the song won the award for Song of the Year.[2]",
      amount:0
    },
    {
      id:5,
      picture:"https://i1.sndcdn.com/artworks-7fc67veDdEbOU2Qz-tRkjOQ-t500x500.jpg",
      title:"Titi Me Pregunto",
      artist:"Bad Bunny",
      video:"https://www.youtube.com/embed/Cr8K88UcO0s",
      audio: "./audio/titiMePregunto.mp3",
      descritpion: "'Tití Me Preguntó' (English: 'Auntie Asked Me') is a song by Puerto Rican rapper Bad Bunny. The song samples 'No Te Puedo Olvidar' by the Dominican musician Anthony 'El Mayimbe' Santos and can be heard throughout the song. It was originally released on May 6, 2022, by Rimas Entertainment as the fourth track of Bad Bunny's fifth studio album Un Verano Sin Ti (2022) before being released on June 1, 2022, as the third single from the album.[1] The song was written by Bunny with MAG handling the production. The genre-fusing shapeshifting song combines elements of dembow, latin trap, psychedelia, and bachata.",
      amount:0
    },
    {
      id:6,
      picture:"https://i.scdn.co/image/ab67616d0000b27322777bafb1bf63160d98dfe0",
      title:"Cold Heart-PNAU Remix",
      artist:"Elthon John, Dua Lipa, PNAU",
      video:"https://www.youtube.com/embed/qod03PVTLqk",
      audio: "./audio/coldHeart.mp3",
      descritpion: "'Cold Heart (Pnau remix)' is a song by English singer Elton John and English-Albanian singer Dua Lipa, produced by Australian trio Pnau, and released through EMI and Mercury Records on 13 August 2021 as the lead single from John's collaborative album, The Lockdown Sessions. The song became John's first United Kingdom No. 1 single in 16 years. It was nominated for Song of the Year at the 42nd Brit Awards. It won Top Dance/Electronic Song at the 2022 Billboard Music Awards. The song was also nominated at the 2022 Ivor Novello Awards for ‘PRS Most Performed Work’.[6]",
      amount:0
    },
    {
      id:7,
      picture:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0cd265130636097.61842df318d10.jpg",
      title:"Enemy",
      artist:"Imagine Dragons",
      video:"https://www.youtube.com/embed/D9G1VOjN_84",
      audio: "./audio/enemy.mp3",
      descritpion: "'Enemy' is a song by American pop rock band Imagine Dragons and American rapper JID. It was released through Interscope Records and Kidinakorner on October 28, 2021, from the soundtrack of the animated streaming television series Arcane. The song was written by the artists alongside Justin Tranter and the producers Mattman & Robin. The song was also included on the band's fifth studio album Mercury-Act 1. The song became JID's first song to reach the top 5 in the US, and became the band's first song to reach the top 5 since the 2017 song 'Thunder'."
      + "'Enemy' was recorded for the animated Netflix series Arcane, which premiered on November 6, 2021. The inspiration behind the song was the video game League of Legends, with the band having previously recorded the song 'Warriors' for the 2014 League of Legends World Championship. On Instagram, JID said 'I wrote this verse a couple years ago but initially the opening lines were from a song I started with Mac [Miller], he told me it would fit better on this song and I’m glad he did.'",
      amount:0
    },
    {
      id:8,
      picture:"https://i.scdn.co/image/ab67616d0000b27330ecb91ac7c199e78c1abe9f",
      title:"Quevedo:Bzrp",
      artist:"Bizarrap, Quevedo",
      video:"https://www.youtube.com/embed/A_g3lMcWVy0",
      audio: './audio/quevedoBzrp.mp3',
      descritpion: "'Quevedo: Bzrp Music Sessions, Vol. 52' (also known as 'Quédate'[a]) is a song by Argentine producer Bizarrap and Spanish rapper Quevedo. It was released on July 6, 2022, through Dale Play Records, with the music video released on Bizarrap's YouTube channel the following day. This is the sixth Bzrp Music Sessions to feature a Spanish artist, and the fourth to feature an artist from the Canary Islands."
      + " The session was first teased during Villano Antillano's Session, in which during the 0:45 second, Residente's cap, which can be seen in the background in Bizarrap's desk, changes from an R to a Q, leading fans to suspect a future session with Quevedo."
      + " The session was officially announced in July 4, 2022 through a promotional video on Bizarrap's Instagram, in which he made a special menu in a Burger King in Madrid, the bags which contained a toy of himself with a part of the chorus of the session, and delivered them himself.",
      amount:0
    },
    {
      id:9,
      picture:"https://i.scdn.co/image/ab67616d0000b27303a9fed15143b6ae96c8ff90",
      title:"Ojitos Lindos",
      artist:"Bad bunny, Bomba Estereo",
      video:"https://www.youtube.com/embed/10EX-_h4pYc",
      audio: "./audio/ojitos.mp3",
      descritpion: "'Ojitos Lindos' (English: 'Pretty Eyes') is a song by Puerto Rican rapper Bad Bunny and Colombian band Bomba Estéreo. It was released on May 6, 2022, by Rimas Entertainment as the fourteenth track of Bad Bunny's fifth studio album Un Verano Sin Ti (2022), alongside the rest of the record.[1] The song was written by Benito Martínez, Liliana Saumet and Simón Mejía, the latter two who are the members of the Colombian band Bomba Estéreo. The song was produced by Tainy, La Paciencia and Mvsis. The song was also used in the EA Sports FIFA 23 soundtrack.",
      amount:0
    },
    {
      id:10,
      picture:"https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/06/Kate-Bush-1.jpg",
      title:"Running Up That Hill",
      artist:"Kate Bush",
      video:"https://www.youtube.com/embed/wp43OdtAAkM",
      audio: "./audio/runningUpThatHill.mp3",
      descritpion: "'Running Up That Hill', titled 'Running Up That Hill (A Deal with God)' on some releases, is a song by the British singer and songwriter Kate Bush. It was released in the United Kingdom as the lead single from Bush's album Hounds of Love on 5 August 1985 by EMI Records. The lyrics imagine a scenario in which a man and a woman make 'a deal with God' to exchange places. Bush wrote and produced 'Running Up That Hill' using a Fairlight CMI synthesiser and a LinnDrum drum machine."
      + " Upon its original release, 'Running Up That Hill' reached number three on the UK Singles Chart and number 30 on the Billboard Hot 100 in the United States, and was Bush's first US Top 40 hit. Bush first performed it live in 1987 at the Secret Policeman's Third Ball, accompanied by Pink Floyd guitarist David Gilmour; she did not perform it again until her 2014 Before the Dawn concerts. Other appearances were promotional lip synced television performances, which were common at the time."
      + " In 2012, a remix of the song featuring newly recorded vocals premiered during that year's Summer Olympics closing ceremony, and entered the UK top 10 for one week, at number six. In 2022, 'Running Up That Hill' received renewed attention when it was featured in the fourth season of the Netflix series Stranger Things. Its appearance led to the song's resurgence on charts around the world, topping the charts in eight countries, including the United Kingdom for three consecutive weeks, Ireland for seven consecutive weeks and Australia for nine non-consecutive weeks. The song also reached a new peak of number three on the Billboard Hot 100.",
      amount:0
    }
  ]);
  function setPlayList(){
    let playList = songs.filter((song)=>song.amount>0);
    setSongsInPlayList(playList);
    console.log(songsInPlayList);
  }

  function addToPlayList(id){
    songs.forEach((song)=>{
      if(song.id === id){
        if(song.amount === 0){
          song.amount++;
          setPlayListNumber(numberPlayList+1);
        }
      }
    });

    setPlayList();
  }

  function removeFromPlayList(id){
    songs.forEach((song)=>{
      if(song.id === id && numberPlayList>0){
        song.amount = 0;
        setPlayListNumber(numberPlayList-1);
      }
    });

    let playList = songsInPlayList.filter((song)=>song.id!==id);
    setSongsInPlayList(playList);
  }

  function searchSongs(title){
    console.log(title)
  }

  return (
    <BrowserRouter className="App">
      <NavBar numberPlayList={numberPlayList}/>
      <Routes>
        <Route 
          path="/"
          element={
            <>
              <div className="search-field">
                <label id="lblSearch" htmlFor="search">Search</label>
                <input id="search" className="search" type="text" placeholder="Search songs" onBlur={searchSongs} />
              </div>
              <div className='description'>
                <h1 className='desc'>Top Tracks of 2022</h1>
              </div>
              <Songs songs={songs} addToPlayList={addToPlayList} />
            </>
          }
        />
        <Route path="/playlist" element={<PlayList songsInPlayList={songsInPlayList} removeFromPlayList={removeFromPlayList}/>}/>
        <Route path="/songDesc" element={<SongDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
