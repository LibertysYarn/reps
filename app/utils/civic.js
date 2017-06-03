var axios = require('axios');

let civic_key=CIVIC;
let params = "?key=" + civic_key;
let address = '&address=' + user_address;
let levels = '&levels=' + user_levels;


function getProfile (address) {
  return axios.get('https://www.googleapis.com/civicinfo/v2/representatives' + params + address + '&includeOffices=true' + levels);
    .then(function (rep) {
      return rep.data;
    });
}

function getElections() {
	return axios.get('https://www.googleapis.com/civicinfo/v2/elections?' + params);
	.then(function(elections) {
		return elections.name;
});
}


