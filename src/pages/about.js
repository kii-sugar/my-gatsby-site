// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      趣味
      <ul>
        <li>オーケストラでフルートを吹くこと</li>
        <li>筋トレ</li>
        <li>お菓子作り</li>
      </ul>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage