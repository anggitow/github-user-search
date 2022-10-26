import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="min-h-screen bg-blue-50 font-space-mono">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
