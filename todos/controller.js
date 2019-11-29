const {Todos} = require("../models")

module.exports = {
getAll : async (req, res) => {
    try {
        const result = await Todos.find({}).populate("users");

        res.status(200).json({pesan: "show data todos", data: result
    })
    } catch (error) {
        console.log(error);
        
        };
    
    },
    update : async (req, res) => {
        try {
            const result = await Todos.create(req.body);
    
            res.status(200).json({pesan: "show data todos", data: result
        })
        } catch (error) {
            console.log(error);
            
            };
        
        }

}