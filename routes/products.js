const express = require("express")
const router = express.Router()

router.get("/index", ((req, res)=>{
    res.send("Aqui iria el listado de productos")
}))

router.get("/detalle/:id", ((req, res)=>{
    
    let productId = req.params.id

    res.send(`detalle del producto ${productId}`)
}))

router.post("/agregar", ((req, res)=> {
    console.log(req.body)
    res.send(req.body)
}))

module.exports = router;
