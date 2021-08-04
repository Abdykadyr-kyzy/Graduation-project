import React from "react";
import Button from '@material-ui/core/Button';
import './Header.css';
import LanguageIcon from '@material-ui/icons/Language';
import SubwayIcon from '@material-ui/icons/Subway';
import Search from "@material-ui/icons/Search"
import { switch_language } from "../../store/actions";
import { useDispatch,useSelector } from "react-redux";
import {RU,EN} from "../../store/actions"
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import SchoolIcon from '@material-ui/icons/School';
import {Link} from "react-router-dom";

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

export const Header = () => {

    
    const useStyles = makeStyles((theme) => ({
        root: {
        display: 'flex',
        paddingTop: '100px'
        },
        paper: {
        marginRight: theme.spacing(2),
        },
    }));

    const classes = useStyles();
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


    const dispatch= useDispatch()
    const store = useSelector(state => state.data)

   return (
        <div className="container header">
            <nav>
                <ul>
                    <li>{store.home}</li>
                    <li>{store.course}</li>
                    <li>{store.about}</li>
                    <li>{store.vacansiec}</li>
                    <li>{store.review}</li>
                    <li>{store.contacts}</li>
                </ul>
                <div>
                    <span>
                       <LanguageIcon style={{paddingTop: 10}} />
                    </span>
                    <Button onClick={() => dispatch(switch_language(RU))} color="white">RU</Button>
                    <Button onClick={() => dispatch(switch_language(EN))} color="white">EN</Button>
                </div>
            </nav>
            <div className="contain" >
                <Link to='/first'>
                <div>
                    <SubwayIcon/>
                    <p>Туры за рубеж</p>
                </div>
                </Link>
                <Link to='/second'>
                    <div>
                        <SubwayIcon/>
                        <p>Tранспорт</p>
                    </div>
                </Link>
                <Link to='/three'>
                    <div>
                        <SubwayIcon/>
                        <p>Туры по центральной Азии</p>
                    </div>
                </Link>
                <div>
                    <Link to="/">
                        <div className="kyrgyz">
                            KYRGYZ CONCEPT
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
                        <p>Академия</p>
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
                            >Другие услуги</Button>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem><Link to="/vip">Vip</Link></MenuItem>
                                        <MenuItem><Link to="/card" >Card</Link></MenuItem>
                                        <MenuItem><Link to="/arenda" >Arenda</Link></MenuItem>
                                    </MenuList>
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