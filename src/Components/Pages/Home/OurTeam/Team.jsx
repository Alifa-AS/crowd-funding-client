import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";

const members = [
    {
      name: "Anna Gomez",
      role: "Founder & CEO",
      img: "https://i.ibb.co.com/YTjjwRXG/41b52a558b662a35edd420cf12f0358b.jpg",
    },
    {
      name: "Rahim Uddin",
      role: "CTO",
      img: "https://i.ibb.co.com/KM23Vb4/e833ce3390b3e87271fcd109398e4936.jpg",
    },
    {
      name: "Sofia Khan",
      role: "Marketing Head",
      img: "https://i.ibb.co.com/NjkLp59/testimonial-blog-post.jpg",
    },
    {
      name: "Tanjib Hossain",
      role: "Designer",
      img: "https://i.ibb.co.com/LSmdN2r/3044f47175b29502bec376c90fdd11b0.jpg",
    },
  ];

const plugins = [new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: true })];

const Team = () => {
  return (
    <section className="py-16 bg-gray-100">
      {/* Section Title */}
      <div className="text-center py-6">
        <h2 className="text-3xl font-extrabold text-blue-500 drop-shadow-lg">Meet Our Team</h2>
        <p className="text-lg text-blue-400 py-2">The people behind the mission</p>
      </div>

      {/* Flicking Slider */}
      <div className="max-w-6xl mx-auto">
        <Flicking
          align="center"
          circular={true}
          horizontal={true}
          gap={30}
          plugins={plugins}
        >
          {members.map((member, idx) => (
            <div
              key={idx}
              className="relative w-64 h-80 bg-white overflow-hidden rounded-2xl shadow-lg mx-3 group"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              {/* Glass Effect on Hover */}
              <div className="absolute bottom-0 left-0 w-full bg-white/20 backdrop-blur-md text-white p-4 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 rounded-b-2xl">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </Flicking>
      </div>
    </section>
  );
};

export default Team;
