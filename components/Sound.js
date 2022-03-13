import React, { Component } from "react";

// Import your audio file
// import song from "./assets/audio/anti_entity.mp3";

class Sound extends Component {
  // Create state
  state = {
    // Get audio file in a variable
    // audio: new Audio("./assets/audio/anti_entity.mp3"),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
    //   this.state.audio.pause();
    } else {

      // Play the song if it is paused
    //   this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div>
        {/* Show state of song on website */}
        {/* <p>
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p> */}

        {/* Button to call our main function */}
        {/* <audio controls autoplay src="./assets/audio/anti_entity.mp3" /> */}
        {/* <button className="btn dark rounded" style={{color: "#fff"}} onClick={this.playPause}>
        {this.state.isPlaying ? <MDBIcon icon="play"/> : <MDBIcon icon="pause" />} Play | Pause
        </button> */}
      </div>
    );
  }
}

export default Sound;