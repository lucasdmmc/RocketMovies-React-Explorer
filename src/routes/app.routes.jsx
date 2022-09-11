import {Routes, Route} from "react-router-dom"

import { Home } from "../pages/Home"
import { MoviePreview } from "../pages/MoviePreview"
import { CreateMovie } from "../pages/CreateMovie"
import { Profile } from "../pages/Profile"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/moviepreview" element={<MoviePreview />}/>
      <Route path="/createmovie" element={<CreateMovie />}/>
      <Route path="/profile/:id" element={<Profile />}/>
    </Routes>
  )
}
