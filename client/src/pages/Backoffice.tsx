/**
 * Backoffice - Gestion des Projets et Compétences
 * 
 * Page d'administration pour modifier facilement :
 * - Projets (ajouter, modifier, supprimer)
 * - Compétences (ajouter, modifier, supprimer)
 * 
 * Accès : /backoffice
 * 
 * Les données sont stockées dans localStorage pour la persistance.
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Trash2, Plus, Edit2, Save, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: "Cartographie SIG" | "Analyse Data" | "Visualisation";
  image: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

export default function Backoffice() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  const [activeTab, setActiveTab] = useState<"projects" | "skills">("projects");
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingSkillCategory, setEditingSkillCategory] = useState<number | null>(null);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Charger les données au montage
  useEffect(() => {
    const savedProjects = localStorage.getItem("portfolio_projects");
    const savedSkills = localStorage.getItem("portfolio_skills");
    const isAuth = localStorage.getItem("backoffice_auth") === "true";

    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedSkills) setSkills(JSON.parse(savedSkills));
    setIsAuthenticated(isAuth);
  }, []);

  // Authentification simple
  const handleLogin = () => {
    if (password === "admin123") {
      setIsAuthenticated(true);
      localStorage.setItem("backoffice_auth", "true");
    } else {
      alert("Mot de passe incorrect");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("backoffice_auth");
    setPassword("");
  };

  // Gestion des projets
  const addProject = () => {
    const newProject: Project = {
      id: `project-${Date.now()}`,
      title: "Nouveau Projet",
      description: "Description du projet",
      category: "Cartographie SIG",
      image: "",
      tags: [],
      link: "",
      linkLabel: "Voir le projet",
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (id: string, updated: Project) => {
    const newProjects = projects.map((p) => (p.id === id ? updated : p));
    setProjects(newProjects);
    localStorage.setItem("portfolio_projects", JSON.stringify(newProjects));
  };

  const deleteProject = (id: string) => {
    const newProjects = projects.filter((p) => p.id !== id);
    setProjects(newProjects);
    localStorage.setItem("portfolio_projects", JSON.stringify(newProjects));
  };

  // Gestion des compétences
  const addSkillCategory = () => {
    const newCategory: SkillCategory = {
      category: "Nouvelle Catégorie",
      skills: [{ name: "Nouvelle Compétence", level: 3 }],
    };
    setSkills([...skills, newCategory]);
  };

  const updateSkillCategory = (index: number, updated: SkillCategory) => {
    const newSkills = [...skills];
    newSkills[index] = updated;
    setSkills(newSkills);
    localStorage.setItem("portfolio_skills", JSON.stringify(newSkills));
  };

  const deleteSkillCategory = (index: number) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
    localStorage.setItem("portfolio_skills", JSON.stringify(newSkills));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Backoffice</h1>
          <p className="text-muted-foreground mb-6">
            Connectez-vous pour gérer votre portfolio
          </p>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full">
              Se connecter
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Mot de passe par défaut : admin123
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-foreground">Backoffice Portfolio</h1>
          <Button variant="outline" onClick={handleLogout}>
            Déconnexion
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("projects")}
            className={`pb-4 px-4 font-medium transition-colors ${
              activeTab === "projects"
                ? "text-accent border-b-2 border-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Projets
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`pb-4 px-4 font-medium transition-colors ${
              activeTab === "skills"
                ? "text-accent border-b-2 border-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Compétences
          </button>
        </div>

        {/* Projets Tab */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Gestion des Projets</h2>
              <Button onClick={addProject} className="gap-2">
                <Plus className="w-4 h-4" />
                Ajouter un projet
              </Button>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="p-6">
                  {editingProject?.id === project.id ? (
                    <ProjectForm
                      project={editingProject}
                      onChange={(updated) => setEditingProject(updated)}
                      onSave={() => {
                        updateProject(project.id, editingProject);
                        setEditingProject(null);
                      }}
                      onCancel={() => setEditingProject(null)}
                    />
                  ) : (
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-2">{project.description}</p>
                        <div className="flex gap-2 mb-2">
                          <span className="inline-block px-2 py-1 bg-secondary text-sm rounded">
                            {project.category}
                          </span>
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-2 py-1 bg-accent/20 text-accent text-sm rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {project.link && (
                          <p className="text-sm text-muted-foreground">
                            Lien: <a href={project.link} className="text-accent hover:underline">{project.link}</a>
                          </p>
                        )}
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingProject(project)}
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteProject(project.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Compétences Tab */}
        {activeTab === "skills" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Gestion des Compétences</h2>
              <Button onClick={addSkillCategory} className="gap-2">
                <Plus className="w-4 h-4" />
                Ajouter une catégorie
              </Button>
            </div>

            <div className="grid gap-6">
              {skills.map((category, idx) => (
                <Card key={idx} className="p-6">
                  {editingSkillCategory === idx ? (
                    <SkillCategoryForm
                      category={category}
                      onChange={(updated) => {
                        updateSkillCategory(idx, updated);
                        setEditingSkillCategory(null);
                      }}
                      onCancel={() => setEditingSkillCategory(null)}
                    />
                  ) : (
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {category.category}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {category.skills.map((skill) => (
                            <div key={skill.name} className="text-sm">
                              <p className="font-medium text-foreground">{skill.name}</p>
                              <div className="flex gap-1 mt-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${
                                      i < skill.level ? "bg-accent" : "bg-border"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingSkillCategory(idx)}
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteSkillCategory(idx)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Composants de formulaire
function ProjectForm({
  project,
  onChange,
  onSave,
  onCancel,
}: {
  project: Project;
  onChange: (project: Project) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="space-y-4">
      <Input
        placeholder="Titre"
        value={project.title}
        onChange={(e) => onChange({ ...project, title: e.target.value })}
      />
      <Textarea
        placeholder="Description"
        value={project.description}
        onChange={(e) => onChange({ ...project, description: e.target.value })}
      />
      <Select
        value={project.category}
        onValueChange={(value) =>
          onChange({
            ...project,
            category: value as "Cartographie SIG" | "Analyse Data" | "Visualisation",
          })
        }
      >
        <option value="Cartographie SIG">Cartographie SIG</option>
        <option value="Analyse Data">Analyse Data</option>
        <option value="Visualisation">Visualisation</option>
      </Select>
      <Input
        placeholder="URL de l'image"
        value={project.image}
        onChange={(e) => onChange({ ...project, image: e.target.value })}
      />
      <Input
        placeholder="Tags (séparés par des virgules)"
        value={project.tags.join(", ")}
        onChange={(e) => onChange({ ...project, tags: e.target.value.split(",").map((t) => t.trim()) })}
      />
      <Input
        placeholder="Lien du projet"
        value={project.link || ""}
        onChange={(e) => onChange({ ...project, link: e.target.value })}
      />
      <Input
        placeholder="Label du bouton"
        value={project.linkLabel || ""}
        onChange={(e) => onChange({ ...project, linkLabel: e.target.value })}
      />
      <div className="flex gap-2">
        <Button onClick={onSave} className="gap-2">
          <Save className="w-4 h-4" />
          Enregistrer
        </Button>
        <Button variant="outline" onClick={onCancel} className="gap-2">
          <X className="w-4 h-4" />
          Annuler
        </Button>
      </div>
    </div>
  );
}

function SkillCategoryForm({
  category,
  onChange,
  onCancel,
}: {
  category: SkillCategory;
  onChange: (category: SkillCategory) => void;
  onCancel: () => void;
}) {
  return (
    <div className="space-y-4">
      <Input
        placeholder="Nom de la catégorie"
        value={category.category}
        onChange={(e) => onChange({ ...category, category: e.target.value })}
      />
      <div className="space-y-3">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="flex gap-2">
            <Input
              placeholder="Compétence"
              value={skill.name}
              onChange={(e) => {
                const newSkills = [...category.skills];
                newSkills[idx].name = e.target.value;
                onChange({ ...category, skills: newSkills });
              }}
            />
            <Select
              value={skill.level.toString()}
              onValueChange={(value) => {
                const newSkills = [...category.skills];
                newSkills[idx].level = parseInt(value);
                onChange({ ...category, skills: newSkills });
              }}
            >
              {[1, 2, 3, 4, 5].map((level) => (
                <option key={level} value={level.toString()}>
                  Niveau {level}
                </option>
              ))}
            </Select>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => {
                const newSkills = category.skills.filter((_, i) => i !== idx);
                onChange({ ...category, skills: newSkills });
              }}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        onClick={() =>
          onChange({
            ...category,
            skills: [...category.skills, { name: "Nouvelle Compétence", level: 3 }],
          })
        }
      >
        <Plus className="w-4 h-4" />
        Ajouter une compétence
      </Button>
      <div className="flex gap-2">
        <Button onClick={() => onChange(category)} className="gap-2">
          <Save className="w-4 h-4" />
          Enregistrer
        </Button>
        <Button variant="outline" onClick={onCancel} className="gap-2">
          <X className="w-4 h-4" />
          Annuler
        </Button>
      </div>
    </div>
  );
}
