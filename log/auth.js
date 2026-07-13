"use client";

export function registerUser(user) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const newUser = {
    name: user.name.trim(),
    email: user.email.trim().toLowerCase(),
    password: user.password,
  };

  const exists = users.find(
    (item) => item.email === newUser.email
  );

  if (exists) {
    return {
      success: false,
      message: "Email already exists.",
    };
  }

  users.push(newUser);

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  return {
    success: true,
    message: "Registration successful.",
  };
}


export function loginUser({ email, password }) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    console.log("Users from storage:", users);
    console.log("Email entered:", email);
    console.log("Password entered:", password);
  
    const user = users.find((item) => {
      console.log(
        "Checking:",
        item.email,
        item.password
      );
  
      return (
        item.email === email.trim().toLowerCase() &&
        item.password === password
      );
    });
  
    console.log("Found user:", user);
  
    if (!user) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }
  
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );
  
    return {
      success: true,
      user,
    };
  }


export function getCurrentUser() {
  const user = localStorage.getItem("currentUser");

  return user ? JSON.parse(user) : null;
}


export function logoutUser() {
  localStorage.removeItem("currentUser");
}