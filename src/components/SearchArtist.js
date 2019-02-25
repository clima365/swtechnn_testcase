import React, { Component } from "react";
import { Icon, Button, Input, AutoComplete } from "antd";
import { connect } from "react-redux";
import { getArtists, selectCurrentArtist } from "../actions";

const Option = AutoComplete.Option;

class SearchArtist extends Component {
  handleSelect = e => {
    const { selectCurrentArtist } = this.props;
    selectCurrentArtist(e);
  };

  handleChange = e => {
    const { getArtists } = this.props;
    getArtists(e);
  };

  render() {
    const { data } = this.props.artistsList;
    // console.log(data);

    const renderItem = item => (
      <Option key={item.artistId}>{item.artistName}</Option>
    );
    return (
      <AutoComplete
        size="large"
        style={{ width: "100%" }}
        dataSource={data.map(renderItem)}
        onSelect={this.handleSelect}
        onChange={this.handleChange}
        placeholder="Input artists name"
      >
        <Input />
      </AutoComplete>
    );
  }
}

const mapStateToProps = state => ({
  artistsList: state.artistsList
});

const mapDispatchToProps = dispatch => ({
  getArtists: value => dispatch(getArtists(value)),
  selectCurrentArtist: value => dispatch(selectCurrentArtist(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchArtist);
