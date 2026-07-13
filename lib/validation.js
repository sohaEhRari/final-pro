export function validateOpportunity(formData) {
    let errors = {};
  
    if (!formData.title.trim()) {
      errors.title = "Title is required";
    }
  
    if (!formData.organization.trim()) {
      errors.organization = "Organization is required";
    }
  
    if (!formData.category.trim()) {
      errors.category = "Category is required";
    }
  
    if (!formData.location.trim()) {
      errors.location = "Location is required";
    }
  
    if (!formData.deadline.trim()) {
      errors.deadline = "Deadline is required";
    }
  
    if (!formData.description.trim()) {
      errors.description = "Description is required";
    }
  
    if (!formData.requirements.trim()) {
      errors.requirements = "Requirements are required";
    }
  
    if (!formData.applyLink.trim()) {
      errors.applyLink = "Application link is required";
    }
  
    return errors;
  }