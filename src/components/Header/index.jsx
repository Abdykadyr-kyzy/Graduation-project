import React from "react";
import Button from '@material-ui/core/Button';
import './Header.css';
import LanguageIcon from '@material-ui/icons/Language';
import Search from "@material-ui/icons/Search"
import { switch_language } from "../../store/actions";
import { useDispatch,useSelector } from "react-redux";
import {RU,EN} from "../../store/actions"

export const Header = () => {

    const dispatch= useDispatch()
    const store = useSelector(state => state.data)

   return (
        <div className="container header">
            <div>
                <LanguageIcon/>
                <Button onClick={() => dispatch(switch_language(RU))} color="primary">RU</Button>
                <Button onClick={() => dispatch(switch_language(EN))} color="secondary">EN</Button>
            </div>
            <nav>
                <ul>
                    <li>{store.home}</li>
                    <li>{store.about}</li>
                    <li>{store.contacts}</li>
                </ul>
            </nav>
            <div>
                <Search/>
            </div>
        </div>
    )
}