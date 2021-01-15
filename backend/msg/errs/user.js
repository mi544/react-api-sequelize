module.exports = {
  notFound: { status: 'error', msg: 'User not found' },
  notProvided: { status: 'error', msg: 'Username not provided' },
  alreadyUsed: { status: 'error', msg: 'That username is already used' },
  generic: { status: 'error', msg: 'User error' },
  validation: (m) => ({ status: 'error', msg: 'Validation error', details: m })
}
