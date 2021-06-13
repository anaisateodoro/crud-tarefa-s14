const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const criaTitulo = async(req, res) => {
    const titulo = new Titulo({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero:req.body.genero,
        descricao:req.body.descricao,
        estudio:req.body.estudio
    })

    //regra que nao permite criar um titulo que ja existe
    const tituloJaExiste = await Titulo.findOne({nome: req.body.nome})
    if(tituloJaExiste) {
        return res.status(409).json({error: "Titulo já cadastrado!"})
    }
    
    try {
        const novoTitulo = await titulo.save()
        return res.status(201).json(novoTitulo)
    }catch (err) {
        return res.status(400).json({message: error.message})
    }
}

const mostraTitulos = async (req, res)=> {
    const titulos = await Titulo.find().populate('estudio')
    return res.status(200).json(titulos)
}

const mostraTitulosMarvel = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Marvel")

    return res.status(200).json(titulosFiltrado)
}

//regra que filtra todos os títulos Ghibli
const mostraTitulosGhibli = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")

    return res.status(200).json(titulosFiltrado)
}


//regra que filtra todos os títulos Pixar
const mostraTitulosPixar = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Pixar")

    return res.status(200).json(titulosFiltrado)
}

//Altera informação específica dentro de um estudio por id específico e retorna o título alterado
const atualizaEstudio = (req, res)=>{
    const idRequerido = request.params.id
    let atualizaEstudio = request.body
    const estudioFiltrado = estudiosJson.find(estudio=>estudio.id ==idRequerido)
    const indice = estudiosJson.indexOF(estudioFiltrado)

    console.log(estudioFiltrado)
    atualizaEstudio
estudiosJson.splice(indice,1,atualizaEstudio)

    response.status(200).json([{
        "mensagem" : "Estudio atualizado com sucesso!",
        atualizaEstudio
    }])
}
//Deverá deletar estudio por id específico
const deletaEstudio = (req, res) =>{
    const idRequerido = request.params.id
    const estudioFiltrado = estudiosJson.find(estudio=>estudio.id==idRequerido)

    const indice = estudiosJson.indexOF(estudioFiltrado)
    estudiosJson.splice(indice,1, atualizaEstudio)
 
    response.status(200).json([{
        "mensagem": "Estúdio deletado",
        estudiosJson
    }])
    
}

module.exports = { 
    criaTitulo,
    mostraTitulos,
    mostraTitulosMarvel,
    mostraTitulosGhibli,
    mostraTitulosPixar,
    atualizaEstudio,
    deletaEstudio
}