import ReadingData from '../data/readingPosts.json'
import listStyles from '../styles/List.module.css'
export default function inspiration()
{
    return(
    <>
        <article >
            <ul>
                {ReadingData.map((readingDetail) => {
                    return(
                        <li className={listStyles.listitem}>
                            <a target="_blank" href={readingDetail.url}>
                                <div className={listStyles.header}>
                                    {readingDetail.title}
                                </div>
                                <div className={listStyles.description}>
                                    {readingDetail.description}
                                </div> 
                            </a>
                        </li>
                    )
                })}
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
