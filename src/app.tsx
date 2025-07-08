import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {CreateRoom} from './pages/create-room.tsx'
import {Room} from './pages/room.tsx'

const queryClient = new QueryClient()

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<CreateRoom/>} index/>
                    <Route element={<Room/>} path="/room/:roomId"/>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}
