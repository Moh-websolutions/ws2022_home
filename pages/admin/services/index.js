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
import Trash from '@strapi/icons/Trash';
import {Flex} from '@strapi/design-system/Flex';
import{BaseCheckbox } from '@strapi/design-system/BaseCheckbox';
import {VisuallyHidden} from '@strapi/design-system/VisuallyHidden';
import {Avatar} from '@strapi/design-system/Avatar';
import {HeaderLayout, BaseHeaderLayout, ActionLayout } from '@strapi/design-system/Layout';
import {Button} from '@strapi/design-system/Button';

import {Link} from  '@strapi/design-system/Link';
import Image from 'next/image';
import AdminLayout from "@/components/admin/AdminLayout"
import { API_URL } from "url.config"
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Services({ services,singleservice }) {
    // services = services.sort(() => Math.random() - 0.5)
    console.log(services.data);

    const router = useRouter();

    // {services.data.map (singleservice => {
    //     singleservice =  singleservice.id  
    //     console.log(singleservice)
    // })}
    
    // get the page name
    const PAGENAME = router.pathname.split('/')[2];
    const SERVICES_COUNT = services.data.length;

    // const ROW_COUNT = 6;
    // const COL_COUNT = 10;
    // const entry = {
    //   cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
    //   description: 'Chez Léon is a human sized Parisian',
    //   category: 'French cuisine',
    //   contact: 'Leon Lafrite'
    // };
    // const entries = [];
  
    // for (let i = 0; i < 5; i++) {
    //   entries.push({ ...entry,
    //     id: i
    //   });
    // }

    
    return (
        
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
 
                
         
             <Box padding={12} background="neutral100">
                <Table colCount={10} rowCount={6} footer={<TFooter icon={<Plus />}>Add another field to this collection type</TFooter>}>
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
                        <Td>
                            <Avatar src={`${service.attributes.thumbnail.data.attributes.url} `} alt={service.attributes.title} />
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
            </ThemeProvider>
 
 
            </>
        </AdminLayout>
         
    )
}

export async function getStaticProps(){
    const res = await fetch(`http://localhost:1337/api/services?populate=*`)
    const services = await res.json();
    return {
        props: {services},
        revalidate: 1
    }
}