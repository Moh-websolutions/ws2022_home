import {
    MainNav,
    NavSection,
    NavSections,
    NavCondense,
    NavBrand,
    NavUser,
    NavLink,
  } from '@strapi/design-system/MainNav';
import {Box} from '@strapi/design-system/Box';
import {Divider } from '@strapi/design-system/Divider';
import {Icon} from '@strapi/design-system/Icon';
import Write  from '@strapi/icons/Write';
import Layer from '@strapi/icons/Layer';
import Landscape from '@strapi/icons/Landscape';
import Information from '@strapi/icons/Information';
import Puzzle from '@strapi/icons/Puzzle';
import ShoppingCart from '@strapi/icons/ShoppingCart';
import Cog from '@strapi/icons/Cog';

import {Link} from '@strapi/design-system/Link'; 
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom'


export default function AdminNav() {
     
    const [condensed, setCondensed] = useState(false);

    return (
 
     <MainNav condensed={condensed}>
        <NavBrand workplace="Workplace" title="Strapi Dashboard" icon={<img src="/ws-logo-w-2.svg" alt="" />} />
        <Divider />
        <NavSections>
        <Link to="/today" ><a>LINK</a></Link>
            <NavLink to="/cm" icon={<Write />} className="active">
            Content-type-builder
            </NavLink>
            <NavSection label="Plugins">
            <NavLink to="/builder" icon={<Layer />}>
                Builder
            </NavLink>
            <NavLink to="/content" icon={<Landscape />}>
                Media library
            </NavLink>
            <NavLink to="/content" icon={<Information />}>
                Documentation
            </NavLink>
            </NavSection>
            <NavSection label="General">
            <NavLink to="/builder" icon={<Puzzle />}>
                Plugins
            </NavLink>
            <NavLink to="/content" icon={<ShoppingCart />}>
                Marketplace
            </NavLink>
            <NavLink to="/content" icon={<Cog />}>
                Settings
            </NavLink>
            </NavSection>
        </NavSections>
        <NavUser src="https://avatars.githubusercontent.com/u/3874873?v=4" to="/somewhere-i-belong">
            John Duff
        </NavUser>
        <NavCondense onClick={() => setCondensed(s => !s)}>
            {condensed ? 'Expanded the navbar' : 'Collapse the navbar'}
        </NavCondense>
        </MainNav>
  
  
    )
}

 