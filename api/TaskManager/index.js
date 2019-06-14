const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const auth = require('../auth');
const Category = require('../models/category');
const Product = require ('../models/product');
const Cart = require('../models/cart');
const CartProduct = require('../models/cartproduct');
const faker = require('faker');
const ASYNC = require('async');
const SignUp = (req,res) =>{
   const data = req.body
 
   console.log(data)
    res.json({ WELCOME :'WELCOME TO OUR FASTSHOPING ,,,SHOP SMART'})
}
const register= async(req,res) =>{
    const user = new User();
    const {email, password, firstname, lastname }= req.body;
    user.profile.firstname=firstname;
    user.profile.lastname=lastname;
    user.email=email;
    user.password=password;
   
    try{
        const findUser = await User.findOne({email})
        console.log(findUser)
        console.log(email)
    if(findUser){
        console.log(`${req.body.email} is already exist in the database`);
       return res.json({isNewUser : false});
    }else{

        user.save(function(err, user){
            if(err) return(err);
            return res.json({isNewUser : true});
        });
    }
   }catch (error){
      console.log(error)
   }
    
    }
    
    const SignIn =async (req,res, done) =>{
        const {email, password} =  req.body
        console.log(email, password)
        try{
            const findUser = await User.findOne({email})
            if(!findUser){
                return res.json(' Not found') 
            }else{
                console.log(findUser)
                const isValidPassWord = await findUser.comparePassword(password)
               if(isValidPassWord){
                   const token = auth.initiateToken(findUser._id);
                  // LocalStorage.setItem('access_token', token)
                   //console.log( LocalStorage.setItem('access_token', token))
                   //window.localStorage.setItem('access_token', token)
                return res.json({Welcome : `${findUser.profile.name} , where glad to have you here!`,token}) 
               }
               return res.json(`Wrong Password: ${findUser.profile.name}`)  
            }
           
                }catch(error){
                    return done(error)
                }
    }
    const SignIn2 = async (req,res, done) =>{
        const {email, password} = await req.body
       //res.send({email, password})
        try{
    const findUser = await User.findOne({email})
   
    if(!findUser){
        return res.json(' Not found') 
    }else{

        const isValidPassWord = await findUser.comparePassword(password)
       if(isValidPassWord){
           const token = auth.initiateToken(findUser._id);
           this.localStorage.setItem('access_token', token)
        return res.json({Welcome : `${findUser.profile.name} , where glad to have you here!`,token}) 
       }
       return res.json(`Wrong Password: ${findUser.profile.name}`)  
    }
   
        }catch(error){
            return done(error)
        }
    }
    ;

const AddCategory = async(req,res,next)=>{
    const name = await req.body.name;
    console.log(name)
    try{
        if(name){
            const category = new Category;
            category.name = name
            category.save( function(err){
                if(err) return next(err);
                return res.json('SUCCEFULLY ADDED A CATEGORY')
            })
        }

    }catch(err){
        return next(err)
    }
}

const GetCategory = async(req,res,next)=>{
   const category = await Category.find()

    try{
        if(category.length!==0){
                return res.json(category)
            }{
                return res.json('Oops not category found, add a category')  
            }
        }catch(err){
        return next(err)
    }
}

const CreateProductbyCategoryName = async(req,res, next)=>{
          const category = await Category.findOne({name :req.body.name});
                if( !category) return res.json('Not found');
            for(let i=0; i<10; i++){
                var product = new Product();
                product.category= category._id;
                product.name = faker.commerce.productName();
                product.price =faker.commerce.price();
                product.image = faker.image.imageUrl();
                product.description= faker.lorem.paragraph()
                product.save()
            }
       
    res.json({message :`Successfuly created products for ${req.body.name}`})
        }

        const GetAllProducts = async(req,res, next)=>{
            const Products = await Product.find();
                  if( !Products) return res.json('Not Products found');
      res.json(Products)
          }

          const GetProduct = async(req,res, next)=>{
              const {_id}= req.params
             console.log(_id)
              const findProduct= await Product.findOne({_id :req.params._id});
              console.log(findProduct)
              if(findProduct){
                res.json( findProduct)
              }else{
                  res.json('Error')
              }
              
           /* const Products = await Product.findOne({_id});
                  if( !Product) return res.json('Not Products found');
      res.json(Product)*/
          }

          const GetAllProductsbyCategory = async(req,res, next)=>{
              console.log(req.params)
            const category = await Category.findOne({name :req.params.category});
            console.log(category)
            if(category){
                const catId= category._id
                console.log(catId)
                //const Products = await Product.find( { category: { $eq: `${catId}`} } );
               // const Products = await Product.find( { category:'5cfa58254a64b845741a1ed7'} );
               const Products = await Product.find( { category:catId} );
                //const Products = await Product.aggregate(
                  //  [ { $match : { price : '97' } } ]
                //);;
                console.log(Products)
              //  if( !Products) return res.json({isAddedProduct:'false'}); 
                return res.json({Products})
    res.json({Products})
        }
        return res.json('Not Category found')
            }

            const createUserCart = async(req,res)=>{
                const cart = new Cart();
                const cartproduct = new CartProduct()
                const user_id =  await req.params.user_id;
                const product_id =  await req.body.product_id;
                const quantity =await req.body.quantity;
 
                const usercart = await CartProduct.findOne({ user_id});
                const productcart = await CartProduct.findOne( {product_id:req.body.product_id} );
               // res.json({usercart,productcart})
                
                if(productcart===null&&usercart.length!==null){
                    cartproduct.user_id=user_id;
                    cartproduct.product_id=req.body.product_id;
                    cartproduct.product_price=req.body.product_price;
                    cartproduct.product_name=req.body.product_name;
                    cartproduct.quantity=req.body.quantity||1;
                    cartproduct.save()
                    res.json({saved :cartproduct})
                }else{
                    productcart.quantity=req.body.quantity
                    productcart.save()
                    res.json({Updated :productcart})
                }
              
                   
            }

            const getCart = async(req,res)=>{
                const findcart = await CartProduct.find();
                res.json(findcart) 
              
                   
            }
            
const Hello = async(req,res) =>{
   
    res.json({ WELCOME :'WELCOME TO OUR FASTSHOPING ,,,SHOP SMART'})
}
    module.exports = {
        SignUp ,
        Hello,
        SignIn,
        register,
        AddCategory,
        GetCategory ,
        CreateProductbyCategoryName,
        GetAllProducts,
        GetAllProductsbyCategory ,
        GetProduct,
        createUserCart,
        getCart
    }
