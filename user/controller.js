const {Users} = require("../models")

module.exports = {
getAll : async (req, res) => {
    try {
        const result = await Users.find({});

        res.status(200).json({pesan: "show data user", data: result
    })
    } catch (error) {
        console.log(error);
        
        };
    
    },
    update : async (req, res) => {
        try {
            const result = await Users.create(req.body);
    
            res.status(200).json({pesan: "show data todos", data: result
        })
        } catch (error) {
            console.log(error);
            
            };
        
        }

}