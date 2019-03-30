import React from 'react';
import { Link } from 'react-router-dom';


const NewsNavItem = (props) => {
    const formatDate = () => {
        const nameMounth = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzesnia', 'października', 'listopada', 'grudnia'];

        const date = new Date(props.date);

        return `${date.getDate()} ${nameMounth[date.getMonth()]} ${date.getFullYear()}`;
    }

    const { slug, title, mediaID, id, content, author } = props;
    const date = formatDate();

    return (
        <li>
            <Link to={{
                pathname: `/aktualnosci/${slug}`,
                state: {
                    mediaID,
                    id,
                    title,
                    content,
                    date,
                    author,
                }
            }} title={title}>{title}<span>{date}</span></Link>
        </li>
    )
}

const NewsNav = (props) => {

    const news = [...props.news].slice(0, 8).map(item => {
        return (
            <NewsNavItem
                key={item.id}
                id={item.id}
                slug={item.slug}
                title={item.title.rendered}
                author={item.author}
                content={item.content.rendered}
                date={item.date}
                mediaID={item.featured_media} />
        )
    });

    return (
        <ul>
            {news}
        </ul>
    );
}

export default NewsNav;