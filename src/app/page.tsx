import React from "react";
import {Metadata} from "next";
import {TodoListPage} from "../lib/to-do-list";


export async function generateMetadata(): Promise<Metadata> {

    return {
        title: 'لیست وظایف'
    }
}

export default async function Page() {

    return (<TodoListPage />);
}