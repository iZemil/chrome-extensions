// storage API: https://developer.chrome.com/extensions/storage
class Storage {
  /**
   * Get object by array of keys
   * @param {[string]} keys getting keys
   * @param {function} cb - fn(resulsts) => Object{ key: value, ... }
   */
  get(keys = [], cb) {
    chrome.storage.sync.get(keys, cb);
  }

  set(data) {
    chrome.storage.sync.set(data);
  }

}

export default new Storage();