const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  desc: String,
  SKU: String,
  category_id: { type: Schema.Types.ObjectId, ref: 'ProductCategory' },
  inventory_id: { type: Schema.Types.ObjectId, ref: 'ProductInventory' },
  price: Number,
  discount_id: { type: Schema.Types.ObjectId, ref: 'Discount' },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});


const productCategorySchema = new Schema({
    name: String,
    desc: String,
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});


const productInventorySchema = new Schema({
    quantity: Number,
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});



const discountSchema = new Schema({
    name: String,
    desc: String,
    discount_percent: Number,
    active: Boolean,
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: Date
});



const Product = mongoose.model('Product', productSchema);
const Discount = mongoose.model('Discount', discountSchema);
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);


module.exports = Product;
module.exports = ProductCategory;
module.exports = ProductInventory;
module.exports = Discount;
