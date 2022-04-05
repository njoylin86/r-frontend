import React, { Component } from 'react';
import axios from 'axios';

const endPoint = "https://njoylin.tech/rhyme_backend/api";

class Articles extends Component{
    state = {
        articles:[],
    }

     componentDidMount(){
        axios.get(endPoint + '/getall')
            .then(res => {
                const articles =  res.data;
                this.setState({ articles });
            }
        )
    }

    addArticle = () => {
        const obj = {author:"Joy", title: "min titel", description:"min beskr.", body: "min body"};

        axios.post(endPoint, obj)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    /*gör om till obj*/
    updateArticle = article => {
        /*article.title = "my title";
        article.description = "my descr";
        article.body = "my body";*/
    
        axios.put(endPoint + "/" + article.id, article);
    }

    /*deleteArticle = article => {
        article.id = 1;
        axios.delete(endPoint + article.id);
        const article = this.state.articles.filter(article => a.id !== article.id);
    }*/
    

    render() {
        return (
            <>
                <ul>
                    {
                        this.state.articles
                            .map(article =>
                            <li key={article.id}>{article.title}</li>
                        )
                    }
                </ul>
                <button onClick={this.addArticle}> Add article</button>
                <button onClick={this.deleteArticle}> Delete article</button>
            </>
        );
    }
}

export default Articles;