import { useEffect, type ReactNode } from "react"

type Props = {
  id: string,
  children: ReactNode
}

export const Button = ({children, id}:Props) => {
  useEffect(() => {
    console.log(id)
  }, [])

  return (<button>{children}</button>)
}