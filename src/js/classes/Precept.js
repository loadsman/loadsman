/**
 * @class Precept
 * @property body {String}
 * @property path {String}
 * @property name {Number}
 * @property method {String}
 * @property headers {String}
 */
class Precept
{
  constructor()
  {
    this.body = ''
    this.path = '/'
    this.name = ''
    this.method = 'GET'
    this.headers = []
  }
}

export default Precept