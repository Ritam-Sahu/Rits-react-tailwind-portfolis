import { useState } from "react";
import {cn} from "@/lib/utils";



export function SkillSection(){


    const skills = [
        
        //Fronend
        {name: "HTML/CSS", level: 90, category: "frontend"},
        {name: "JavaScript", level: 75, category: "frontend"},
        {name: "Tailwind", level: 80, category: "frontend"},
        {name: "React", level: 70, category: "frontend"},

        //backend
        {name: "Node.js", level: 75, category: "backend"},
        {name: "Express", level: 75, category: "backend"},
        {name: "MongoDB", level: 70, category: "backend"},
        {name: "MySQL", level: 75, category: "backend"},
        {name: "C++", level: 70, category: "backend"},

        //Tools
        {name: "Git/Github", level: 85, category: "tools"},        
        {name: "VS Code", level: 85, category: "tools"},        
        {name: "Appwrite", level: 55, category: "tools"},        
        {name: "Cloudinary", level: 45, category: "tools"},        
    ];

    const [activeCategory, setActiveCategory] = useState("all");

    const categories = ["all", "frontend", "backend", "tools"];

    const filteredSkills = skills.filter((skill)=> activeCategory=== "all" || skill.category === activeCategory)

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category)=>(
                        <button key={category}
                        onClick={()=>setActiveCategory(category)} 
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {filteredSkills.map((skill)=>(
                        <div key={skill.name} className=" bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}} />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
                    
        </section>
    )
}

