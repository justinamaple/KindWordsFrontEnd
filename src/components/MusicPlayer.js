import React, { Component } from 'react'
import Sound from 'react-sound'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import SummerMP3 from '../assets/music/Summer-JoeHisaishi(kalimba-cover).mp3'
import Headphones from '../assets/images/headphone-512.png'

const START_VOLUME = 50

class MusicPlayer extends Component {
  state = {
    volume: START_VOLUME,
    playStatus: Sound.status.STOPPED
  }

  playSong = () => {
    this.setState({ playStatus: Sound.status.PLAYING })
  }

  handleVolumeChange = volume => {
    this.setState({ volume: volume })
  }

  render() {
    return (
      <div className='musicplayer'>
        <Sound
          url={SummerMP3}
          playStatus={this.state.playStatus}
          onLoad={this.playSong}
          volume={this.state.volume}
          loop={true}
          autoLoad={true}
        />

        <Slider
          defaultValue={START_VOLUME}
          onChange={this.handleVolumeChange}
          trackStyle={{ backgroundColor: '#372427' }}
          handleStyle={{
            borderColor: '#DFCFBD',
            backgroundColor: '#7D5A59'
          }}
          railStyle={{ backgroundColor: '#9B989D' }}
        />
      </div>
    )
  }
}

export default MusicPlayer
