const express = require('express');
const router = express.Router();
// Créer une instance de categorie.
const scategorie = require('../models/scategorie');

// afficher la liste des scategories.
router.get('/', async (req, res, )=> {
try {
    const scat=await scategorie.find()
    return res.status(200).json(scat)
} catch (error) {
    res.status(404).json({ message: error.message }); 
}

});

router.post('/',async (req, res) => {
  
    const newScategorie = new scategorie(req.body)
    try {
    await newScategorie.save();
    res.status(200).json(newScategorie );
    } catch (error) {
    res.status(404).json({ message: error.message });
    
    }
    });
    //-------
    router.get('/:scategorieId',async(req, res)=>{
        try {
        const scat = await scategorie.findById(req.params.scategorieId);
        res.status(200).json(scat);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        });
//------------
router.delete('/:scategorieId', async (req, res)=> {
    const id = req.params.scategorieId;
    await scategorie.findByIdAndDelete(id);
    res.json({ message: "scategorie deleted successfully." });
    });
    //--------------------
    router.put('/:scategorieId', async (req, res)=> {
        try {
        const scat1 = await scategorie.findByIdAndUpdate(
        req.params.scategorieId,
        { $set: req.body },
        { new: true }
        );
        res.status(200).json(scat1);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        });
        


module.exports=router