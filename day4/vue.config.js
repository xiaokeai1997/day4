const data =require('./public/mock/data.json')
module.exports={
  lintOnSave:false,
  devServer:{
    before:function(app){
      app.get('/api/data',(req,res)=>{
        res.json({
          data:data
        })
      })
      app.get('/api/mo',(req,res)=>{
        const {inputValue}=req.query
        const name=data.filter(item=>{
          return item.name==inputValue
        })
      })
    }
  }
}