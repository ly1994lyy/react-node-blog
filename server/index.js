const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

app.use("/uploads",express.static(__dirname+"/uploads"))

app.set('userKey','sdfsgdfgfdhdhretetIKJK78%^$#LKLLsdasdada')
app.set('adminKey','asdklaskdlaskdlkalsdak')

require('./routes/admin')(app)
require('./routes/web')(app)
require('./mongodb')(app)

app.listen(4000,()=>{
    console.log("http://localhost:4000")
})
