import React from "react";
import YouTube from "react-youtube";
import styles from "./youtube.module.css";

export default class YouTubeVid extends React.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <>
        <YouTube
          className={styles.youtube}
          videoId="-WFts196tZk"
          opts={opts}
          onReady={this._onReady}
        />
      </>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
