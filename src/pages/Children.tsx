import React, { useState, useEffect } from "react";
import { Child } from "@/entities/Child";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Users, Baby, Calendar, Edit, Trash2, BookOpen, ArrowRight } from "lucide-react";
import { format, differenceInYears, differenceInMonths } from "date-fns";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

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
      <div className="min-h-screen bg-white p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Understanding Your Child
              </h1>
              <p className="text-muted-foreground mt-2">Manage your children's profiles and explore age-appropriate behaviour insights</p>
            </div>
            <Button
              onClick={() => setShowForm(!showForm)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Child
            </Button>
          </div>

          {showForm && (
            <Card className="mb-8 bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-ink">
                  {editingChild ? 'Edit Child' : 'Add New Child'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-muted">Child's Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter child's name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birth_date" className="text-muted">Birth Date</Label>
                      <Input
                        id="birth_date"
                        type="date"
                        value={formData.birth_date}
                        onChange={(e) => setFormData({...formData, birth_date: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                 
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-muted">Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      placeholder="Any additional notes about your child..."
                      rows={3}
                    />
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-gradient-to-r from-rose to-peach text-white">
                      {editingChild ? 'Update Child' : 'Add Child'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-6">
            {children.length === 0 ? (
              <Card className="bg-white border-slate-200">
                <CardContent className="text-center py-12">
                  <Baby className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-ink mb-2">No children added yet</h3>
                  <p className="text-muted mb-6">Add your first child to start tracking</p>
                  <Button
                    onClick={() => setShowForm(true)}
                    className="bg-gradient-to-r from-rose to-peach text-white"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Your First Child
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {children.map((child) => (
                  <Card key={child.id} className="bg-white border-slate-200 hover:shadow-lg transition-all">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">
                              {child.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <CardTitle className="text-lg text-foreground">{child.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{formatAge(child.birth_date)}</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(child)}
                            className="text-muted-foreground hover:bg-muted hover:text-primary"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(child.id)}
                            className="text-muted-foreground hover:bg-muted hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Born {format(new Date(child.birth_date), "MMM d, yyyy")}
                            </span>
                          </div>
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            Age Group: {child.age_group} years
                          </div>
                          {child.notes && (
                            <div className="mt-3 p-3 bg-muted rounded-lg">
                              <p className="text-sm text-muted-foreground">{child.notes}</p>
                            </div>
                          )}
                          
                          <div className="pt-4 border-t">
                            <Link to={`/understanding-behaviour?age=${child.age_group}`}>
                              <Button 
                                variant="outline" 
                                className="w-full text-sm gap-2 hover:bg-primary hover:text-primary-foreground"
                              >
                                <BookOpen className="w-4 h-4" />
                                Explore {child.age_group} Behaviour Guide
                                <ArrowRight className="w-4 h-4 ml-auto" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}