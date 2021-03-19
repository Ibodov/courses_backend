expressPackage = require('express'); //Создаем ссылку на модуль
webModule = expressPackage(); // Создаём новый экземпляр данного модуля 
webModule.get('test',(req,res)=>{
    res.send('hel dasdsa')
})
webModule.listen(80);