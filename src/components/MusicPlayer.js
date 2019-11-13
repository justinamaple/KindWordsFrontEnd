import React, { Component } from 'react'
import Sound from 'react-sound'
import SummerMP3 from '../assets/music/Summer-JoeHisaishi(kalimba-cover).mp3'

const MP3_URL = 'static/media/Summer-JoeHisaishi(kalimba-cover).ed14dea9.mp3'

class MusicPlayer extends Component {
  handleSongLoading = () => {}

  handleSongPlaying = () => {}

  handleSongFinishedPlaying = () => {}

  render() {
    return (
      <Sound
        url={MP3_URL}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
        loop={true}
        volume={50}
      />
    )
  }
}

export default MusicPlayer
