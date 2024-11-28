export default function GetUserDetails() {
  let users=JSON.parse(localStorage.getItem('toDoAppUser'));
  return users;
}
