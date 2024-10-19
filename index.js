const axios = require('axios');
const qs = require('qs');

const [username, password] = ["tc no", "şifre"];

// Siteye ilk GET isteği atarak token ve çerezleri al
axios.get('https://wifi.gsb.gov.tr/login.html')
  .then(response => {
    const cookies = response.headers['set-cookie'];
    const viewStateMatch = response.data.match(/name="javax.faces.ViewState" value="(.+?)"/);
    const viewState = viewStateMatch ? viewStateMatch[1] : '';

    // POST isteği için hazırlık yap
    const data = qs.stringify({
      maxRedirects: 5,
      'j_username': username,
      'j_password': password,
      'javax.faces.ViewState': viewState
    });

    // POST isteği gönder
    return axios.post('https://wifi.gsb.gov.tr/j_spring_security_check', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': cookies.join('; ')
      }
    });
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
