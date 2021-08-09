import React from 'react'
import { Label } from "../../TextField"
import './signUp.less'
import { Button,Input } from "antd"
import imgGoogle from './images/google.png'
import imgFacebook from './images/facebook.png'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { add_user } from "../../../store/actions"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

export const SignUp = () => {
	const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [userName, setUserName] = useState('')

	const state = useSelector((state) => state.user)
	const currentUser = useSelector((state) => state.user.currentUser)
	const dispatch = useDispatch()

	const history = useHistory()
console.log(state)
	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(state))
	}, [currentUser])

	useEffect(() => {
		if (userEmail.trim() && userName.trim() && userPassword.trim()) {
			localStorage.setItem('users', JSON.stringify(state))
			history.push('/user')
		}
	}, [state])

	const checkAccount = () => {
		let gmail = /([a-zA-Z0-9\.]{5,15})\@gmail[\.]com/g 

		if (gmail.test(userEmail) && userPassword.length >= 8) {
			return dispatch(
				add_user({
					firstName: userName.split(' ')[0],
					lastName: userName.split(' ')[1],
					userEmail,
					userPassword,
					photo: 'https://www.pngkey.com/png/full/178-1787134_png-file-svg-github-icon-png.png',
					id: Date.now().toString(),
				}),
			)
		} else {
			console.log('is error signUp.jsx 54')
		}
	}

	return (
		<div className='sign__main'>
			<div className='sign__block container'>
				<div className='sign__block1'>
					<h1 className='sign__title'>Sign up</h1>

					<div className='textfield'>
						<Label htmlFor='Your Name'>Your Name</Label><br/>
						<Input style={{width:300}}
							type='text'
							placeholder='Your Name'
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>
					<br />
					<div className='textfield'>
						<Label htmlFor='Email'>Email</Label><br/>
						<Input style={{width:300}}
							type='email'
							placeholder='Enter the Email'
							value={userEmail}
							onChange={(e) => setUserEmail(e.target.value)}
						/>
					</div>
					<br />
					<div className='textfield'>
						<Label htmlFor='Password'>Password</Label><br/>
						<Input 
							style={{ marginBottom: 24 ,width:300}}
							type='password'
							placeholder='At least 8 characters long'
							value={userPassword}
							onChange={(e) => setUserPassword(e.target.value)}
						/>
					</div>
					<Button
						className='sign__btn1'
						primary
						onClick={() => {
							checkAccount()
						}}
					>
						Create account
					</Button> <br/>
					<b className='sign__end__text1'>
						Already have an account?{' '}
						<Link to="/login">
							<a href='https:google.com'>Log in</a>
						</Link>
					</b>
				</div>
				<div className='sign__block2'></div>
			</div>
		</div>
	)
}
