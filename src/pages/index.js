import React from "react"
import Header from '../components/Navbar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.module.css";
import { Header_Background } from "../components/Header/Header_Background";
export default function Home() {
  return <div>
    <Header />
    <Header_Background  />
    </div>
}
