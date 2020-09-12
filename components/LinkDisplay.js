import Link from 'next/link'
export default function LinkDisplay({url="/", children})
{
    return(
    <>
    <Link href={url}>
        <a>
            {children}
        </a>
    </Link>
        

    <style jsx>
    {`
        a {
            outline: none;
            text-decoration: none;
            color: inherit;
            position: relative;
            z-index: 1;
            white-space: nowrap;
          }
          
          a::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: calc(.35em);
            background-color: #F8E16C;
            z-index: -1;
            transition: height 150ms ease-in-out;
          }
          
          a:hover::before,
          a:focus::before {
            height: 100%;
            transition: height 150ms ease-in-out;
          }
    `}                
    </style>
    </>
    )
}

