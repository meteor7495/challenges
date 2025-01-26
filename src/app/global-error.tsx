'use client'

import Error from "next/error";
import {useEffect} from "react";

export default function GlobalError({error}: { error: Error & { digest?: string }, reset: () => void }) {

    useEffect(() => {
        console.log(error);
    }, []);

    return (
        <html>
        <body>
        <Error statusCode={500}/>
        </body>
        </html>
    );
}
