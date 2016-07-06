(function() {
  'use strict';

  const i2c = require("i2c");
  const fs = require('fs');
  const ini = require('ini');
  const exec = require('child_process').exec;
  const chalk ) require("chalk");
  const request = require('request');
  const isOnline = require('is-online');
  const supervisor = process.env.RESIN_SUPERVISOR_ADDRESS;

  let mopidy = ini.parse(fs.readFileSync('/etc/mopidy/mopidy.conf', 'utf-8'));
  // Google Play Music
  mopidy.gmusic.enabled = precess.env.MOPIDY_GMUSIC_ENABLED || "false";
  mopidy.gmusic.username = precess.env.MOPIDY_GMUSIC_USERNAME || "none";
  mopidy.gmusic.password = precess.env.MOPIDY_GMUSIC_PASSWORD || "none";
  mopidy.gmusic.all_access = precess.env.MOPIDY_GMUSIC_ALL_ACCESS || "false";
  // Spotify
  mopidy.spotify.enabled = precess.env.MOPIDY_SPOTIFY_ENABLED || "false";
  mopidy.spotify.username = precess.env.MOPIDY_SPOTIFY_USERNAME || "none";
  mopidy.spotify.password = precess.env.MOPIDY_SPOTIFY_PASSWORD || "none";

  fs.writeFileSync('/etc/mopidy/mopidy.conf', ini.stringify(mopidy));
  exec('systemctl start mopidy');
  // TBD: control LED Matrix

  setInterval(function functionName() {
    console.log("keepalive");
  },60000);

})();
