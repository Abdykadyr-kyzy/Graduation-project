import React from 'react'
import doc from './img/file_copy_24px.png'
import sub from './img/Subscriptions.png'
import './UserProfile.less'
import set from "./img/setting.png"
// import { SettingBody } from './SettingBody'
import {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { delete_order } from "../../../store/actions"
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Skeleton from '@material-ui/lab/Skeleton';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from "@material-ui/core/Button"

export const UserProfile = () => {
	const store = useSelector((state) => state.auth.data)

	const orders = useSelector(state => state.order.orders)

    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    },[orders])


	const currentUser = useSelector((state) => state.user.currentUser)

	return (
		<div className='profile__background'>
			<div className='container'>
				<div className='navbar'>
					<div className='user'>
						<img
							style={{ width:30, height:30}}
							src='https://www.pngkey.com/png/full/178-1787134_png-file-svg-github-icon-png.png'
							alt=''
						/>
						<p>
							{currentUser.firstName}{" "}
							{currentUser.lastName
								? currentUser.lastName[0]
								: ''}
						</p>
					</div>
					<div>
						<h1>{store.your}</h1>
						<MenuList>
							{
								orders.length ? orders.map((el, id) => {
									return <div key={id}>
										<h2>{el.title}: {el.price}{store.money}</h2>
										<b>{el.count}</b>
										<h1> {store.count} {el.price} * {el.count} = {el.sum}</h1>
										<div>
										   <img src={el.img} /><br></br>
										</div>
										<Button onClick={() => dispatch(delete_order(el))}>
											{store.del}
										</Button>
									</div>
								})
									: <div>
										{store.yet}
									</div>
							}
						</MenuList>
					</div>
				</div>
			</div>
		</div>
	)
}


