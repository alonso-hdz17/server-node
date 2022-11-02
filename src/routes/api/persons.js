import { Router } from 'express'

import {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} from '../../models/persons'

const router = Router()

router.get('/', (req, res) => {
  const persons = getPersons()
  res.send(persons)
})

router.get('/:id', (req, res) => {
  const person = getPerson(req.params.id)
  if (person) {
    res.send(person)
  }
  res.status(404).send({ msg: 'Person not Found' })
})

router.post('/', (req, res) => {
  const newPerson = createPerson(req.body)
  if (newPerson) {
    res.status(201).send(newPerson)
  }
  res.status(400).send({ msg: 'Bad Request' })
})

router.put('/:id', (req, res) => {
  const updatedPerson = updatePerson(req.params.id, req.body)
  if (updatedPerson) {
    res.send(updatedPerson)
  }
  res.status(404).send({ msg: 'Person not Found' })
})

router.delete('/:id', (req, res) => {
  const deleted = deletePerson(req.params.id)
  if (deleted) {
    res.send({ msg: `Person ${req.params.id} deleted.` })
  }
  res.status(404).send({ msg: 'Person not Found' })
})

export default router
