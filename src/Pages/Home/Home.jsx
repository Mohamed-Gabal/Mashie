import React from "react";
import "./Home.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Slider from '../../Components/Slider/Slider.jsx';
import AddList from '../../Components/AddList/AddList';
import CategoriesSection from "../../Components/CategoriesSection/CategoriesSection";
import BlogCard from "../../Components/BlogCard/BlogCard";
import CarCard from "../../Components/CarCard/CarCard";
import SellSeaction from "../../Components/SellSeaction/SellSeaction";

const Home = () => {
  return (
      <div className="home-container">
        <SearchBar />
        <Slider />
        <AddList />
        <CategoriesSection />
        <BlogCard />
        <CarCard />
        <SellSeaction />
      </div>
  );
};
export default Home;
