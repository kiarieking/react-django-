import React, { Component } from 'react'
import Article from '../components/Article';
import axios from 'axios'
import { Card } from 'antd'

// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'https://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

class ArticleDetailview extends Component {
    state = {
        article : {}
    }

    componentDidMount(){
        const articleId = this.props.match.params.articleID
        axios.get(`http://127.0.0.1:8000/api/${articleId}`)
        .then(res => {
            this.setState({
                article:res.data
            });
            console.log(res.data)
        })
    }

    render() {
        return (
           <Card title={this.state.article.title}>
               <p>{this.state.article.content}</p>
           </Card>
        )
    }
}

export default ArticleDetailview
