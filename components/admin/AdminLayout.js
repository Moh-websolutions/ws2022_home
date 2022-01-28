import { ThemeProvider } from "@strapi/design-system/ThemeProvider";
import { lightTheme } from "@strapi/design-system/themes";
import {Box} from '@strapi/design-system/Box';
import {Layout} from '@strapi/design-system/Layout';
import ExclamationMarkCircle from '@strapi/icons/ExclamationMarkCircle';
import Plus from '@strapi/icons/Plus';
import Apps from '@strapi/icons/Apps';
import Pencil from '@strapi/icons/Pencil';
import ArrowLeft from '@strapi/icons/ArrowLeft';
import {Tag } from '@strapi/design-system/Tag';
import PropTypes from 'prop-types';
  
import {
    SubNav,
    SubNavHeader,
    SubNavSection,
    SubNavSections,
    SubNavLink,
    SubNavLinkSection,
    
 
  } from '@strapi/design-system/SubNav';

 

  import {HeaderLayout, BaseHeaderLayout, ActionLayout } from '@strapi/design-system/Layout';
  import {Button} from '@strapi/design-system/Button';
  import {ContentLayout } from '@strapi/design-system/Layout';
  import  Link  from  'next/link';


import Head from 'next/head';
// import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router'
import AdminNav from "./AdminNav";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom'
import React from 'react';
 
export default function AdminLayout({ children, title, description, keywords,navigationContent}) {
    const router = useRouter();   
     
    const CustomLink = React.forwardRef((props, ref) => {
        return (
          <SubNavLink as="a" {...props} innerRef={ref}>
            {props.children}
          </SubNavLink>
        );
      });
      
      CustomLink.displayName = 'CustomLink';
      
      CustomLink.propTypes = {
        children: PropTypes.node.isRequired,
      };
    return (
        <StaticRouter>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Websolutions.ca" />
                <meta name="theme-color" content="white" />
                <meta name="theme-color" content="black" />

                <title>{title}</title>
                {/* favicon */}
                <link rel="shortcut icon" href="/images/favicon/favicon.ico" type="image/x-icon" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
                {/* iOS support */}
                <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png" />
                {/* Android support */}
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/android-icon-192x192.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/android-icon-144x144.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/android-icon-96x96.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/images/android-icon-72x72.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/android-icon-48x48.png" />
                <link rel="apple-touch-icon-precomposed" href="/images/favicon/android-icon-36x36.png" />
      
 
            </Head>
                 
                <ThemeProvider theme={lightTheme}>
                    <Box background="neutral100">
                    <Layout sideNav={<SubNav ariaLabel="Builder sub nav"> 
                    {/* <AdminNav /> */}
                    <SubNavHeader searchable value={''} onClear={() => {}} onChange={e => {}} label="Builder" searchLabel="Search..." />
                    <SubNavSections>
                    <SubNavSection label="Collection Type" collapsable>
                   
                         
                    </SubNavSection>
                    <SubNavSection label="Single Type" collapsable>
             

                        <SubNavSections>
                            {navigationContent?.map((section, index) => {
                            return <NavSection title={section.title} pages={section.pages} key={index} />;
                            })}
                        </SubNavSections>
                    </SubNavSection>
                    </SubNavSections>

                    <SubNavSection label="collapsable" collapsable>
                     
                        <Link href={`/service`} key={1} passHref>
                            <CustomLink>this is name</CustomLink>
                        </Link>
                     
                    </SubNavSection>
                </SubNav>}>
 
                <Box background="neutral100">
                    <HeaderLayout primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>} navigationAction={<Link startIcon={<ArrowLeft />} href="/services">
                    <a> Go back</a>
                    </Link>} title="Other CT" subtitle="36 entries found" as="h2" />
                </Box>
                <ContentLayout>
                     {children}
                </ContentLayout>           
            
                </Layout>
                </Box>     
                
                
            </ThemeProvider>       

        </StaticRouter>
    
    )
}

AdminLayout.propTypes = {
    navigationContent: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        pages: PropTypes.arrayOf(
          PropTypes.shape({
            link: PropTypes.string,
            name: PropTypes.string,
          }),
        ),
      }),
    ),
  };
  

{/* default roots for <Head></Head> */}
AdminLayout.defaultProps = {
    title: "Admin | Websolutions.ca",
    description: "Admin panel for Websolutions.ca",
    keywords: "bathurst web design, new brunswick websites, new brunswick web services, custom web based applications, motor management system"
}