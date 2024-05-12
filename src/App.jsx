
import './App.css'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <>
      <Helmet>
        <title>Og image test</title>
        <meta name="description" content="Brief description of your page content for search engines." />

        <meta property="og:title" content="My page title" />
        <meta property="og:description" content="Brief description of your page content for social media sharing." />
        <meta property="og:image" content="https://i0.wp.com/old.baahstore.com/wp-content/uploads/2023/12/7_11zon-3.jpg?fit=1200%2C1200&ssl=1" />
        <meta property="og:url" content="https://i0.wp.com/old.baahstore.com/wp-content/uploads/2023/12/7_11zon-3.jpg?fit=1200%2C1200&ssl=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My page title" />
        <meta name="twitter:description" content="Brief description of your page content for Twitter." />
        <meta name="twitter:image" content="https://i0.wp.com/old.baahstore.com/wp-content/uploads/2023/12/7_11zon-3.jpg?fit=1200%2C1200&ssl=1" />
      </Helmet>
      <div>
        <h1>Hello world</h1>
      </div>
    </>
  )
}

export default App
