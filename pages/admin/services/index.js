import { ThemeProvider } from "@strapi/design-system/ThemeProvider";
import { lightTheme } from "@strapi/design-system/themes";
import { Table, Thead, Tbody, Tr, Td, Th,TFooter  } from '@strapi/design-system/Table';
import { Typography } from '@strapi/design-system/Typography';
import { Box } from '@strapi/design-system/Box';
import { Icon } from '@strapi/design-system/Icon';
import Plus from '@strapi/icons/Plus';
import {IconButton} from '@strapi/design-system/IconButton';
import Pencil from '@strapi/icons/Pencil';
import ArrowLeft from '@strapi/icons/ArrowLeft';
import ArrowRight from '@strapi/icons/ArrowRight';
import More from '@strapi/icons/More';
import Trash from '@strapi/icons/Trash';
import {Flex} from '@strapi/design-system/Flex';
import{BaseCheckbox } from '@strapi/design-system/BaseCheckbox';
import {VisuallyHidden} from '@strapi/design-system/VisuallyHidden';
import {Avatar} from '@strapi/design-system/Avatar';
import {HeaderLayout, BaseHeaderLayout, ActionLayout } from '@strapi/design-system/Layout';
import {Button} from '@strapi/design-system/Button';
import { Dots, NextLink, PageLink, Pagination, PreviousLink } from '@strapi/design-system/Pagination';
import { StaticRouter } from 'react-router-dom'

import {Link} from  '@strapi/design-system/Link';
import Image from 'next/image';
import AdminLayout from "@/components/admin/AdminLayout"
import { API_URL } from "url.config"
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";

export default function Services({ services, page }) {
    console.log(services.meta.pagination.total + " total services");

    const router = useRouter();
    

        // get the page name
        const PAGENAME = router.pathname.split('/')[2];
        const SERVICES_COUNT = services.meta.pagination.total;
       
        // get the last 
        const lastPage = Math.ceil(services.meta.pagination.total / 3);
 
        // create an array containing the page numbers
        const pageNumbers = [];

        for (let i = 1; i <= lastPage; i++) {
            pageNumbers.push(i);
        }
  

            
    return (
    //    <>
    //    {services.data.map (service => ( 
    //         <div key={service.id}>
    //         <p>{service.id}- {service.attributes.title}</p>
         
    //         </div>
    //     ))
    //     }

    //     <button onClick={() => { router.push(`/admin/services?page=${page - 1}`) }}
    //     disabled={page <= 1} >previous </button>
    //     <button onClick={() => { router.push(`/admin/services?page=${page + 1}`) }}
    //     disabled={page >= lastPage} >next </button>
           
    //     {
    //          // pagination from getMorePosts
    //         <div>
    //             {
   
    //                 pageNumbers.map(number => (
    //                     <li key={number}>
    //                         <a href=""  
    //                         onClick={(e) => {
    //                             e.preventDefault();
    //                             router.push(`/admin/services?page=${number}`);
    //                         }}>
    //                             {number}
    //                         </a>
    //                     </li>
    //                 ))
    //             }
    //         </div>

    //     }
          
    //     </>
    <StaticRouter>
        <AdminLayout title={"Services | websolutions.ca"}>
            <>
            <ToastContainer />
            <Box background="neutral100" padding={0}>
                    <HeaderLayout 
                    primaryAction={<Button startIcon={<Plus />}
                    onClick={() => 
                        router.push(`/admin/services/create2`)
                    }>Add an entry</Button>} 

                    navigationAction={<Link startIcon={<ArrowLeft />} TO="/services"
                    onClick={() => router.back()}
                    >  
                    <a> Go back</a>
                    </Link>} title={PAGENAME} subtitle={SERVICES_COUNT + " entries found"} as="h2" />
                </Box>
            <ThemeProvider theme={lightTheme}>
             <Box centered  padding={12} background="neutral100" >
             <Table colCount={10} rowCount={6} footer={<TFooter  icon={<Plus />} onClick={() => router.push(`/admin/services/create`) }>Add another field to this collection type</TFooter>}>
                    <Thead>
                    <Tr>
                        <Th>
                        <BaseCheckbox aria-label="Select all entries" />
                        </Th>
                        <Th>
                        <Typography variant="sigma">ID</Typography>
                        </Th>
                        <Th>
                        <Typography variant="sigma">Title</Typography>
                        </Th>
                        <Th>
                        <Typography variant="sigma">Subtitle</Typography>
                        </Th>
                        <Th>
                        <Typography variant="sigma">Cover</Typography>
                        </Th>
                        <Th>
                        <Typography variant="sigma">Content avalable in </Typography>
                        </Th>
                         
                        <Th>
                        <VisuallyHidden>Actions</VisuallyHidden>
                        </Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {services.data.map (service => ( <Tr key={service.id}>
                         <Td>
                            <BaseCheckbox aria-label={service.attributes.title} />
                        </Td>
                        <Td>
                            <Typography textColor="neutral800">{service.id}</Typography>
                        </Td>
                        <Td>
                            <Typography textColor="neutral800">{service.attributes.title}</Typography>
                        </Td>
                        <Td>
                            <Typography textColor="neutral800">{service.attributes.subtitle}</Typography>
                        </Td>
                        <Td>{console.log(service.attributes.cover)} 
                            {
                            service.attributes.thumbnail.data  !=null ?
                           <Avatar src={service.attributes.thumbnail.data.attributes.url} alt={service.attributes.title} />
                            :
                            <Avatar src="/images/default-cover.png" />
                            }   
                         </Td>
                        
                        <Td>
                            <Typography textColor="neutral800">{service.attributes.locale}</Typography>
                        </Td>
                         
                        <Td>
                            <Flex>
                             <IconButton onClick={() => router.push(`/admin/services/edit/${service.id}`)} label="Edit" noBorder icon={<Pencil />} />
                            <Box paddingLeft={1}>
                                <IconButton onClick={
                                    // deleteService
                                    () => {
                                        if (window.confirm("Are you sure you want to delete this service?")) {
                                            const res = fetch(`http://localhost:1337/api/services/${service.id}`, {
                                                method: "DELETE",
                                            });
                                            res.then(res => {
                                                if (res.status === 200) {   
                                                    toast.success("Service deleted successfully", {
                                                        position: "top-right",
                                                        autoClose: 1800,
                                                        hideProgressBar: false,
                                                        closeOnClick: true,
                                                        pauseOnHover: true,
                                                        draggable: true,
                                                        progress: undefined,
                                                    });
                                                    router.push("/admin/services");
                                                } else {
                                                    toast.error("An error occured", {
                                                    });
                                                }
                                            });
                                        }
                                             
                                    }
                                }    label="Delete" noBorder icon={<Trash />} />
                            </Box>
                            </Flex>
                        </Td>
                        </Tr>))}
                    </Tbody>
                </Table>
                </Box>
                {

                    <Box padding={12}  background="neutral100"  className="d-flex align-items-center justify-content-center mt-4">
                          
                    <Pagination activePage={page} pageCount={lastPage}>
                        <PreviousLink 
                        onClick={() => { router.push(`/admin/services?page=${page - 1}`) }}
                        to={`/admin/services?page=${page - 1}`}
                        >Go to previous page</PreviousLink>
                        {   
                            pageNumbers.map(number =>  (
                                <PageLink 
                                    number={number}
                                    key={number}  
                                    to={`/${number}`} 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        router.push(`/admin/services?page=${number}`);
                                    }}
                                    >
                                    {number}
                                </PageLink>
                            ))
                        }
                         
                        <NextLink 
                        onClick={() => { router.push(`/admin/services?page=${page + 1}`) }}
                         to={`/admin/services?page=${page + 1}`} >
                        Go to next page</NextLink>
                        </Pagination>
                     </Box>
              
                }
            </ThemeProvider>
 
 
            </>
        </AdminLayout>
        </StaticRouter>
         
    )
}

export async function getServerSideProps({query: {page = 1}}) {
    const start = +page === 1 ? 0 : (+page - 1) * 3;
 
    const res = await fetch(`http://localhost:1337/api/services?populate=*&pagination[start]=${start}&pagination[limit]=3&fields=id&sort=id:DESC`);
    const data = await res.json();
    return {
        props: {
        services: data,
        //page: parseInt(page),// convert string to number
        page: +page,// convert string to number
    },
 }
}