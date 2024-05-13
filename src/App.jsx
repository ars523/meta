
import { Helmet } from 'react-helmet-async'
import './App.css'


function App() {

  return (
    <>
      <Helmet>
        <title>Og image test</title>
        <meta name="description" content="Brief description of your page content for search engines." />
        <meta property="og:title" content="My page title" />
        {/* <meta property="og:description" content="Brief description of your page content for social media sharing." />
        <meta property="og:image" content="https://i0.wp.com/old.baahstore.com/wp-content/uploads/2023/12/7_11zon-3.jpg" />
        <meta property="og:url" content="https://peaceful-kulfi-575843.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My page title" />
        <meta name="twitter:description" content="Brief description of your page content for Twitter." />
        <meta name="twitter:image" content="https://i0.wp.com/old.baahstore.com/wp-content/uploads/2023/12/7_11zon-3.jpg" /> */}

        {/* <meta property="og:image" content="https://i0.wp.com/old.baahstore.com/wp-content/uploads/2024/01/3_11zon-4.jpg?fit=1200%2C1200&amp;ssl=1"></meta>
        <meta property="og:title" content="Baah Boho Round Jute Bag"></meta>
        <meta name="twitter:title" content="Baah Boho Round Jute Bag"></meta>
        <meta name="twitter:description" content="Brief description of your page content for Twitter."></meta>
        <meta name="twitter:image" content="https://i0.wp.com/old.baahstore.com/wp-content/uploads/2024/01/3_11zon-4.jpg?fit=1200%2C1200&amp;ssl=1"></meta> */}

        {/* <!-- Primary Meta Tags --> */}
        <title>The Shaaree</title>
        <meta name="title" content="The Shaaree" />
        <meta name="description" content="The best sharee of the world" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://main--peaceful-kulfi-575843.netlify.app/" />
        <meta property="og:title" content="The Shaaree" />
        <meta property="og:description" content="The best sharee of the world" />
        <meta property="og:image" content="https://cdn.ideahubbd.com/BaahStore/OldImages/aec9f85e-67d4-4a18-b134-6cd64e3b1a55.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cdn.ideahubbd.com/BaahStore/OldImages/aec9f85e-67d4-4a18-b134-6cd64e3b1a55.jpg" />
        <meta property="twitter:title" content="The Shaaree" />
        <meta property="twitter:description" content="The best sharee of the world" />
        <meta property="twitter:image" content="https://cdn.ideahubbd.com/BaahStore/OldImages/aec9f85e-67d4-4a18-b134-6cd64e3b1a55.jpg" />

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </Helmet>

      <div>
        <h1>Hello world</h1>
      </div>
    </>
  )
}

export default App
