import React, { useEffect, useState, useContext } from "react";
import { Layout, Typography, FloatButton, Image, Pagination, Button, Skeleton, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppProvider";
import NavBar from "../Components/NavBar";
import EndBar from "../Components/EndBar";
import EventCard from "../Components/EventCard";
import ProductCard from "../Components/ProductCard";
import axios from "axios";

export default function HomePage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch API = Axios
        axios.get('http://localhost:3000/items/all').then(({ data }) => {
            console.log(data);
            setProducts(data);
        });
    }, []);

    return (
        <NavBar />
    );
}