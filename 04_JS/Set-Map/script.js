function getAdmins(map){
    let admins = []
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Juliana', 'Admin');
usuarios.set('Karla', 'Admin');
usuarios.set('Davi', 'User');
usuarios.set('Cecília', 'Admin');

console.log(getAdmins(usuarios))