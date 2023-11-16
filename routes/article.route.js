const express = require('express');
const router = express.Router();
// Créer une instance de article.
const article = require('../models/article');

// afficher la liste des articles.
router.get('/', async (req, res, )=> {
try {
    const art=await article.find().populate("scategorieID")
     res.status(200).json(art)
} catch (error) {
    res.status(404).json({ message: error.message }); 
}

});
//--------------------------------------------------------------------------------------------------------
router.post('/',async (req, res) => {
  
    const newArticle = new article(req.body)
    try {
    await newArticle.save();
    res.status(200).json(newArticle);
    } catch (error) {
    res.status(404).json({ message: error.message });
    
    }
    });
    //-------
    router.get('/:articleId',async(req, res)=>{
        try {
        const art = await article.findById(req.params.articleId);
        res.status(200).json(art).populate("scategorieID");
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        });
//------------
router.delete('/:articleId', async (req, res)=> {
    const id = req.params.articleId;
    await article.findByIdAndDelete(id);
    res.json({ message: "article deleted successfully." });
    });
    //--------------------
    router.put('/:articleId', async (req, res)=> {
        try {
        const art = await article.findByIdAndUpdate(
        req.params.articleId,
        { $set: req.body },
        { new: true }
        );
        res.status(200).json(art);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        });
        
    
module.exports=router