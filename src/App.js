import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://player.vimeo.com/external/636879728.sd.mp4?s=f33762ce1d0a93c5256f818f5c7e783eadf6785b&profile_id=165& =57447761"
          channel="HarmanDeep"
          description="Good vibes"
          song="Perfect"
          likes={7568}
          messages={7867}
          shares={876}
        />
        <Video
          url="https://player.vimeo.com/external/527798425.sd.mp4?s=fde68331a7cf821a442cb0ceb5e7bca243418813&profile_id=165&oauth2_token_id=57447761"
          channel="Harmeenkr"
          description="Buggs Bunny"
          song="Cheap Thrills"
          likes={878}
          messages={657}
          shares={436}
        />
      </div>

      {/* {app container} */}
      {/* {videos} */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
