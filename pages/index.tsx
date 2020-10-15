import Link from "next/link";
import {GetStaticProps} from "next";

export default function Index({content}){
    return <main>
        main page
        <Link href={'/pagetwo'}>
            <a>page two {content}</a>
        </Link>
    </main>
}

export const getStaticProps:GetStaticProps=async(ctx)=>{
    return {
        props:{
            content:'good page'
        }
    }
}
