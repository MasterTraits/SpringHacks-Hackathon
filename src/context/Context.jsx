import runChat from "@/config/gemini";
import { createContext, useState } from "react"
import React from 'react'

export const Context = createContext();


const ContextProvider = (props) => {

       const onSent = async (prompt) => {
      await runChat(prompt)
    }



  const [input, setinput] = useState("")
  const [recentPrompt, setrecentPrompt] = useState("")  
  const [previousPrompt, setPreviousPrompt] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultData, setresultData] = useState("")
  
    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setrecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setinput
    }

  return (
    <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider