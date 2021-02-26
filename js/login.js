$('#btn-login-submit').click(function() {

    let data = {
        "username": document.querySelector('#username').value,
        "password": document.querySelector('#password').value
    }

    let checkUsername = data.username.substring(0, 3)
    console.log('checkUsername: ',checkUsername)
    if (checkUsername.toLowerCase() === "ufa") {
        console.log('checkUsername: ',checkUsername)
    
        axios.post('https://ambbet.secure-restapi.com/spa/member/login', data).then(function(res) {
            
            if (res.data.code === 0) {
                sessionStorage.setItem("token", res.data.result.access_token);
                sessionStorage.setItem('user', JSON.stringify(res.data.result.profile));
                location.href = 'game.html'
            } else if (res.data.code == 1001 || res.data.code == 1003 || res.data.code == 1002) {
                alert('รหัสผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง');
            } else if (res.data.code == 1006) {
                alert('รหัสผู้ใช้ ถูกระงับ');
            } else if (res.data.code == 1007) {
                alert('เอเยนของท่านถูกระงับ');
            } else if (res.data.code == 1008) {
                alert('รหัสผ่าน ถูกระงับ');
            }

        }).catch(function(error) {
            console.log(error);
        });
    } else {
        alert('รหัสผู้ใช้ไม่ถูกต้อง');
    }
})

$(function() {
    if (sessionStorage.getItem("token")) {
        location.href = 'game.html'
    }
})
