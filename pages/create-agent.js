import { useEffect } from "react";
import Head from 'next/head'
import Router from 'next/router'
import UserPresenter from "../components/user/user.presenter";

export default function CreateAgentPage() {

    let userPresenter = new UserPresenter();
    
    useEffect(() => {
        if(!userPresenter.isLoggedIn()) {
            Router.push("/login");
        }

    },[])

    return (
        <>
        <Head>
            <title>Create User</title>
        </Head>
        <div>
            Create User page..
        </div>
        </>
    )
}