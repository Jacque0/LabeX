import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage'

export default function RouteComponent() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/trips/list' element={<ListTripsPage/>} />
          <Route path='/trips/application' element={<ApplicationFormPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/admin/trips/list' element={<AdminHomePage />} />
          <Route path='/admin/trips/create' element={<CreateTripPage />} />
          <Route path='/admin/trips/:id' element={<TripDetailsPage />} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
    </BrowserRouter>
  )
}
