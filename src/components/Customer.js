import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
class Customer extends React.Component{
    render(){
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile" /> </TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday} </TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.etc}</TableCell>
            </TableRow>
        )
    }
}
/*
    'id': 1,
    'image':'https://placeimg.com/64/64/1',
    'name':'홍1길동',
    'birthday':'99q9',
    'gender':'woman',
    'etc':"딸기"
*/

export default Customer