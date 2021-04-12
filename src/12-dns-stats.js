/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // console.log('domains :');
  // console.log(domains);

  if (domains.length === 0) return {};

  const objectDNS = {}; // result
  for (let i = 0; i < domains.length; i++) {
    // console.log(`= = = =`)
    // console.log(`i : ${i} :: ${domains[i]}`)
    const domainStorage = []; // temp storage for domain names
    let domainCollector = []; // temp domain name accumulator
    let domainTreeCollector = ''; // temp domain tree accumulator

    for (let j = domains[i].length - 1; j > -1; j--) {
      // console.log(`- - - -`);
      // console.log(`j : ${j} :: ${domains[i][j]}`);
      if (domains[i][j] !== ('.')) {
        domainCollector.push(domains[i][j]);
        // console.log(`domainCollector : ${domainCollector}`);
      }
      // console.log (`not a dot or the head - ${domains[i][j] === ('.') || j === 0}`);
      if (domains[i][j] === ('.') || j === 0) {
        domainTreeCollector += `.${domainCollector.reverse().join('')}`;
        domainStorage.push(domainTreeCollector);
        domainCollector = [];
        // console.log(`domainTreeCollector : ${domainTreeCollector}`);
        // console.log(`domainStorage : ${domainStorage}`);
      }
    }
    // console.log('* * *')
    /* Writing accumulated domains to objectDNS */
    for (let k = 0; k < domainStorage.length; k++) {
      // console.log(`domainStorage[${k}] : ${domainStorage[k]}`)
      if (!Object.prototype.hasOwnProperty.call(objectDNS, domainStorage[k])) {
        objectDNS[domainStorage[k]] = 1;
      } else {
        objectDNS[domainStorage[k]]++;
      }
      // console.log(objectDNS)
    }
  }
  // console.log(`result :`)
  return objectDNS;
}

module.exports = getDNSStats;
