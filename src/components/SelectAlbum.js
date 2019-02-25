import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Select } from "antd";
import { selectCurrentAlbum } from "../actions";

const Option = Select.Option;

class SelectAlbum extends Component {
  state = {
    value: "",
    albums: []
  };

  componentDidMount() {
    const { albums } = this.props;
    this.setState({
      albums
    });
  }

  componentDidUpdate() {
    if (this.props.albums !== this.state.albums) {
      this.setState({
        albums: this.props.albums,
        value: ""
      });
    }
  }

  handleChange = e => {
    this.setState({
      value: e
    });
    const { selectCurrentAlbum } = this.props;
    selectCurrentAlbum(e);
  };

  render() {
    const { albums } = this.props;
    const { value } = this.state;
    return (
      <Select
        size="large"
        defaultValue=""
        value={value}
        style={{ width: "100%" }}
        onChange={this.handleChange}
      >
        <Option value="">All albums</Option>
        {albums.map(item => (
          <Option key={item.collectionId} value={item.collectionId}>
            {item.collectionName}
          </Option>
        ))}
      </Select>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.currentArtist.albums
});

const mapDispatchToProps = dispatch => ({
  selectCurrentAlbum: value => dispatch(selectCurrentAlbum(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAlbum);
