import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Navbar from "./components/Navbar";
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Vision } from './components/Vision';
import { BlogTeaser } from './components/BlogTeaser';
import { Duxbury } from './components/Duxbury';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function Main() {
  return (
    <main className="text-gray-800 bg-white scroll-smooth">
      <Navbar />
