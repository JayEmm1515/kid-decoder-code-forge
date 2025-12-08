import React, { useState, useEffect } from "react";
import { Child } from "@/entities/Child";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Users, Baby, Calendar, Edit, Trash2, BookOpen, ArrowRight } from "lucide-react";
import { format, differenceInYears, differenceInMonths } from "date-fns";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

export default function ChildrenPage() {
  const [children, setChildren] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingChild, setEditingChild] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    birth_date: "",
    age_group: "",
    notes: ""
  });

  useEffect(() => {
    loadChildren();
  }, []);

  const loadChildren = async () => {
    try {
      const data = await Child.list('-created_date');
      setChildren(data);
    } catch (error) {
      console.error('Error loading children:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateAgeGroup = (birthDate) => {
    const age = differenceInYears(new Date(), new Date(birthDate));
    if (age <= 2) return "0-2";
    if (age <= 5) return "3-5";
    if (age <= 12) return "6-12";
    return "13-18";
  };

  const formatAge = (birthDate) => {
    const years = differenceInYears(new Date(), new Date(birthDate));
    const months = differenceInMonths(new Date(), new Date(birthDate)) % 12;
   
    if (years === 0) {
      return `${months} month${months !== 1 ? 's' : ''} old`;
    } else if (years < 2) {
      return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''} old`;
    }
    return `${years} years old`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const childData = {
      ...formData,
      age_group: calculateAgeGroup(formData.birth_date)
    };

    try {
      if (editingChild) {
        await Child.update(editingChild.id, childData);
      } else {
        await Child.create(childData);
      }
     
      resetForm();
      loadChildren();
    } catch (error) {
      console.error('Error saving child:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      birth_date: "",
      age_group: "",
      notes: ""
    });
    setEditingChild(null);
    setShowForm(false);
  };

  const handleEdit = (child) => {
    setEditingChild(child);
    setFormData({
      name: child.name,
      birth_date: child.birth_date,
      age_group: child.age_group,
      notes: child.notes || ""
    });
    setShowForm(true);
  };

  const handleDelete = async (childId) => {
    if (window.confirm('Are you sure you want to remove this child? This action cannot be undone.')) {
      try {
        await Child.delete(childId);
        loadChildren();
      } catch (error) {
        console.error('Error deleting child:', error);
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-airy p-4 md:p-8 pb-24">
        <div className="max-w-5xl mx-auto space-y-6">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <PageHeader 
              title="My Children" 
              subtitle="Manage profiles & explore behaviour insights"
            />
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-pill-teal flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Child
            </button>
          </div>

          {showForm && (
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {editingChild ? 'Edit Child' : 'Add New Child'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white/70 text-sm">Child's Name</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter child's name"
                      required
                      className="bg-white/5 border-white/10 text-white rounded-2xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/70 text-sm">Birth Date</Label>
                    <Input
                      type="date"
                      value={formData.birth_date}
                      onChange={(e) => setFormData({...formData, birth_date: e.target.value})}
                      required
                      className="bg-white/5 border-white/10 text-white rounded-2xl"
                    />
                  </div>
                </div>
               
                <div className="space-y-2">
                  <Label className="text-white/70 text-sm">Notes (Optional)</Label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Any additional notes about your child..."
                    rows={3}
                    className="bg-white/5 border-white/10 text-white rounded-2xl"
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button type="button" onClick={resetForm} className="btn-pill">
                    Cancel
                  </button>
                  <button type="submit" className="btn-pill-teal">
                    {editingChild ? 'Update Child' : 'Add Child'}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="grid gap-4">
            {children.length === 0 ? (
              <div className="glass-card p-8 text-center">
                <div className="icon-box icon-box-teal w-16 h-16 mx-auto mb-4">
                  <Baby className="w-8 h-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No children added yet</h3>
                <p className="text-white/50 mb-6">Add your first child to start tracking</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-pill-teal"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add Your First Child
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {children.map((child) => (
                  <div key={child.id} className="glass-card-teal p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal to-mint rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {child.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{child.name}</h3>
                          <p className="text-sm text-white/50">{formatAge(child.birth_date)}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEdit(child)}
                          className="w-9 h-9 rounded-xl stat-card flex items-center justify-center hover:bg-white/10 transition-all"
                        >
                          <Edit className="w-4 h-4 text-white/60" />
                        </button>
                        <button
                          onClick={() => handleDelete(child.id)}
                          className="w-9 h-9 rounded-xl stat-card flex items-center justify-center hover:bg-white/10 transition-all"
                        >
                          <Trash2 className="w-4 h-4 text-white/60" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white/60">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          Born {format(new Date(child.birth_date), "MMM d, yyyy")}
                        </span>
                      </div>
                      <span className="status-badge status-badge-teal">
                        Age Group: {child.age_group} years
                      </span>
                      {child.notes && (
                        <div className="mt-3 p-3 stat-card rounded-xl">
                          <p className="text-sm text-white/60">{child.notes}</p>
                        </div>
                      )}
                      
                      <div className="pt-4 border-t border-white/10">
                        <Link to={`/understanding-behaviour?age=${child.age_group}`}>
                          <button className="w-full btn-pill text-sm flex items-center justify-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Explore {child.age_group} Behaviour Guide
                            <ArrowRight className="w-4 h-4 ml-auto" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
