import React from 'react'

import {AiOutlineHome} from "react-icons/ai";
import { GiPokerHand} from 'react-icons/gi'
import {ImStatsDots} from 'react-icons/im' 
import {BiBook, BiTrophy} from "react-icons/bi"

export const PageInfoData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome/>,
    },
    {
        title: 'Train',
        path: '/train',
        icon: <GiPokerHand/>,
    },
    {
        title: 'Stats',
        path: '/stats',
        icon: <ImStatsDots/>,
    },
    {
        title: 'Rank',
        path: '/rank',
        icon: <BiTrophy/>,
    },
    {
        title: 'Tutorial',
        path: '/tutorial',
        icon: <BiBook/>,
    }
];

export default {
    PageInfoData
}