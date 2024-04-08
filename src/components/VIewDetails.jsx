import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { brown } from '@mui/material/colors'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const VIewDetails = () => {
    var [ users,setUsers] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        })
        .catch(err=>console.log(err))
    })

  return (
    <div style={{paddingTop:"80px",paddingLeft:"40px"}}>
        <Typography variant='h5' color={'brown'}>DASHBOARD DATA</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>TITLE</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.title}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
        {/* <Button variant='contained' color='normal'></Button>
        <Link to={'/b'} style={{textDecoration:'none',color:'white'}}>
                    BACK
                </Link>  */}
    </div>
  )
}

export default VIewDetails