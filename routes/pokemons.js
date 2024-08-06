import { Router } from 'express'
import * as pokemonsCtrl from '../controllers/pokemons.js'

const router = Router()

// GET localhost:3000/pokemons
router.get('/', pokemonsCtrl.index)
router.get('/new', pokemonsCtrl.new)
router.post('/', pokemonsCtrl.create)

export { router }
