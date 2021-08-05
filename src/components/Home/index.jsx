import React from "react";
import './Home.css';
import {useSelector } from "react-redux";
import bir from "../../images/7_n.jpg"
import { ButtonGroup,Button } from "@material-ui/core";
import {Link} from "react-router-dom"
import {Header} from "../Header"
// import { Button } from '@material-ui/core';
import {useState} from 'react'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import swal from 'sweetalert';

export const Home = () => {

    const store = useSelector(state => state.data)

    const [open,setOpen] =useState()
    const [inEmail, setInEmail] = useState("");
    const [inPassword, setInPassword] = useState("");


    const mostrarAlerta = () =>{
		swal({
            title: "succes!",
            text: "We will connect!",
            icon: "success",
            button: handleClose(),
          });
          
	}

    const handleClickOpen=() =>{
        setOpen(true)
            
    }
    const handleClose=() =>{
        setOpen(false)
            
    }
    return (
        <div className="container home">
            <div className="big">
                   <h1>Kyrgyzstan</h1>
            </div>
            <div>
                <h1>Время путешествовать с Kyrgyz Concept!</h1>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button>Big tour</Button>
                    <Button>Good tour</Button>
                </ButtonGroup>
                <div>
                    <img src={bir}/>
                    <img src={bir}/>
                    <img src={bir}/>
                    <img src={bir}/>
                </div>
                <div>
                   
                    <Button onClick={handleClickOpen}>2000 сом</Button>
                    <Dialog open={open}  aria-labelledby="form-dialog-title">
               <DialogTitle id="form-dialog-title">Забранировать</DialogTitle>
                  <DialogContent>
                        <DialogContentText>Забранируйте сейчас!</DialogContentText>  
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          value={inEmail}
                          onChange={(e) => setInEmail(e.target.value)}
                          />
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={inPassword}
                            onChange={(e) => setInPassword(e.target.value)}
                          />
                    </DialogContent>
                  <DialogActions>
                      {/* <Button onClick={handleClose} color="primary">Cancel</Button> */}
                     <Button  onClick={mostrarAlerta} color="primary">Login</Button>
                   </DialogActions>
              </Dialog> 
                </div>
               <Button>See all programs</Button>
            </div>
            <div>
                <h1>Туры по Кыргызстану и Центральной Азии</h1>
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button>Big tour</Button>
                    <Button>Good tour</Button>
                </ButtonGroup>
                <div>
                    <img src={bir}></img>
                    <img src={bir}></img>
                    <img src={bir}></img>
                    <img src={bir}></img>
                </div>
                <Link to="/three"><Button>See all programs</Button></Link>
            </div>
        </div>
    )
}