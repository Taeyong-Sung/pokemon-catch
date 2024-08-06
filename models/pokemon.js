import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pokemonSchema = new Schema({
  text: String,
  caught: Boolean,
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

export {
  Pokemon
}