const slugify = require("slugify");
const CategoryModel = require("../models/category");

function createCategory(categories, parentId = null) {
  const categoryItem = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (const cate of category) {
    categoryItem.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      childern: createCategory(categories, cate._id),
    });
  }
  return categoryItem;
}

exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
    // parentId: req.body.parentId
  };

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  if (req.file) {
    categoryObj.categoryImage =
      process.env.API + "/public/" + req.file.filename;
  }

  const cat = new CategoryModel(categoryObj);

  cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) {
      return res.status(200).json({ category });
    }
  });
};

// exports.getCategory = (req,res)=>{
//     CategoryModel.find({}).exec((error,categories)=>{
//         if(error) return res.status(400).json({error})
//         if(categories){
//             return res.status(200).json({categories})
//         }
//     })
// }

exports.getCategory = (req, res) => {
  CategoryModel.find({}).exec((error, categories) => {
    if (error) return res.status(400).json({ error });
    if (categories) {
      const categoryList = createCategory(categories);
      return res.status(200).json({ categoryList });
    }
  });
};
