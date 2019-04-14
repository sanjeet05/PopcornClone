import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import YouTube from 'react-youtube';


export default class VideoPlayer extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render () {

    const opts = {
      height: window.outerHeight,
      width: window.outerWidth,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
  
    return (
      <YouTube
        videoId={this.props.match.params.trailer}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}