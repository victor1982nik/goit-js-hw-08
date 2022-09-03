function saveData(data, key) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    }catch (error) {
    console.error("Set state error: ", error.message);
  }
}

function getData(key) {    
    try { 
        const data = localStorage.getItem(key);
        return data === null ? undefined : JSON.parse(data);
    }catch(error) {
    console.error("Get state error: ", error.message);
  }    
}

export {
    getData,
    saveData
}