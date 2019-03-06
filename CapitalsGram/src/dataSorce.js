class CapitalsData {
    _base = 'https://restcountries.eu/rest/v2/capital/'
  
     async getInfo(url) {
        const res = await fetch(`${this._base}${url}`); 
        return await res.json();
      }
  }

  export default CapitalsData;