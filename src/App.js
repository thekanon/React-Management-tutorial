import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Talbe from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    width: '100%',
    marginTop:theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})

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

class App extends React.Component {
  render() {
    const { classes } = this.props; 
    return ( 
      <Paper className={classes.root}> 
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>그림</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>사번</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>과일</TableCell>
          </TableHead>
          <TableBody>
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

          </TableBody>
        </Table>
      </Paper>  
    );
  }
}

export default withStyles(styles)(App);
