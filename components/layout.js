import Link from 'next/link'
import Head from 'next/head'
import { Mail, GitHub , Twitter} from 'react-feather'
export default function Layout({ children })
{
    return(
    <>
        <Head>
            <title>antonio enriquez</title>
        </Head>

        <div className="container">
            <div className="header">
                <div><Link href="/">aenriq.com</Link></div>
                <div className="last-item">pages</div>
            </div>
            <main className="children">
                {children}
            </main>

            <div className="footer">
                    <div id="email">
                        <Mail size={20} strokeWidth={2} color="black" className="social_media" /> 
                    </div>
                    <div onClick={() => window.open('https://github.com/aenriq', '_blank')} className="social_media">
                        <GitHub size={20} strokeWidth={2} color="black" /> 
                    </div>
                    <div onClick={() => window.open('https://twitter.com/tonioenriquez', "_blank")} className="social_media">
                        <Twitter size={20} strokeWidth={2} color="black" /> 
                    </div>
            </div>{/*  End of footer dom */}
            
        </div>
        <style jsx>
        {`
            .header{
                margin-botton:50px;
                padding-bottom: 50px;
                display:flex;
                justify-content: space-between;
                font-size:20px;
                width:35vw;
                min-width:370px;
                max-width:685px;
                height:5vh;
                font-weight:300;
            }

            .social_media{
                cursor:pointer;
            }

            .footer{
                display:flex;
                justify-content: space-between;     
                min-width:200px;
                max-width:200px;
                height:5vh;
                padding-bot: 30px;
                position: absolute;
                bottom:0;
                font-weight:300;
            }

            .footer div{
                font-size:14px;

            }

            .last-item{
                margin-left:auto;
            }

            .children{
                width:35vw;
                min-width:370px;
                max-width:685;
            }
        `}
        </style>

    </>)
}