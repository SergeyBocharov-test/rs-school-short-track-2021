/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // if email would have been legit email data type - following code would have work:
  // return email.split('').splice(email.indexOf('@') + 1, email.length - 1).join('');
  const emailSplit = email.split('@');
  return emailSplit[emailSplit.length - 1];
}

module.exports = getEmailDomain;
