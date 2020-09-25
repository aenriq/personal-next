import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children })
{
    return(
    <>
        <Head>
            <title>antonio enriquez</title>
        </Head>

        <div className="container">
            <div className="header">
                <div>aenriq.com</div>
                <div className="last-item">pages</div>
            </div>
            <main className="children">
                {children}
            </main>
        </div>
        <style jsx>
        {`
            .header{
                margin-botton:50px;
                display:flex;
                justify-content: space-between
                font-size:2.1vh;
                width:40vw;
            }

            .last-item{
                margin-left:auto;
            }
        `}
        </style>

    </>)
}