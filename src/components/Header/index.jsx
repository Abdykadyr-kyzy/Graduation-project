import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import './Header.css';
import LanguageIcon from '@material-ui/icons/Language';
import SubwayIcon from '@material-ui/icons/Subway';
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from 'react-router'
import {Select} from "antd"
import {RU,EN,is_delete,switch_language} from "../../store/actions"
import SchoolIcon from '@material-ui/icons/School';
import {Link} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Menu from '@material-ui/core/Menu';

const { Option } = Select
export const Header = () => {
    //translate 
    const store = useSelector((state) => state.auth.data)
    const [anchorEl, setAnchorEl] = useState(null);
    // user
    const history = useHistory()
	const currentUser = useSelector((state) => state.user.currentUser)
	const dispatch = useDispatch()

    // for burger
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

   return (
        <div className="content_header">
            <nav>
                    <div className="burger">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <DehazeIcon/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Link onClick={handleClose} to='/first'>
                                <p>{store.nav1}</p>
                            </Link>
                            <Link onClick={handleClose} to='/second'>
                                <p>{store.nav2}</p>
                            </Link>
                            <Link onClick={handleClose} to='/three'>
                                <p>{store.nav3}</p>
                            </Link>
                            <Link onClick={handleClose} to="/">
                                <p>{store.nav4}</p>
                            </Link>
                            <Link onClick={handleClose} to="/fore">
                                <p>{store.nav5}</p>
                            </Link>
                            <Link onClick={handleClose} to="/five">
                                <p>{store.nav6}</p>
                            </Link>
                            <Link onClick={handleClose}  to="/card">
                                <p>{store.nav9}</p>
                            </Link>
                        </Menu>
                    </div>
                    <div style={{marginLeft:20}}>
                        <Select defaultValue='RU'  style={{ width: 80}}>
                        {/* <Button onClick={() => dispatch(switch_language(EN))}>EN</Button>
                        <Button onClick={() => dispatch(switch_language(RU))}>RU</Button> */}
                            <Option value='EN'><Button onClick={() => dispatch(switch_language(EN))}>EN</Button></Option>
                            <Option value='RU'><Button onClick={() => dispatch(switch_language(RU))}>RU</Button></Option>
                        </Select>
                    </div>
                    {currentUser.firstName ? (
				        <div style={{ display: 'flex' }}>
                            <div style={{ alignSelf: 'center' }} className='profile__title'>
                                {currentUser.firstName}{' '}
                                {currentUser.lastName ? currentUser.lastName[0] : ''}
                            </div>
                            <Link to="/user">
                                <PersonIcon/>
                            </Link>
                            <div>
                                <Button danger
                                    onClick={() => {
                                        history.push('/')
                                        dispatch(is_delete())
                                    }}
                                >
                                    Exit
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login">
                                <Button type='text'>{store.log}</Button>
                            </Link>
                            <Link to='/sign'>
                                <Button primary>{store.valid}</Button>
                            </Link>
                        </div>
                    )}
            </nav>
            <div className="contain" >
                <div>
                    <Link to='/first'>
                        <SubwayIcon/>
                        <p>{store.nav1}</p>
                    </Link>
                </div>
                <div>
                    <Link to='/second'>
                        <SubwayIcon/>
                        <p>{store.nav2}</p>
                    </Link>
                </div>
                <div>
                    <Link to='/three'>
                        <SubwayIcon/>
                        <p>{store.nav3}</p>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <div className="kyrgyz">
                           KYRGYZ<br/> TRAVEL
                        </div>
                        <p>{store.nav4}</p>
                    </Link>
                </div>
                <div>
                    <Link to="/fore">
                        <SubwayIcon/>
                        <p>{store.nav5}</p>
                    </Link>
                </div>
                <div>
                    <Link to="/five">
                        <SchoolIcon/>
                        <p>{store.nav6}</p>
                    </Link>
                </div>
                <div>
                    <Link  to="/card">
                        <SubwayIcon/>
                       <p>{store.nav9}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}