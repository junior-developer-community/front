import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css" />
                    <meta property="og:title" content="Playground" />
                    <meta property="og:description" content="React playground" />
                    <meta
                        property="og:image"
                        content=""
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
