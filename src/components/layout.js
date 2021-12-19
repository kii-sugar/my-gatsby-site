import * as React from "react"
import '../styles/global.css'
import { useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  siteTitle
} from './layout.module.css'
import NavBar from "./navbar"
import Footer from "./footer"
// TO DO: 画像の最適化 ナビバーの選択中デザイン
const Layout = ({ pageTitle, children}) => {
  // ほしいリソースを指定 ビルディングブロックコンポーネントにプルするにはuseStateicQueryフック使用
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <title>{ pageTitle }|{ data.site.siteMetadata.title }</title>
      <header className={siteTitle}>{ data.site.siteMetadata.title }</header>
      <NavBar />
      <main class="pt-4">
        <h1 class="my-4 text-3xl text-blue-500/70 font-semibold">{ pageTitle }</h1>
        { children }
      </main>
      <Footer />
    </div>
  )
}

export default Layout