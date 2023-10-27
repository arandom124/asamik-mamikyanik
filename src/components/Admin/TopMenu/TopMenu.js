import React from 'react';
import { Icon, Menu } from "semantic-ui-react";
import { useAuth } from "../../../hooks"
import "./TopMenu.scss";


export function TopMenu() {
    const { auth, logout } = useAuth();

    const renderName = () => {
        if (auth.me?.first_name && auth.me?.last_name) {
            return `${auth.me.first_name} ${auth.me.last_name}`;
        }
        return auth.me?.email;
    }

    return (
        <>
        <Menu fixed='top' className='top-menu-admin'>
            <div className="navbar bg-base-100">
            
            <div className="flex-1">
                <a className=" text-red-100 text-xl" ><img src='https://blogger.googleusercontent.com/img/a/AVvXsEjHCGFTTX1YVieCxlh5iIFRFVzAsa4y32yDZ1F8AErdZM8kGo87lG9-lujmwbO2_1sxc6MdmAWViQ1ClgzqxscvcKhLj0WMzAuwZHHAL6Fyvt2qXTkqDb06KYjNKMwXDiVz5VtC5PuF1MtoGsdew4yO273-lGRHSPlCoXf19R3iKy5trA4Is2ob3Iqc' style={{ width: '190px',height: '52px'}}/> </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <a className="text-3xl text-amber-500">LEÑOS DEL SUR</a>
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEikypdPKSarTrhkGEgKuOhUr_cK7g2s8jdyaw4xRx5wi3O-_U2pIjTFTjo6PBXJnngGZPCUa_bznFYl_jY0llAXKeuLR1InedoFK2SkCNvHNnJFNPRo6RN9IOH2IAfbsUoN36sbzsFyTNl-N-vkn8vgdwCAxRARg7RahKNEz4X-h5k6S03HhJNRTKYd" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li><a className='text-1xl text-red-100'>Hola, { renderName() }</a></li>
                    <li>
                        <a onClick={ logout } className='text-1xl text-red-100'>
                        <Icon name='sign-out' />Cerrar Sesión
                        </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </Menu>

        </>
    )
}
