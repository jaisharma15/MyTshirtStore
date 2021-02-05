const Category = require("../models/category");

exports.createCategory = (req,res) => {
    const category = new Category(req.body);
    category.save((err,category) => {
        if(err)
        {
            return res.status(400).json({
                error:"NOT able to save category"
            });
        }
        res.json({category});
    })
}
exports.getCategoryById = (req,res,next,id) => {
    Category.findById(id).exec((err,cate)=> {
        if(err)
        {
            return res.status(400).json({
                error:"Category not found in db"
            });
        }
        req.category = cate;
        next();
    });
    
};

exports.getCategory = (req,res) =>{
    return res.json(req.category);
};
exports.getAllCategory = (req,res) =>{
    Category.find().exec((err,item)=>{
        if(err)
        {
            return res.status(400).json({
                error:"No categories found"
            })
        }
        res.json(item);
    })
}

exports.updateCategory = (req,res) =>{
    const category = req.category;
    category.name = req.body.name;
    category.save((err,updatedCategory) =>
    {
        if(err)
        {
            return res.status(400).json({
                error:"No categories found"
            })
        }
        res.json(updatedCategory);
    })
}

exports.removeCategory = (req,res) => {
    const category = req.category;
    category.remove ((err,category)=> {
        if(err)
        {
            return res.status(400).json({
                error:"Failed to delete this category"
            })
        }
        res.json({
            message: " Sucessfuly deleted"
        })
    })
}