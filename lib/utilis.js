export function getOpportunity() {
    if (typeof window === "undefined") {
      return [];
    }
  
    const data = localStorage.getItem("opportunities");
    return data ? JSON.parse(data) : [];
  }
  
  export function addOpportunity(opportunity) {
    const oldData = getOpportunity();
  
    const newOpportunity = {
      id: Date.now(),
      ...opportunity,
    };
  
    const updated = [...oldData, newOpportunity];
  
    localStorage.setItem("opportunities", JSON.stringify(updated));
  }
  
  export function deleteOpportunity(id) {
    const data = getOpportunity();
  
    const filtered = data.filter((item) => item.id !== id);
  
    localStorage.setItem("opportunities", JSON.stringify(filtered));
  }
  
  export function updateOpportunity(updatedOpportunity) {
    const data = getOpportunity();
  
    const updated = data.map((item) =>
      item.id === updatedOpportunity.id ? updatedOpportunity : item
    );
  
    localStorage.setItem("opportunities", JSON.stringify(updated));
  }