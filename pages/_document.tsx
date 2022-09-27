import Document, {Html, Head, Main, NextScript} from 'next/document';
class MyDocument extends Document {
    render() {
        return (
            <Html lang='zh-cn'>
                <Head>
                    <link rel="stylesheet" href="/iconfont/iconfont.css"/>
                    <title>{"李昊翰的博客-关注web前端技术-前端技术博客"}</title>
                    <meta name="Author" content="李昊翰"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    <div id="notifications"/>
                    <div id="backDrop"/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
