import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage/HomePage'
import CategoryPage from '../pages/CategoryPage/CategoryPage'
import SinglePage from '../pages/SinglePage/SinglePage'

const rootRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/category' element={<CategoryPage />} />
            <Route path='/category/:id' element={<SinglePage />} />
        </Routes>
    )
}

export default rootRouter
