import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Project } from "@/data/projects";
import { Badge } from "./Badge";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-32 last:mb-0"
    >
      {/* Visual Side (Image/Mockup) */}
      <div className={cn(
        "lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden bg-surface shadow-sm border border-border/50 transition-all duration-500 group-hover:shadow-xl group-hover:border-asphalt/10",
        index % 2 === 1 ? "lg:order-2" : "lg:order-1"
      )}>
        {/* Abstract Placeholder UI if image fails or for initial state */}
        <div className="absolute inset-0 bg-gradient-to-br from-platinum to-surface flex items-center justify-center">
           <div className="text-center p-8 opacity-40">
             <div className="w-16 h-16 bg-asphalt/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
               <span className="font-mono text-2xl font-bold text-asphalt/40">{index + 1}</span>
             </div>
             <p className="text-sm font-mono uppercase tracking-widest text-asphalt">Project Visual</p>
           </div>
        </div>
        
        {/* Actual Image */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Side */}
      <div className={cn(
        "lg:col-span-5 flex flex-col justify-center",
        index % 2 === 1 ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"
      )}>
        <div className="mb-6">
          <span className="inline-block text-xs font-mono uppercase tracking-wider text-grey-apple mb-2">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-medium text-asphalt tracking-tight mb-3">
            {project.title}
          </h3>
          <p className="text-lg text-grey-apple font-light leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-asphalt mb-2">The Problem</h4>
            <p className="text-sm text-grey-apple leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-asphalt mb-2">The Solution</h4>
            <p className="text-sm text-grey-apple leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-asphalt mb-3">Impact</h4>
          <div className="flex flex-wrap gap-2">
            {project.impact.map((metric, i) => (
              <Badge key={i} variant="default" className="py-1 px-3 bg-asphalt text-white border-none">
                {metric}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tools.map((tool, i) => (
            <Badge key={i} variant="outline">
              {tool}
            </Badge>
          ))}
        </div>

        {/* Action */}
        <button className="group/btn inline-flex items-center text-sm font-medium text-asphalt hover:text-grey-apple transition-colors">
          <span className="border-b border-asphalt group-hover/btn:border-grey-apple pb-0.5 transition-colors">
            View Case Study
          </span>
          <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </button>
      </div>
    </motion.div>
  );
};
