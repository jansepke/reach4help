import React from "react"

// components
import SEO from "src/components/seo"
import Layout from "src/components/layout"
import Header from "src/components/header"
import Footer from "src/components/footer"

// sections
import Home from "src/sections/home/home"
import Reasons from "src/sections/home/reasons"
import GetHelpInfo from "src/sections/home/getHelpInfo"
import GiveHelpInfo from "src/sections/home/giveHelpInfo"
import AboutInfo from "src/sections/home/aboutInfo"
import Partners from "src/sections/home/partners"

function HomePage() {
  return (
    <Layout>
      <SEO />
      <Header />
      <div className="sections">
        <Home />
        <Reasons />
        <GetHelpInfo />
        <GiveHelpInfo />
        <AboutInfo />
      </div>
      <div className="extendedFooter">
        <Partners />
        <Footer transparent />
      </div>
    </Layout>
  )
}

export default HomePage
