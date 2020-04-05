const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.get('/api/customers',(req,res)=> {
    res.send(
        [
            {
              'id': 1,
              'image':'https://placeimg.com/64/64/1',
              'name':'홍1길동',
              'birthday':'99q9',
              'gender':'woman',
              'etc':"딸기"
            },
            {
              'id': 2,
              'image':'https://placeimg.com/64/64/2',
              'name':'홍1길2동',
              'birthday':'9a99',
              'gender':'man',
              'etc':"딸기"
            },
            {
              'id': 3,
              'image':'https://placeimg.com/64/64/3',
              'name':'홍2길동3',
              'birthday':'912399',
              'gender':'ma1n',
              'etc':"딸기"
            }
          ]        
    )
})

app.listen(port, () => console.log(`listen on port ${port}`));