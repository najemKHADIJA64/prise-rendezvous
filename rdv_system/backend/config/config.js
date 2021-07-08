exports.db = (package) =>{
    package.connect(process.env.DB_CON,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(()=>console.log('====> DATABASE CONNECTED'))
    .catch(()=>console.log('Error connection with database'))
}

exports.dateFormat = () =>{
    const d = new Date();
    let month = d.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    let day = d.getDate();
    if (day < 10) day = `0${day}`;
    const dt = `${d.getFullYear()}-${month}-${day}`;  
    
}