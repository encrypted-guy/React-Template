import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogIMG from './car2.jpg';
import { connect } from 'react-redux';

class Blogs extends Component {
    render() {

        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="card Blogs-each-card " key={post.id}>
                        <img src={BlogIMG} className="card-img-top" alt="" />
                        <div className="card-body">
                            <Link className="hover-cencal" to={`/post/${post.id}`}>
                                <h5 className=" red-color card-title">{post.title}</h5>
                            </Link>
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : null

        return (
            <div>
                <section className="Blogs">
                    <div className="container Blogs-main ">
                        <div className="Blogs-text">
                            <h3>News & Tips</h3>
                        </div>
                        <div className="row Blogs-cards">

                           {postList}
                            

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const MapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(MapStateToProps)(Blogs);