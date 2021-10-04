const express = require('express');
const knex = require('../db/client');
const router = express.Router();
const teamMethod = require('../public/JS/shuffle')



router.get('/', (req, res) => {
  knex("cohorts")
  .orderBy('createdAt', 'desc')
  .then(data => {
    console.log(data);
    res.render('cohorts/index', {list:data})
  })
})

router.post('/', (req, res) => {
  knex("cohorts")
  .insert({
    name: req.body.name,
    member: req.body.member,
    logoUrl: req.body.logoUrl
  })
  .returning('*')
  .then(data => {
    res.redirect(`/cohorts/${data[0].id}`)
  })
})

router.get('/new', (req, res) => {
    res.render('cohorts/new')
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  let teams = []
  knex("cohorts")
  .where("id", id)
  .first()
  .then(data => {
    let checkTeam = null
    let checkQuantity = null
    if (req.query.quantity) {
      let names = data.member.split(',')
      let quantity = parseInt(req.query.quantity)
      console.log(names, quantity);
      console.log(req.query);
      if(req.query.radioButton == "teamCount"){
        checkTeam = "checked"
        teams = teamMethod.teamCount(quantity, names)
      }
      if(req.query.radioButton == "numPerTeam"){
        checkQuantity = "checked"
        teams = teamMethod.numPerTeam(quantity, names)
      }
      console.log(teams)  
    }
      res.render('cohorts/show', {list:data, teams:teams, checkTeam:checkTeam, checkQuantity:checkQuantity})
  })


})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  knex("cohorts")
  .where("id", id)
  .del()
  .then(data => {
    res.redirect('/cohorts')
  })
})

router.get('/:id/edit', (req, res) => {
  knex("cohorts")
  .where("id", req.params.id)
  .first()
  .then(data => {
    res.render('cohorts/edit', {list: data})
  })
})

router.patch('/:id', (req, res) => {
  knex("cohorts")
  .where("id", req.params.id)
  .update({
    name: req.body.name,
    member: req.body.member,
    logoUrl: req.body.logoUrl
  })
  .then(data => {
    res.redirect(`/cohorts/${req.params.id}`)
  })
})




  // res.render('cohorts/show')
  // knex("cohorts")
  // .where("id", req.params.id)







module.exports = router;