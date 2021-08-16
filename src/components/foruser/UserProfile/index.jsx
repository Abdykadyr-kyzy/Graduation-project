import './UserProfile.less'
import {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { delete_order } from "../../../store/actions"
import PersonIcon from '@material-ui/icons/Person';

import Button from "@material-ui/core/Button"

export const UserProfile = () => {
	const store = useSelector((state) => state.auth.data)

	const orders = useSelector(state => state.order.orders)

	useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    },[orders])

    const dispatch = useDispatch()

	const currentUser = useSelector((state) => state.user.currentUser)

	return currentUser ? (
		<div>
			<div className='container'>
				<div className='navbar'>
					{/* navbar */}
					<div className='user'>
					    <PersonIcon/>
						<h1>{currentUser.firstName}</h1>
						<p>
							{orders.length ? orders.map((el, id) => {
								return <div key={id}>
									<h2 value="user_title" >{el.title}: {el.price}som</h2>
									<h1 value="user_sum" > all sum{el.price * el.count}</h1>
									<h1 value="user_for" >for {el.count} user</h1>
									<Button onClick={() => dispatch(delete_order(el))}>
										otmenit
									</Button>
								</div>
							})
							: <div>
								Dear {currentUser.firstName} you not which yet
							</div>
					    }
							{currentUser.lastName
								? currentUser.lastName[0]
								: ''}
							<h1>Happy travel</h1>
						</p>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div>
			you not which yet
		</div>
	)
}


