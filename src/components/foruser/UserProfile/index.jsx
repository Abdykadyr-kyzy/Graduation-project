import React from 'react'
import './UserProfile.less'
import {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { delete_order } from "../../../store/actions"
import Button from "@material-ui/core/Button"
import PersonIcon from '@material-ui/icons/Person';

export const UserProfile = () => {

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
					{/* navbar */}
					<div className='user'>
					    <PersonIcon/>
						<p>
							{currentUser.firstName}{" "}
							{currentUser.lastName
								? currentUser.lastName[0]
								: ''}
						</p>
					</div>
					<div>
						<h1>your tours</h1>
						<div>
							{
								orders.length ? orders.map((el, id) => {
									return <div key={id}>
										<h2>{el.title}: {el.price}som</h2>
										<h1> all sum{el.price * el.count}</h1>
										<h1>for {el.count} user</h1>
										<Button onClick={() => dispatch(delete_order(el))}>
											otmenit
										</Button>
									</div>
								})
									: <div>
										you not which yet
									</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


