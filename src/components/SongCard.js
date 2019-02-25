import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "antd";

const Card = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 8px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 100px 1fr;
`;

const LeftSide = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  img {
    width: 100px;
    height: 100px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s linear;
  opacity: ${props => (props.active ? "1" : "0")};

  :hover {
    opacity: 1;
  }

  svg {
    width: 44px;
    height: 44px;
    fill: white;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 14px;
    margin: 0;
    border-bottom: 1px solid lightgray;

    :last-child {
      border-bottom: 0;
    }
  }
`;

class SongCard extends Component {
  state = {
    isSongPlaying: false
  };

  componentDidMount() {
    const { song } = this.props;
    const element = document.getElementById(song.trackId);

    element.onended = () => this.handlePauseSong();
  }

  handlePlaySong = () => {
    const { song } = this.props;
    const element = document.getElementById(song.trackId);

    element.play();
    this.setState({ isSongPlaying: true });
  };

  handlePauseSong = () => {
    const { song } = this.props;
    const element = document.getElementById(song.trackId);

    element.pause();
    this.setState({ isSongPlaying: false });
  };

  render() {
    const { song } = this.props;
    const { isSongPlaying } = this.state;

    const { trackTimeMillis } = song;

    const min = Math.floor((trackTimeMillis / 1000 / 60) << 0);
    const sec = Math.floor((trackTimeMillis / 1000) % 60);

    const time = `${min}:${sec > 9 ? sec : "0" + sec}`;

    return (
      <Card>
        <LeftSide>
          <img src={song.artworkUrl100} alt="artwork" />
          <ButtonContainer active={isSongPlaying}>
            <Icon
              type={isSongPlaying ? "pause-circle" : "play-circle"}
              onClick={
                isSongPlaying ? this.handlePauseSong : this.handlePlaySong
              }
            />
          </ButtonContainer>
          <audio id={song.trackId} src={song.previewUrl} />
        </LeftSide>
        <RightSide>
          <p>{song.trackName}</p>
          <p>{song.collectionName}</p>
          <p>{time}</p>
        </RightSide>
      </Card>
    );
  }
}

export default SongCard;
