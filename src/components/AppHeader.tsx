import { ReactNode } from "react";
import './AppHeader.css'

interface Props{
    children: ReactNode
}

export const AppHeader = (props: Props) => (
    <header className="App-header">{ props.children }</header>
)