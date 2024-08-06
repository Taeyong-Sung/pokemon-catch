import { Pokemon } from '../models/pokemon.js'

async function index(req, res) {
    try {
        const pokemons = await Pokemon.find({})
        res.render('pokemons/index', {
            pokemons
        })
        
        
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
}

async function newPokemon(req,res){
    res.render('pokemons/new')
}

async function create(req,res){
    try {
        req.body.caught = false
        await Pokemon.create(req.body)
        res.redirect('/pokemons')
    } catch (error) {
        console.log(error);
        res.redirect('/pokemons')
    }
}

export{
    index,
    newPokemon as new,
    create,
}