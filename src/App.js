import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Input } from "antd";
import { Header, SearchArtist, SelectAlbum, SongCard } from "./components";

const Layout = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 960px;
  max-width: 100%;
  margin: 0 auto;
`;

const InputBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 24px;
  justify-content: center;
`;

const Text = styled.h3`
  text-align: center;
  margin: 32px 0;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  padding: 32px 0;
`;

class App extends Component {
  state = {
    filter: ""
  };

  componentDidMount() {
    const { currentAlbum, currentArtist } = this.props;
    this.setState({
      currentAlbum,
      currentArtist
    });
  }

  componentDidUpdate() {
    if (
      this.props.currentAlbum !== this.state.currentAlbum ||
      this.props.currentArtist !== this.state.currentArtist
    ) {
      const { currentAlbum, currentArtist } = this.props;
      this.setState({
        currentAlbum,
        currentArtist,
        filter: ""
      });
    }
  }

  handleChangeFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  render() {
    const { currentArtist, currentAlbum } = this.props;
    const { filter } = this.state;

    const itemsToShow =
      currentAlbum && currentAlbum.data.length > 0
        ? currentAlbum.data
        : currentArtist.songs;

    const filteredItems = itemsToShow.filter(
      item =>
        item.trackName.slice(0, filter.length).toLowerCase() ===
        filter.toLowerCase()
    );

    const renderList = filteredItems.map((item, i) => (
      <SongCard key={i} song={item} />
    ));

    return (
      <Layout>
        <Content>
          <Header />
          <InputBar>
            <SearchArtist />
            <SelectAlbum />
            <Input
              size="large"
              onChange={this.handleChangeFilter}
              value={filter}
              placeholder="Enter song's name"
              disabled={itemsToShow.length > 0 ? false : true}
            />
          </InputBar>
          {itemsToShow.length === 0 ? (
            <Text>Please, input artist name ;)</Text>
          ) : (
            <CardsContainer>{renderList}</CardsContainer>
          )}
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  currentArtist: state.currentArtist,
  currentAlbum: state.currentAlbum
});

export default connect(
  mapStateToProps,
  null
)(App);
