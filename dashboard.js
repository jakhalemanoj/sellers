import React, {Component} from 'react'
import { TextField, Typography,Button } from '@material-ui/core'
import './App.css'

class Dashboard extends Component{
    render(){
        return(
            <div className="dash">
            <Typography variant="h2" color="secondary">Welcome to Snapdeal Seller Portal</Typography><br/><br/>
            <Button variant="contained" color="secondary">Click To Add Product</Button>
            </div>
        )
    }
}
export default Dashboard;