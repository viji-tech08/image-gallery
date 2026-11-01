
import React from "react";
import "./App.css";

// Array of Objects
const images = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
        title: "Mountain Escape",
        description: "Enjoy the beauty of peaceful mountains."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        title: "Ocean Paradise",
        description: "Discover the beauty of blue oceans."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
        title: "Green Forest",
        description: "Explore the beauty of green nature."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
        title: "Beautiful Lake",
        description: "Relax with stunning lake views."
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        title: "Snowy Mountains",
        description: "Experience the magic of snowy peaks."
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800",
        title: "Golden Sunrise",
        description: "Start your day with a beautiful sunrise."
    }
];

// Reusable Image Card Component
function ImageCard(props) {
    return (
        <div className="image-card">
            <img src={props.image} alt={props.title} />

            <div className="card-content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

// Main Component
function App() {
    return (
        <>
            <div className="gallery-heading">
                <h1>Image Gallery</h1>
                <p>
                    Explore beautiful moments captured through photography.
                </p>
            </div>

            <div className="gallery">
                {images.map(function(item) {
                    return (
                        <ImageCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default App;
