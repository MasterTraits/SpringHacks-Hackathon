'use client'

import {useState, createContext} from 'react'

export const UserContext = createContext()

export default function layout({children}) {
  const [searchContent, setSearchContent] = useState("")

  return (
    <main>
      <UserContext.Provider value={[searchContent, setSearchContent]  }>
        {children}
      </UserContext.Provider>
    </main>
  )
}
