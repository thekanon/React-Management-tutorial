import React from 'react';
import './App.css';
import Customer from './components/Customer';
const customers = [
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

function App() {
  return (
    <div>
      {
        customers.map(c=> {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              etc={c.etc}
            />
          )
        })
      }
    </div>
  );
}

export default App;
