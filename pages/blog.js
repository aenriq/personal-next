
import listStyles from '../styles/List.module.css'
export default function blog()
{
    return(
    <>
        <article className="container">
            <ul>
              <li>nothing yet</li>
            </ul>    
        </article>  
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
            
            a:hover,
            a:focus{
                color:#727272;
                transition: height 150ms ease-in-out;
            }
        `}   
        </style>
    </>)
}
