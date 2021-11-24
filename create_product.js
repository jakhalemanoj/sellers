import React, { Component } from 'react';
import {TextField,Button,Typography} from '@material-ui/core'
import './App.css'

class CreateProduct extends Component {
    constructor(){
        super()
        this.state={
            product_name:"",
            Product_type:"",
            brand:"",
            price:""
            
        }
    }
    hello(){
        fetch("http://localhost:3000/product",{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((response)=>{response.json()
        .then((a)=>{
            alert("Product Created Successfully")
        })})
    }
    render() {
        return (
            <div className="main">
                <br/>
                <Typography variant="h4" color="secondary">Enter the Product Details</Typography><br/>
                <TextField label="Product Name" variant="outlined" onChange={(e)=>{this.setState({product_name:e.target.value})}}></TextField><br/><br/>
                <TextField label="Product Type" variant="outlined" onChange={(e)=>{this.setState({Product_type:e.target.value})}}></TextField><br/><br/>
                <TextField label="Brand" variant="outlined" onChange={(e)=>{this.setState({brand:e.target.value})}}></TextField><br/><br/>
                <TextField label="Price" variant="outlined" onChange={(e)=>{this.setState({price:e.target.value})}}></TextField><br/><br/>
                <Button variant="contained" color="primary" onClick={()=>this.hello()}>Submit</Button><br/><br/>
            </div>
        );
    }
}

export default CreateProduct;