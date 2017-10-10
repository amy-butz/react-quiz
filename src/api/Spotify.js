import React from 'react';
import PropTypes from 'prop-types';
import SpotifyWebApi from 'spotify-web-api-node';

var spotifyApi = new SpotifyWebApi();

spotifyApi.getArtistRelatedArtists('0qeei9KQnptjwb8MgkqEoy')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });