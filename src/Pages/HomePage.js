import React, { useEffect, useState, useContext } from "react";
import { Layout, Typography, FloatButton, Image, Pagination, Button, Skeleton, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppProvider";
import NavBar from "../Components/NavBar";
import EndBar from "../Components/EndBar";
import EventCard from "../Components/EventCard";
import ProductCard from "../Components/ProductCard";

export default function HomePage() {
    return (
        <NavBar/>
    );
}