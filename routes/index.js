
module.exports= function(app){
	
 app.get('/', function (req, res) {
	 
  res.render('index', {
	  
    title: '首頁',
    
	
	
  });
});
app.post('/', function (req, res) {
 
    
    console.log(req.body);
    req.session.form = req.body; 
    res.redirect('/result');
  });

	app.get('/result', function (req, res) {
	  
  res.render('result', {
	 delive:req.session.form.delive,
	 name:req.session.form.name,
	 phone:req.session.form.phone,
	 address:req.session.form.address,
	 content:req.session.form.content,
    title: '結果'
    
	
	
  });
});
	
	
	
	
	
}