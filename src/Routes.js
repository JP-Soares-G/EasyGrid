import React from 'react'
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import PublicRoute from './components/PublicRoute/Index';
import Dashboard from './pages/Dashboard/Index';
import Disciplines from './pages/Disciplines/Index';
import GenerateResults from './pages/GenerateResults/Index';
import Login from './pages/Login/Index'
import Preference from './pages/Preference/Index';
import Professors from './pages/Professors/Index';
import Results from './pages/Results/Index';
import Signup from './pages/Signup/Index';
import Turns from './pages/Turns/Index';
import {useSelector} from 'react-redux'
import PrivateRoute from './components/PrivateRoute/Index';
import Institution from './pages/institution/Index';
import Course from './pages/Course/Index';
import CoursesSubPage from './pages/institution/pieces/CoursesSubPage';

function Routes() {
    const {user} = useSelector(state => state.auth)
    return (
        <BrowserRouter>
            <Router>
                {/* <Route path="/" element={<Login />} /> */}
                <Route exact path="/" element={<PublicRoute isAuthenticated={!!user} />}>
                    <Route exact path="/" element={<Login />} />
                </Route>
                <Route exact path="/signup" element={<PublicRoute isAuthenticated={!!user} />}>
                    <Route exact path="/signup" element={<Signup />} />
                </Route>
                
                <Route exact path="/dashboard" element={<PrivateRoute isAuthenticated={!!user} />}>
                    <Route path="/dashboard" element={<Dashboard />} >
                        <Route path="results" element={<Results />} />
                        <Route path="disciplines" element={<Disciplines />} />
                        <Route path="professors" element={<Professors />} />
                        <Route path="turns" element={<Turns />} />
                        <Route  path="institution" element={<Institution />} />
                        <Route  path="institution/:id" element={<CoursesSubPage />} />
                        <Route path="course" element={<Course />} />
                        <Route path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                                </main>
                            }
                        />
                    </Route>
                </Route>
                <Route exact path="/dashboard/generateresults" element={<PrivateRoute isAuthenticated={!!user} />}>
                    <Route path="/dashboard/generateresults" element={<GenerateResults />} />
                </Route>
                {/* <Route exact path="/dashboard/professors/:id" element={<PrivateRoute isAuthenticated={!!user} />}>
                    <Route path="/dashboard/professors/:id" element={<Preference />} />
                </Route> */}
                
                <Route path="/dashboard/professors/:id" element={<Preference />} />
                <Route path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Router>
        </BrowserRouter>
    )
}

export default Routes