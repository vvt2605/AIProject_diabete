const { spawn } = require('child_process');

class HomeController {
    home(req, res, next) {
        res.render('home');
    }

    homeResult(req, res, next) {
        // const pregnancy = 0
        const pregnancy = req.body.pregnancy
        const glucozo = req.body.glucozo
       const height = req.body.height
       const weight = req.body.weight
        const insulin = req.body.insulin
        const blood = req.body.bloodPressure
        
        const bmi = 10000*weight/(height*height)
        const age = req.body.age
       
        var spawn = require('child_process').spawn;

        var process = spawn('python', [
            'src/predict_diabete.py',pregnancy,glucozo,bmi,age,insulin,blood,
          ]);
        process.stdout.on('data', function(data){
            var x = data.toString()
            var result = x.substr(105,106)
            var result2 = result.substr(0,5)
            const  num = Number(result.substr(0,5))

            var Rresult = num > 50   

            res.render('result',{result2,pregnancy,glucozo,height,weight,age,Rresult,insulin,blood})         
        })
    }
}

module.exports = new HomeController();
