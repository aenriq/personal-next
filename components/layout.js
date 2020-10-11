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
                <div>aenriq.com</div>
                <div className="last-item">pages</div>
            </div>
            <main className="children">
                {children}
            </main>

            <div className="footer">
                    <div id="email">
                        <Mail size={14} strokeWidth={3} color="black" className="social_media" /> {" "}aenriq29@asu.edu
                    </div>
                    <div onClick={() => window.open('https://github.com/aenriq', '_blank')} className="social_media">
                        <GitHub size={14} strokeWidth={3} color="black" /> {" "}github.com/aenriq
                    </div>
                    <div onClick={() => window.open('https://twitter.com/tonioenriquez', "_blank")} className="social_media">
                        <Twitter size={14} strokeWidth={3} color="black" /> {" "}twitter.com/tonioenriquez
                    </div>
            </div>{/*  End of footer dom */}
            
        </div>
        <style jsx>
        {`
            .header{
                margin-botton:50px;
                padding-bottom: 30px;
                display:flex;
                justify-content: space-between;
                font-size:2vh;
                width:40vw;
                height:5vh;
                font-weight:300;
            }

            .social_media{
                cursor:pointer;
            }

            .footer{
                display:flex;
                justify-content: space-between;
                width:40vw;
                height:5vh;
                padding-bot: 30px;
                position: absolute;
                bottom:0;
                font-weight:300;
            }

            .footer div{
                font-size:calc(1vh + .5vw);
            }

            .last-item{
                margin-left:auto;
            }

            .children{

            }
        `}
        </style>

    </>)
}