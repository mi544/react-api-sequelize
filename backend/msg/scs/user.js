module.exports = {
  found: (u) => ({ status: 'success', msg: 'User found', result: u }),
  created: (u) => ({ status: 'success', msg: 'User created', result: u })
}
