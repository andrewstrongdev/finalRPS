// const { request } = require("express")

const hallOfFame = ['Jebby', 'Jacob', 'Mckay', 'Shrek', 'Kyle', 'Jimmy Neutron', 'Kiyaaaul']
let winBool = 0


module.exports = {
    getHall: (req, res) => {
        console.log('hit server')
        res.status(200).send(hallOfFame)
    },
    postHall: (req, res) => {
        console.log(req.body)
        hallOfFame.push(req.body.name)
        res.status(200).send(hallOfFame)
        
    },

    getWinCondition: (req, res) => {
        if(winBool === 1){
            res.sendStatus(200)
            
        } else if(winBool === 0 ){
            res.sendStatus(500)
        }

        res.sendStatus(200).send(asdf)
    },

    changeWinCondition: (req, res) => {
        if(winBool === 1){
            winBool = 0
            res.sendStatus(500)
            
        } else if(winBool === 0 ){
            winBool = 1
            res.sendStatus(200)
        }

        
    }
}