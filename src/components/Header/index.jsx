import React from "react";
import Button from '@material-ui/core/Button';
import './Header.css';
import LanguageIcon from '@material-ui/icons/Language';
import SubwayIcon from '@material-ui/icons/Subway';
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from 'react-router'
import {RU,EN,is_delete,switch_language} from "../../store/actions"
import SchoolIcon from '@material-ui/icons/School';
import {Link} from "react-router-dom";
import { Rate } from 'antd';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';


export const Header = () => {
    const history = useHistory()
	const currentUser = useSelector((state) => state.user.currentUser)
	const dispatch = useDispatch()
    
    
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            paddingTop: '100px'
        },
        paper: {
            marginRight: theme.spacing(2),
        },
    }));
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

        setOpen(false);
    };

    // function scrool () {
    //     var top = $(document).scrollTop();
    //     if(top < 650)  $(".header_content").className({top: '0px', position: 'relative'});
    //     else $(".header_content").className({top:'0px',position: 'fixed'})
    // }


    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


   return (
        <div className="content_header">
            <nav>
                <ul>
                    <Link to="./about" ><li>about</li></Link>
                    <Rate />
                    {/* <li><Link to="/" >{store.review}</Link></li> 
                    <li><Link to="/about" >{store.about}</Link></li>
                    <li>{store.home}:Abdykadyr kyzy Kanzada,Nuraiym Erkinova</li>
                    <li>{store.contacts}:0772 200 209 - 0773 107 453</li> */}
                </ul>
                <div>
                    <span>
                       <LanguageIcon style={{paddingTop: 10}} />
                    </span>
                    <Button onClick={() => dispatch(switch_language(RU))} color="white">RU</Button>
                    <Button onClick={() => dispatch(switch_language(EN))} color="white">EN</Button>
                </div>
                {currentUser.firstName ? (
				     <div style={{ display: 'flex' }}>
                            <div style={{ alignSelf: 'center' }} className='profile__title'>
                                {currentUser.firstName}{' '}
                                {currentUser.lastName ? currentUser.lastName[0] : ''}
                            </div>
                            <Link to="/user">
                                <img
                                    className='profile__img'
                                    style={{ width: 30,height:30 ,margin: '0 20px' }}
                                    src='https://www.pngkey.com/png/full/178-1787134_png-file-svg-github-icon-png.png'
                                    alt=''
                                />
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
                                <Button type='text'>Log in</Button>
                            </Link>
                            <Link to='/sign'>
                                <Button primary>Sign up</Button>
                            </Link>
                        </div>
                    )}
            </nav>
            <div className="contain" >
                <div>
                    <Link to='/first'>
                        <SubwayIcon/>
                        <p>Туры po Bishkek</p>
                    </Link>
                </div>
                <div>
                    <Link to='/second'>
                        <SubwayIcon/>
                        <p>Tранспорт</p>
                    </Link>
                </div>
                <div>
                    <Link to='/three'>
                        <SubwayIcon/>
                        <p>Туры по regionam</p>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <div className="kyrgyz">
                            KYRGYZ<br/> TRAVEL
                        </div>
                        <p> One stop travel shop</p>
                    </Link>
                </div>
                <div>
                    <Link to="/fore">
                        <SubwayIcon/>
                        <p>Организация конференций</p>
                    </Link>
                </div>
                <div>
                    <Link to="/five">
                        <SchoolIcon/>
                        <p>Our school</p>
                    </Link>
                </div>
                <div>
                    <div>
                       <SubwayIcon/>
                    </div>
                    <Button
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            >Другие услуги
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                    <div style={{width:100,height:55,marginBottom:-20}} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <p><Link to="/vip">Vip</Link></p>
                                        <p><Link to="/card" >Card</Link></p>
                                    </div>
                                    </ClickAwayListener>
                                </Paper>
                                </Grow>
                            )}
                    </Popper>
                </div>
            </div>
        </div>
    )
}