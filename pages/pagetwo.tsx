import Link from "next/link";

export default function PageTwo(){
    return <main>
        page two
        <Link href={'/'}>
            <a>to main</a>
        </Link>
    </main>
}