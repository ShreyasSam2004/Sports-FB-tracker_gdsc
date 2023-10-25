export const fetchFixtures = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key":  "7aac980ff3msh93c81d21d90965cp1dee86jsnaac8ce58a3fb",

        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };
  
    const result = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((err) => console.error(err));
  
    return result;
  };

  export const fetchNavbarFixtures = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key":  "7aac980ff3msh93c81d21d90965cp1dee86jsnaac8ce58a3fb",

        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };
  
    const result = await fetch(
        'https://api-football-v1.p.rapidapi.com/v3/fixtures?next=50' ,


      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((err) => console.error(err));
  
    return result;
  };
   
  export const fetchNavbarResults = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key":  "7aac980ff3msh93c81d21d90965cp1dee86jsnaac8ce58a3fb",

        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };
  
    const result = await fetch(
        'https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead',


      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((err) => console.error(err));
  
    return result;
  };

  export const fetchNavbarTopScorer = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key":  "7aac980ff3msh93c81d21d90965cp1dee86jsnaac8ce58a3fb",

        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };
  
    const result = await fetch(
        'https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2020',


      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((err) => console.error(err));
  
    return result;
  };

  export const fetchNavbarPlayer = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7aac980ff3msh93c81d21d90965cp1dee86jsnaac8ce58a3fb",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players', options);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching injuries:", error);
      throw error; // Re-throw the error to handle it in the component.
    }
  };
  




 