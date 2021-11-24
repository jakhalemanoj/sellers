import React,{Component} from 'react'
import {Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, Typography} from '@material-ui/core'
import './App.css'

class productList extends Component{
    constructor(){
        super()
        this.state={
            list:[""],
        }
    }


    componentDidMount(){
        fetch('http://localhost:3000/product')
        .then((response) => response.json().then((result=>{
            this.setState({list:result})
        })))
    }

    render(){
        return(
            <div style={{position:'relative',top:"50px"}}>
                <Typography variant="h3" color="secondary">Product Details</Typography><br/>
                <TableContainer Component={Paper}>
                    <Table className="tbl">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Product Type</TableCell>
                                <TableCell>Brand</TableCell>
                                <TableCell>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.list.map((b)=>
                            <TableRow>
                                <TableCell>{b.product_name}</TableCell>
                                <TableCell>{b.Product_type}</TableCell>
                                <TableCell>{b.brand}</TableCell>
                                <TableCell>{b.price}</TableCell>
                            </TableRow>
                            )}
                            
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>




            // <div>
            //     {
            //         this.state.list.length===0
            //         ? "Please Wait"
            //         : this.state.list.map((b)=>
            //         <div>
            //             <Table>
            //                 <TableHead>
            //                     <TableCell>
            //                         <TableRow>Product Name</TableRow>
            //                     </TableCell>
            //                 </TableHead>

            //                 <TableHead>
            //                     <TableCell>
            //                     <TableRow><span>{b.product_name}</span></TableRow>
            //                     </TableCell>
            //                 </TableHead>
            //             </Table>
            //         </div>)
            //     }
                
            // </div>
        )
    }

}

export default productList;