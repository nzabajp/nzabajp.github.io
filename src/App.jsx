import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './routes/Home'
import Footer from './components/Footer'
import ProjectPage from './routes/ProjectPage'
import GlobalStyle from './components/GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
