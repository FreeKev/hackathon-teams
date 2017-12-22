var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});

// router.put('/teams/:name', function(req, res) {
//   teamService.teamEdit(req.params.name);

//   res.send({message: 'success'});
// });

router.delete('/:name', function(req, res) {
  teamService.deleteTeam(req.params.name);
  res.send({message: 'success'});
  // console.log('name:', req.params.name);
  // res.send('Delete route up');
});

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/edit/:name', function(req, res) {
  console.log('gettin the edit?');
  var team = teamService.getTeam(req.params.name);
  res.render('teams/edit', { team: team });
  // res.send({message: 'success'});
  // res.send('edit form');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

router.put('/:name', function(req, res){
  teamService.editTeam(req.params.name, req.body);
  console.log('name:', req.params.name);
  console.log('req.body is', req.body);
  res.send('PUT router up!');
});

// router.delete('/:name', function(req, res){
//   res.send('Delete route up');
// });

module.exports = router;
