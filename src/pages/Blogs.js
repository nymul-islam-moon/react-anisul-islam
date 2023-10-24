import React, {useState} from "react";
import {blogsData} from "../data";
import {Link} from "react-router-dom";

const Blogs = () => {
    const [ blogs, setBlogs ] = useState(blogsData);

    const truncateString = (str, num) => {
        if ( str.length > num ) {
            return str.slice(0, num) + " ...";
        } else {
            return str;
        }
    }

    return (
        <div>
            <h1>Blog</h1>
            <section>
                {blogs.map((blog) => {
                    const { id, title, body } = blog;
                    return <article key={id}>
                        <h3>{title}</h3>
                        <p>{truncateString(body, 100)} <Link to={title} className="blog-link" >Learn more </Link></p>

                    </article>
                })}
            </section>
        </div>
    );
};

export default Blogs;

// blogs / Blog
// blogs / Blog