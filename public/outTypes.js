// galim suteikti pravarde(alias) bet kokiam tipui
const user2 = {
    id: 2,
    name: 'Jane',
    isAdmin: false,
};
const user1 = {
    id: 1,
    name: 'James',
    isAdmin: true,
};
const usersArr = [];
function userInfo(userObj) {
    // userObj.name;
    const rez = `${userObj.name} is ${userObj.isAdmin ? '' : 'not '}admin`;
    // userObj.name is admin
    // userObj.name is not admin
    console.log(rez);
}
export {};
