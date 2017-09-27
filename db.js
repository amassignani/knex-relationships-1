
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users')
    .where('users.id', id)
    .join('profiles', 'users.id', '=', 'profiles.user_id')
    .first()
}

function addUser (data, connection) {
  const newUser = {
    name: data.name,
    email: data.email
  }
  const newProfile = {
    url: data.url,
    profile_picture: data.image
  }
  return connection('users')
    .insert(newUser)
    .then((newUserIds) => {
      newProfile.user_id = newUserIds[0]
      return connection('profiles')
        .insert(newProfile)
        .then(() => {
          return newUserIds[0]
        })
    })
}
