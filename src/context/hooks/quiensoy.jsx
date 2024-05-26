export const QuienSoy = async () => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
  
    // Devuelve el username si ambos están presentes y válidos
    return username && token ? username : null;
  };
  