function solution(id_pw, db) {
    const [login_id, login_pw] = id_pw;
    let status = "fail";
    
    db.forEach(([id, pw]) => {
       if(login_id === id) {
           if(login_pw === pw) return 'login';
           status = 'wrong pw';
       }
    });
    
    return status;
}