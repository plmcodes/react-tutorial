import { useState } from 'react'
import Mypage from './mypage'
import './global.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card"

function App() {
 

  return (
    <>
       <h1>humara react | hey , all well </h1>
       <Mypage/>

        <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
        <CardDescription>
          Track progress and recent activity for your Vite app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        Your design system is ready. Start building your next component.
      </CardContent>
    </Card>
       
    </>
  )
}

export default App
